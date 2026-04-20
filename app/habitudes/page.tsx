"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";
import Link from "next/link";

const habits = [
  { id: "h1", name: "Travailler sur mon business", capital: "financier", color: "var(--blue)" },
  { id: "h2", name: "Gym", capital: "physique", color: "var(--red)" },
  { id: "h3", name: "Cardio (foot, basket, autre)", capital: "physique", color: "var(--red)" },
  { id: "h4", name: "Exercice pour améliorer mon éloquence", capital: "culturel", color: "var(--green)" },
];

const capitalConfig: Record<string, { label: string; color: string }> = {
  financier: { label: "Capital financier", color: "var(--blue)" },
  physique: { label: "Capital physique", color: "var(--red)" },
  culturel: { label: "Capital culturel", color: "var(--green)" },
};

type ViewMode = "semaine" | "mois" | "année";

// Group habits by capital
const grouped = habits.reduce<Record<string, typeof habits>>((acc, h) => {
  if (!acc[h.capital]) acc[h.capital] = [];
  acc[h.capital].push(h);
  return acc;
}, {});

// Example data for chart (will be replaced by real data from Supabase later)
const chartData = {
  semaine: {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    financier: [100, 100, 100, 100, 0, 0, 100],
    physique: [50, 100, 0, 50, 100, 0, 0],
    culturel: [0, 100, 100, 0, 100, 0, 0],
  },
  mois: {
    labels: ["S1", "S2", "S3", "S4"],
    financier: [80, 85, 70, 90],
    physique: [40, 60, 50, 45],
    culturel: [30, 50, 60, 55],
  },
  année: {
    labels: ["Janv.", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juill.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
    financier: [0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0],
    physique: [0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0],
    culturel: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0],
  },
};

function buildSmoothPath(values: number[], width: number, height: number, padX: number, padY: number): string {
  const n = values.length;
  if (n === 0) return "";
  const maxVal = 100;
  const usableW = width - padX * 2;
  const usableH = height - padY * 2;
  const points = values.map((v, i) => ({
    x: padX + (i / (n - 1)) * usableW,
    y: padY + usableH - (v / maxVal) * usableH,
  }));

  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
  }
  return d;
}

function Chart({ view }: { view: ViewMode }) {
  const data = chartData[view];
  const w = 780;
  const h = 200;
  const padX = 45;
  const padY = 20;

  const colors: Record<string, { stroke: string; fill: string }> = {
    financier: { stroke: "#0a84ff", fill: "rgba(10,132,255,.15)" },
    physique: { stroke: "#ff3040", fill: "rgba(255,48,64,.12)" },
    culturel: { stroke: "#00d084", fill: "rgba(0,208,132,.12)" },
  };

  const gridLines = [0, 25, 50, 75, 100];

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h + 40}`} fill="none">
      {/* Horizontal grid */}
      {gridLines.map((v) => {
        const y = padY + (h - padY * 2) - (v / 100) * (h - padY * 2);
        return (
          <g key={v}>
            <line x1={padX} y1={y} x2={w - 10} y2={y} stroke="rgba(255,255,255,.04)" strokeWidth="1" />
            <text x={padX - 8} y={y + 3} fill="rgba(255,255,255,.25)" fontSize="9" fontFamily="Inter" textAnchor="end">
              {v}%
            </text>
          </g>
        );
      })}

      {/* Curves */}
      {(["financier", "physique", "culturel"] as const).map((key) => {
        const values = data[key];
        const linePath = buildSmoothPath(values, w, h, padX, padY);
        const lastPoint = `${padX + ((values.length - 1) / (values.length - 1)) * (w - padX * 2)},${padY + (h - padY * 2)}`;
        const firstPoint = `${padX},${padY + (h - padY * 2)}`;
        const areaPath = `${linePath} L${lastPoint} L${firstPoint} Z`;
        return (
          <g key={key}>
            <path d={areaPath} fill={colors[key].fill} />
            <path d={linePath} stroke={colors[key].stroke} strokeWidth="2" fill="none" />
            {/* Dots */}
            {values.map((v, i) => {
              const x = padX + (i / (values.length - 1)) * (w - padX * 2);
              const y = padY + (h - padY * 2) - (v / 100) * (h - padY * 2);
              return <circle key={i} cx={x} cy={y} r="3" fill={colors[key].stroke} opacity={v > 0 ? 1 : 0.3} />;
            })}
          </g>
        );
      })}

      {/* X labels */}
      {data.labels.map((label, i) => {
        const x = padX + (i / (data.labels.length - 1)) * (w - padX * 2);
        return (
          <text key={label} x={x} y={h + 14} fill="rgba(255,255,255,.35)" fontSize="10" fontFamily="Inter" textAnchor="middle">
            {label}
          </text>
        );
      })}
    </svg>
  );
}

export default function HabitudesPage() {
  const [doneHabits, setDoneHabits] = useState<Set<string>>(new Set());
  const [view, setView] = useState<ViewMode>("année");

  const toggle = (id: string, name: string) => {
    const next = new Set(doneHabits);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
      fetch("/api/task-done", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: name, category: "habitude" }),
      }).catch(() => {});
    }
    setDoneHabits(next);
  };

  const doneCount = habits.filter((h) => doneHabits.has(h.id)).length;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px", maxWidth: 1000 }}>
        <div style={{ marginBottom: 32 }}>
          <Link href="/" style={{ fontSize: 11, color: "var(--t4)", textDecoration: "none", letterSpacing: ".06em", textTransform: "uppercase" }}>
            ← Retour
          </Link>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em", marginTop: 14 }}>Habitudes</h2>
          <p style={{ fontSize: 13, color: "var(--t3)", marginTop: 6, fontWeight: 300, lineHeight: 1.6 }}>
            Suivi quotidien — construit ta discipline, capital par capital.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          {/* Habitudes du jour */}
          <Card>
            <CardHead title="Habitudes du jour" meta={`${doneCount}/${habits.length}`} />
            <CardBody>
              {Object.entries(grouped).map(([capital, items]) => (
                <div key={capital}>
                  <div style={{
                    fontSize: 10, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase",
                    color: "var(--t3)", marginBottom: 8, marginTop: capital === "financier" ? 0 : 16,
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: capitalConfig[capital].color }} />
                    {capitalConfig[capital].label}
                  </div>
                  {items.map((h) => {
                    const done = doneHabits.has(h.id);
                    return (
                      <div
                        key={h.id}
                        onClick={() => toggle(h.id, h.name)}
                        style={{
                          display: "flex", alignItems: "center", gap: 10,
                          padding: "10px 0", cursor: "pointer",
                          opacity: done ? 0.4 : 1, transition: "opacity .2s",
                          borderBottom: "1px solid rgba(255,255,255,.03)",
                        }}
                      >
                        <div style={{
                          width: 18, height: 18, borderRadius: 5, flexShrink: 0,
                          border: done ? "none" : `1.5px solid ${h.color}`,
                          background: done ? "var(--green)" : "transparent",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 10, color: done ? "#000" : "transparent", fontWeight: 700,
                          transition: "all .2s",
                        }}>
                          {done && "✓"}
                        </div>
                        <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300, textDecoration: done ? "line-through" : "none" }}>
                          {h.name}
                        </span>
                        <span style={{ fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".04em", textTransform: "uppercase" }}>
                          {done ? "fait" : "à faire"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Graphique courbes */}
          <Card>
            <div style={{ padding: "18px 22px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div className="c-title">Réalisations</div>
              <div style={{ display: "flex", gap: 4 }}>
                {(["semaine", "mois", "année"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    style={{
                      padding: "5px 12px", borderRadius: 6, fontSize: 10, fontWeight: 600,
                      letterSpacing: ".04em", textTransform: "uppercase", cursor: "pointer",
                      border: "1px solid",
                      borderColor: view === v ? "rgba(255,255,255,.15)" : "transparent",
                      background: view === v ? "rgba(255,255,255,.08)" : "transparent",
                      color: view === v ? "var(--t1)" : "var(--t4)",
                      transition: "all .2s",
                    }}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <CardBody>
              <Chart view={view} />
              <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--t3)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0a84ff" }} /> Business
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--t3)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff3040" }} /> Sport
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--t3)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00d084" }} /> Éloquence
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

      </main>
    </div>
  );
}
