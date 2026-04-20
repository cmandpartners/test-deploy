import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const routineMatin = [
  { time: "6h00", task: "Réveil", done: false },
  { time: "6h00-6h30", task: "Routine matinale", done: false },
  { time: "6h30", task: "Briefing Dave (Telegram)", done: true },
  { time: "7h00-12h00", task: "Travail concentré — 1 tâche à fort levier", done: false },
];

const routineAprem = [
  { time: "12h00-13h00", task: "Déjeuner", done: false },
  { time: "13h00-15h00", task: "Sport / lecture / formation", done: false },
  { time: "15h00-17h00", task: "Tâches secondaires / admin", done: false },
  { time: "20h30", task: "Briefing soir Dave (Telegram)", done: true },
  { time: "22h00", task: "Coucher (objectif 8h de sommeil)", done: false },
];

const weekPlan = [
  { day: "Lundi", focus: "Tâche levier #1 — business", extra: "Outreach Twitter (~35 min)" },
  { day: "Mardi", focus: "Tâche levier #1 — business", extra: "Outreach Twitter (~35 min)" },
  { day: "Mercredi", focus: "Contenu — vidéos / posts", extra: "Outreach Twitter (~35 min)" },
  { day: "Jeudi", focus: "Tâche levier #1 — business", extra: "Outreach Twitter (~35 min)" },
  { day: "Vendredi", focus: "Tâche levier #1 — business", extra: "Outreach Twitter (~35 min)" },
  { day: "Samedi", focus: "Libre / formation / lecture", extra: "" },
  { day: "Dimanche", focus: "Finance — entretien bimensuel", extra: "Repos / préparation semaine" },
];

const habits = [
  { name: "Sport", target: "3x/semaine", current: "1x cette semaine" },
  { name: "Réveil 6h", target: "Tous les jours", current: "2/7 cette semaine" },
  { name: "Contenu", target: "Quotidien", current: "0/7 cette semaine" },
  { name: "Outreach", target: "~35 min/jour", current: "0/7 cette semaine" },
];

export default function PlanningPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Planning</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>
            Routine quotidienne · Semaine type · Habitudes
          </p>
        </div>

        {/* Routine jour */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Matin" meta="6h → 12h" />
            <CardBody>
              {routineMatin.map((r) => (
                <div key={r.task} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <span style={{
                    fontSize: 11, fontWeight: 500, color: "var(--t4)", minWidth: 80,
                    fontVariantNumeric: "tabular-nums",
                  }}>{r.time}</span>
                  <span style={{ fontSize: 13, color: r.done ? "var(--t3)" : "var(--t2)", fontWeight: 300 }}>{r.task}</span>
                  {r.done && <span style={{ fontSize: 9, color: "var(--green)", marginLeft: "auto" }}>AUTO</span>}
                </div>
              ))}
              <div style={{
                marginTop: 14, padding: 14, borderRadius: 10,
                background: "rgba(167,139,250,.05)", border: "1px solid rgba(167,139,250,.10)",
              }}>
                <div style={{ fontSize: 12, color: "var(--t2)", fontWeight: 300, lineHeight: 1.6 }}>
                  <strong style={{ fontWeight: 500, color: "var(--t1)" }}>Principe :</strong> Une seule tâche à fort levier par matinée.
                  Pas de multitâche. Pas de réunion. Focus total.
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Après-midi / Soir" meta="12h → 22h" />
            <CardBody>
              {routineAprem.map((r) => (
                <div key={r.task} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <span style={{
                    fontSize: 11, fontWeight: 500, color: "var(--t4)", minWidth: 80,
                    fontVariantNumeric: "tabular-nums",
                  }}>{r.time}</span>
                  <span style={{ fontSize: 13, color: r.done ? "var(--t3)" : "var(--t2)", fontWeight: 300 }}>{r.task}</span>
                  {r.done && <span style={{ fontSize: 9, color: "var(--green)", marginLeft: "auto" }}>AUTO</span>}
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Semaine type */}
        <Card>
          <CardHead title="Semaine type" meta="7 jours" />
          <CardBody>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
              {weekPlan.map((d) => (
                <div key={d.day} style={{
                  padding: 16, borderRadius: 10,
                  background: d.day === "Dimanche" ? "rgba(167,139,250,.05)" : "rgba(255,255,255,.02)",
                  border: `1px solid ${d.day === "Dimanche" ? "rgba(167,139,250,.10)" : "rgba(255,255,255,.04)"}`,
                }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "var(--t2)", marginBottom: 8 }}>{d.day}</div>
                  <div style={{ fontSize: 11, color: "var(--t3)", fontWeight: 300, lineHeight: 1.5 }}>{d.focus}</div>
                  {d.extra && (
                    <div style={{ fontSize: 10, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>{d.extra}</div>
                  )}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <div style={{ height: 12 }} />

        {/* Habitudes */}
        <Card>
          <CardHead title="Habitudes" meta="S17" />
          <CardBody>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {habits.map((h) => (
                <div key={h.name} style={{
                  padding: 18, borderRadius: 10,
                  background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.04)",
                }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--t1)", marginBottom: 10 }}>{h.name}</div>
                  <div style={{ fontSize: 12, color: "var(--t3)", fontWeight: 300 }}>Objectif : {h.target}</div>
                  <div style={{ fontSize: 12, color: "var(--t4)", marginTop: 4, fontWeight: 300 }}>{h.current}</div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

      </main>
    </div>
  );
}
