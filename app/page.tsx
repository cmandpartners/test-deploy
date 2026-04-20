import Sidebar from "./components/Sidebar";
import { Card, CardHead, CardBody } from "./components/Card";

const kpis = [
  { label: "Clients", value: "0", unit: "", sub: "Objectif : 1 avant juin" },
  { label: "Soumissions", value: "0", unit: "", sub: "Fillout · aujourd'hui" },
  { label: "Portefeuille", value: "1 559", unit: " €", sub: "PEA + LEP" },
  { label: "Sport", value: "1", unit: "/3", sub: "Cette semaine" },
];

const leverTask = {
  title: "Finaliser la plateforme MAP Signature",
  context: "Compléter les fonctionnalités + générer les livrables manquants",
};

const todayTasks = [
  { text: "Finaliser plateforme MAP Signature", status: "levier", color: "var(--t1)" },
  { text: "Tâches finance (16h)", status: "planifié", color: "var(--blue)" },
];

const blockers = [
  { text: "Configurer Stripe", color: "var(--red)" },
  { text: "Rédiger contrat / CGV", color: "var(--red)" },
];

const schedule = [
  { time: "6h30", task: "Briefing Dave" },
  { time: "7h–12h", task: "Finaliser plateforme MAP Signature" },
  { time: "12h–13h", task: "Déjeuner" },
  { time: "13h–16h", task: "Tâches secondaires" },
  { time: "16h", task: "Tâches finance" },
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
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 40%",
          border: "1px solid rgba(255,255,255,.10)",
        }}>
          {/* Dark overlay for text readability */}
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(0,0,0,.45)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", padding: "52px 40px", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 180 }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-.02em", lineHeight: 1.4, textAlign: "center", textShadow: "0 2px 20px rgba(0,0,0,.6)" }}>
              Cette journée te rapproche du toi que Dieu veut que tu sois.
            </h2>
          </div>
        </div>

        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 12 }}>
          {kpis.map((k) => (
            <Card key={k.label}>
              <div style={{ padding: 22 }}>
                <div style={{ fontSize: 11, color: "var(--t3)" }}>{k.label}</div>
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
            <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: ".12em", textTransform: "uppercase" as const, color: "var(--t4)", marginBottom: 12 }}>
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
            <CardHead title="Journée" />
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
