import Sidebar from "./components/Sidebar";
import { Card, CardHead, CardBody } from "./components/Card";

const kpis = [
  { label: "Clients", value: "0", unit: "", sub: "Objectif : 1 avant juin" },
  { label: "Soumissions", value: "0", unit: "", sub: "Fillout · aujourd'hui" },
  { label: "Portefeuille", value: "1 559", unit: " €", sub: "PEA + LEP" },
  { label: "Sport", value: "1", unit: "/3", sub: "Cette semaine" },
];

const today = "Dimanche 20 avril 2026";

const leverTask = {
  title: "Finaliser la plateforme MAP Signature",
  context: "Stripe, contrat/CGV, onboarding Fillout, vidéos bienvenue",
};

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

const weekHabits = [
  { name: "Sport", done: 1, target: 3 },
  { name: "Réveil 6h", done: 2, target: 7 },
  { name: "Contenu", done: 0, target: 7 },
  { name: "Outreach", done: 0, target: 7 },
];

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{
          padding: 0, borderRadius: 14, marginBottom: 16,
          position: "relative", overflow: "hidden", minHeight: 180,
          background: "#000",
          border: "1px solid rgba(255,255,255,.10)",
        }}>
          {/* Image full width, positioned right */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/banner.jpg')",
            backgroundSize: "cover", backgroundPosition: "right top",
            pointerEvents: "none",
          }} />
          {/* Smooth black to transparent gradient */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, #000 20%, rgba(0,0,0,.85) 35%, rgba(0,0,0,.4) 60%, transparent 85%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", padding: "44px 40px", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", minHeight: 180, gap: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 400, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "rgba(255,255,255,.5)" }}>{today}</p>
            <h2 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-.02em", lineHeight: 1.5, whiteSpace: "nowrap" }}>
              Cette journée te rapproche du toi que Dieu veut que tu sois.
            </h2>
          </div>
        </div>

        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 12 }}>
          {kpis.map((k) => (
            <Card key={k.label}>
              <div style={{ padding: 22 }}>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "var(--t1)" }}>{k.label}</div>
                <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-.04em", lineHeight: 1, marginTop: 10 }}>
                  {k.value}<span style={{ fontSize: 16, fontWeight: 300, color: "var(--t3)" }}>{k.unit}</span>
                </div>
                <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 8, fontWeight: 300 }}>{k.sub}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tâche levier */}
        <Card>
          <div style={{ padding: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "var(--t1)", marginBottom: 12 }}>
              Tâche levier du jour
            </div>
            <div style={{ fontSize: 20, fontWeight: 500, color: "var(--t1)", letterSpacing: "-.02em" }}>{leverTask.title}</div>
            <div style={{ fontSize: 13, color: "var(--t3)", marginTop: 6, fontWeight: 300 }}>{leverTask.context}</div>
          </div>
        </Card>

        <div style={{ height: 12 }} />

        {/* Planning jour + Tâches + Bloqueurs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
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

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Card>
              <CardHead title="Aujourd'hui" meta={String(todayTasks.length)} />
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
              </CardBody>
            </Card>

            <Card>
              <CardHead title="Bloqueurs" meta={String(blockers.length)} />
              <CardBody>
                {blockers.map((b, i) => (
                  <div key={b.text} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 0", borderBottom: i < blockers.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: b.color }} />
                    <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{b.text}</span>
                  </div>
                ))}
              </CardBody>
            </Card>

            <Card>
              <CardHead title="Habitudes" meta="S17" />
              <CardBody>
                {weekHabits.map((h, i) => (
                  <div key={h.name} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "8px 0", borderBottom: i < weekHabits.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                  }}>
                    <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{h.name}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--t1)" }}>{h.done}<span style={{ fontSize: 11, fontWeight: 300, color: "var(--t3)" }}>/{h.target}</span></span>
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
