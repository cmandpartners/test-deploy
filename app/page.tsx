"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Card, CardHead, CardBody } from "./components/Card";

const kpis = [
  { label: "Clients", value: "0", unit: "", sub: "Objectif : 1 avant juin" },
  { label: "Soumissions", value: "0", unit: "", sub: "Fillout · aujourd'hui" },
  { label: "Portefeuille", value: "1 559", unit: " €", sub: "PEA + LEP" },
  { label: "Sport", value: "1", unit: "/3", sub: "Cette semaine" },
];

const today = "Dimanche 20 avril 2026";

const businessTasks = [
  { id: "b1", text: "Finaliser la plateforme MAP Signature", priority: "urgent", color: "var(--red)" },
  { id: "b2", text: "Configurer Stripe", priority: "urgent", color: "var(--red)" },
  { id: "b3", text: "Rédiger contrat / CGV", priority: "urgent", color: "var(--red)" },
];

const persoTasks = [
  { id: "p1", text: "Entretien finance hebdomadaire", priority: "urgent", color: "var(--red)" },
  { id: "p2", text: "Revoir budget mensuel + comptes", priority: "à faire", color: "var(--orange)" },
  { id: "p3", text: "Point plan investissement Phase 1", priority: "à faire", color: "var(--orange)" },
];

const schedule = [
  { time: "6h30", task: "Briefing Dave" },
  { time: "7h–12h", task: "Entretien finance — budget & comptes" },
  { time: "12h–13h", task: "Déjeuner" },
  { time: "13h–16h", task: "Plan investissement Phase 1" },
  { time: "16h–17h", task: "Tâches secondaires" },
  { time: "18h+", task: "Sport" },
  { time: "20h30", task: "Briefing soir" },
];

function TaskItem({ task, done, onToggle }: {
  task: { id: string; text: string; priority: string; color: string };
  done: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      onClick={onToggle}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "10px 0", cursor: "pointer",
        opacity: done ? 0.4 : 1, transition: "opacity .2s",
      }}
    >
      <div style={{
        width: 18, height: 18, borderRadius: 5, flexShrink: 0,
        border: done ? "none" : `1.5px solid ${task.color}`,
        background: done ? "var(--green)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 10, color: done ? "#000" : "transparent", fontWeight: 700,
        transition: "all .2s",
      }}>
        {done && "✓"}
      </div>
      <span style={{
        flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300,
        textDecoration: done ? "line-through" : "none",
      }}>{task.text}</span>
      <span style={{
        fontSize: 9, fontWeight: 500, color: "var(--t4)",
        letterSpacing: ".04em", textTransform: "uppercase" as const,
      }}>{done ? "fait" : task.priority}</span>
    </div>
  );
}

export default function Home() {
  const [doneTasks, setDoneTasks] = useState<Set<string>>(new Set());

  const toggle = (id: string, text: string, category: string) => {
    const next = new Set(doneTasks);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
      fetch("/api/task-done", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: text, category }),
      }).catch(() => {});
    }
    setDoneTasks(next);
  };

  const allTasks = [...businessTasks, ...persoTasks];
  const doneCount = allTasks.filter(t => doneTasks.has(t.id)).length;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{
          padding: 0, borderRadius: 14, marginBottom: 16,
          position: "relative", overflow: "hidden", minHeight: 200,
          background: "#000",
          border: "1px solid rgba(255,255,255,.10)",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/banner.jpg')",
            backgroundSize: "cover", backgroundPosition: "center 30%",
            pointerEvents: "none",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 30%, rgba(0,0,0,.3) 50%, rgba(0,0,0,.7) 70%, #000 90%)",
            maskImage: "linear-gradient(to right, transparent 0%, transparent 30%, rgba(0,0,0,.3) 50%, rgba(0,0,0,.7) 70%, #000 90%)",
          }} />

          <div style={{ position: "relative", padding: "44px 40px", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", minHeight: 200, gap: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 400, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "rgba(255,255,255,.5)" }}>{today}</p>
            <h2 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-.02em", lineHeight: 1.5, maxWidth: "70%" }}>
              Cette journée te rapproche du toi que Dieu veut que tu sois.
            </h2>
          </div>
        </div>

        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 12 }}>
          {kpis.map((k) => (
            <Card key={k.label}>
              <div style={{ padding: 22 }}>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "rgba(255,255,255,.70)" }}>{k.label}</div>
                <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-.04em", lineHeight: 1, marginTop: 10 }}>
                  {k.value}<span style={{ fontSize: 16, fontWeight: 300, color: "var(--t3)" }}>{k.unit}</span>
                </div>
                <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 8, fontWeight: 300 }}>{k.sub}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tâches du jour + Planning du jour */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Tâches du jour" meta={`${doneCount}/${allTasks.length}`} />
            <CardBody>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "var(--t3)", marginBottom: 8 }}>Business</div>
              {businessTasks.map((t) => (
                <TaskItem key={t.id} task={t} done={doneTasks.has(t.id)} onToggle={() => toggle(t.id, t.text, "business")} />
              ))}
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "var(--t3)", marginTop: 16, marginBottom: 8 }}>Personnel</div>
              {persoTasks.map((t) => (
                <TaskItem key={t.id} task={t} done={doneTasks.has(t.id)} onToggle={() => toggle(t.id, t.text, "perso")} />
              ))}
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Planning du jour" />
            <CardBody>
              {schedule.map((s, i) => (
                <div key={s.task} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "10px 0", borderBottom: i < schedule.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                }}>
                  <span style={{ fontSize: 11, fontWeight: 500, color: "var(--t4)", minWidth: 60, fontVariantNumeric: "tabular-nums" }}>{s.time}</span>
                  <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{s.task}</span>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

      </main>
    </div>
  );
}
