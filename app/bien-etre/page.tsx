import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const objective = {
  title: "Physique athlétique + routine stable",
  horizon: "Permanent",
  progress: 33,
};

const tasks = [
  { text: "Installer routine sport 3x/semaine", status: "en cours", color: "var(--orange)" },
  { text: "Stabiliser réveil 6h", status: "en cours", color: "var(--orange)" },
  { text: "Définir plan alimentation Martinique", status: "à faire", color: "var(--orange)" },
  { text: "Liste livres à lire", status: "en attente", color: "var(--blue)" },
];

const habits = [
  { name: "Sport", done: 1, target: 3, unit: "sessions" },
  { name: "Réveil 6h", done: 2, target: 7, unit: "jours" },
  { name: "Contenu", done: 0, target: 7, unit: "jours" },
  { name: "Outreach", done: 0, target: 7, unit: "jours" },
];

const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];
const weekData = [
  { name: "Sport", days: [true, false, false, false, false, false, false] },
  { name: "Réveil 6h", days: [true, true, false, false, false, false, false] },
  { name: "Contenu", days: [false, false, false, false, false, false, false] },
  { name: "Outreach", days: [false, false, false, false, false, false, false] },
];

const routine = [
  { time: "6h00", task: "Réveil" },
  { time: "6h30", task: "Briefing Dave" },
  { time: "7h–12h", task: "Travail concentré" },
  { time: "12h–13h", task: "Déjeuner" },
  { time: "13h–15h", task: "Sport / lecture / formation" },
  { time: "20h30", task: "Briefing soir" },
  { time: "22h", task: "Coucher (8h de sommeil)" },
];

export default function BienEtrePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Bien-être</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>Sport · Routine · Habitudes</p>
        </div>

        {/* Objectif */}
        <Card>
          <div style={{ padding: 28 }}>
            <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: ".12em", textTransform: "uppercase" as const, color: "var(--t4)", marginBottom: 12 }}>Objectif</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontSize: 20, fontWeight: 500, color: "var(--t1)" }}>{objective.title}</div>
              <span style={{ fontSize: 11, color: "var(--t4)", fontWeight: 300 }}>{objective.horizon}</span>
            </div>
            <div style={{ height: 3, background: "rgba(255,255,255,.04)", borderRadius: 2, marginTop: 14 }}>
              <div style={{ height: "100%", width: `${objective.progress}%`, background: "var(--t1)", borderRadius: 2 }} />
            </div>
          </div>
        </Card>

        <div style={{ height: 12 }} />

        {/* Habitudes semaine + Tâches */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Semaine" meta="S17" />
            <CardBody>
              <div style={{ display: "flex", gap: 14, marginBottom: 8, paddingLeft: 80 }}>
                {dayLabels.map((d, i) => (
                  <span key={`day-${i}`} style={{ width: 16, textAlign: "center", fontSize: 8, color: "var(--t4)" }}>{d}</span>
                ))}
              </div>
              {weekData.map((h) => (
                <div key={h.name} style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300, minWidth: 66 }}>{h.name}</span>
                  <div style={{ display: "flex", gap: 4 }}>
                    {h.days.map((done, i) => (
                      <div key={`${h.name}-${i}`} style={{
                        width: 16, height: 16, borderRadius: 4,
                        background: done ? "rgba(0,208,132,.15)" : "rgba(255,255,255,.03)",
                        border: `1px solid ${done ? "rgba(0,208,132,.25)" : "rgba(255,255,255,.04)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 8, color: done ? "var(--green)" : "transparent",
                      }}>
                        {done && "✓"}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
                {habits.map((h) => (
                  <div key={h.name} style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ fontSize: 18, fontWeight: 600, color: "var(--t1)" }}>{h.done}<span style={{ fontSize: 11, fontWeight: 300, color: "var(--t3)" }}>/{h.target}</span></div>
                    <div style={{ fontSize: 10, color: "var(--t4)", marginTop: 2, fontWeight: 300 }}>{h.name}</div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Card>
              <CardHead title="Tâches" meta={String(tasks.length)} />
              <CardBody>
                {tasks.map((t, i) => (
                  <div key={t.text} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 0", borderBottom: i < tasks.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: t.color }} />
                    <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{t.text}</span>
                    <span style={{ fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".04em", textTransform: "uppercase" as const }}>{t.status}</span>
                  </div>
                ))}
              </CardBody>
            </Card>

            <Card>
              <CardHead title="Routine quotidienne" />
              <CardBody>
                {routine.map((r, i) => (
                  <div key={r.task} style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "9px 0", borderBottom: i < routine.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                  }}>
                    <span style={{ fontSize: 11, fontWeight: 500, color: "var(--t4)", minWidth: 60, fontVariantNumeric: "tabular-nums" }}>{r.time}</span>
                    <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{r.task}</span>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
        </div>

      </main>
    </div>
  );
}
