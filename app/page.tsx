import Sidebar from "./components/Sidebar";
import { Card, CardHead, CardBody } from "./components/Card";

const kpis = [
  { label: "Clients", value: "0", unit: "", sub: "Objectif : 1 avant juin" },
  { label: "Soumissions", value: "0", unit: "", sub: "Fillout · aujourd'hui" },
  { label: "Portefeuille", value: "1 559", unit: " €", sub: "PEA + LEP" },
  { label: "Sport", value: "1", unit: "/3", sub: "Cette semaine" },
];

const today = "Dimanche 20 avril 2026";

const todayTasks = [
  { text: "Entretien finance hebdomadaire", status: "levier", color: "var(--t1)" },
  { text: "Revoir budget mensuel + comptes", status: "à faire", color: "var(--orange)" },
  { text: "Point plan investissement Phase 1", status: "à faire", color: "var(--orange)" },
];

const blockers = [
  { text: "Configurer Stripe", color: "var(--red)" },
  { text: "Rédiger contrat / CGV", color: "var(--red)" },
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

export default function Home() {
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
          {/* Image with mask fade */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/banner.jpg')",
            backgroundSize: "cover", backgroundPosition: "center",
            pointerEvents: "none",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,.15) 20%, rgba(0,0,0,.5) 40%, rgba(0,0,0,.8) 60%, #000 80%)",
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,.15) 20%, rgba(0,0,0,.5) 40%, rgba(0,0,0,.8) 60%, #000 80%)",
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
            <CardHead title="Tâches du jour" meta={String(todayTasks.length)} />
            <CardBody>
              {todayTasks.map((t, i) => (
                <div key={t.text} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 0", borderBottom: i < todayTasks.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: t.color }} />
                  <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{t.text}</span>
                  <span style={{ fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".04em", textTransform: "uppercase" as const }}>{t.status}</span>
                </div>
              ))}
              {blockers.length > 0 && (
                <>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "var(--red)", marginTop: 14, marginBottom: 6 }}>Bloqueurs</div>
                  {blockers.map((b, i) => (
                    <div key={b.text} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "8px 0", borderBottom: i < blockers.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: b.color }} />
                      <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{b.text}</span>
                    </div>
                  ))}
                </>
              )}
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
