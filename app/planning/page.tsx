import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const routine = [
  { time: "6h00", task: "Réveil" },
  { time: "6h30", task: "Briefing Dave" },
  { time: "7h–12h", task: "Travail concentré — 1 tâche à fort levier" },
  { time: "12h–13h", task: "Déjeuner" },
  { time: "13h–15h", task: "Sport / lecture / formation" },
  { time: "15h–17h", task: "Tâches secondaires" },
  { time: "20h30", task: "Briefing soir Dave" },
  { time: "22h", task: "Coucher" },
];

const week = [
  { day: "Lun", focus: "Business" },
  { day: "Mar", focus: "Business" },
  { day: "Mer", focus: "Contenu" },
  { day: "Jeu", focus: "Business" },
  { day: "Ven", focus: "Business" },
  { day: "Sam", focus: "Libre" },
  { day: "Dim", focus: "Finance" },
];

const habits = [
  { name: "Sport", target: "3x/sem", current: "1/3" },
  { name: "Réveil 6h", target: "7x/sem", current: "2/7" },
  { name: "Contenu", target: "1x/jour", current: "0/7" },
  { name: "Outreach", target: "35 min/jour", current: "0/7" },
];

export default function PlanningPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Planning</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>Routine · Semaine type · Habitudes</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          {/* Routine */}
          <Card>
            <CardHead title="Journée type" />
            <CardBody>
              {routine.map((r, i) => (
                <div key={r.task} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "10px 0", borderBottom: i < routine.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                }}>
                  <span style={{ fontSize: 11, fontWeight: 500, color: "var(--t4)", minWidth: 70, fontVariantNumeric: "tabular-nums" }}>{r.time}</span>
                  <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{r.task}</span>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Habitudes */}
          <Card>
            <CardHead title="Habitudes" meta="S17" />
            <CardBody>
              {habits.map((h, i) => (
                <div key={h.name} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "12px 0", borderBottom: i < habits.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                }}>
                  <div>
                    <div style={{ fontSize: 13, color: "var(--t2)", fontWeight: 400 }}>{h.name}</div>
                    <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 2, fontWeight: 300 }}>Objectif : {h.target}</div>
                  </div>
                  <span style={{ fontSize: 18, fontWeight: 600, color: "var(--t1)" }}>{h.current}</span>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Semaine */}
        <Card>
          <CardHead title="Semaine type" />
          <CardBody>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
              {week.map((d) => (
                <div key={d.day} style={{
                  padding: 16, borderRadius: 10, textAlign: "center",
                  background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.04)",
                }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--t2)", marginBottom: 6 }}>{d.day}</div>
                  <div style={{ fontSize: 11, color: "var(--t3)", fontWeight: 300 }}>{d.focus}</div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

      </main>
    </div>
  );
}
