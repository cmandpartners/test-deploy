import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const objective = {
  title: "Tunnel actif — premiers leads",
  horizon: "Mai 2026",
  progress: 50,
};

const tasks = [
  { text: "Structure questions Fillout", status: "à faire", color: "var(--orange)" },
  { text: "Script appel closing", status: "à faire", color: "var(--orange)" },
  { text: "Templates outreach Twitter", status: "à faire", color: "var(--orange)" },
  { text: "Publier les 3 vidéos", status: "prêt", color: "var(--green)" },
  { text: "Cards + liens YouTube", status: "prêt", color: "var(--green)" },
  { text: "Lancer routine Twitter/X", status: "en attente", color: "var(--blue)" },
];

const tunnel = [
  { step: "1", title: "Vidéo 3 (publique)", status: "tournée", color: "var(--green)" },
  { step: "2", title: "Vidéo 2 (publique)", status: "tournée", color: "var(--green)" },
  { step: "3", title: "Vidéo 1 — VSL", status: "tournée", color: "var(--green)" },
  { step: "4", title: "Formulaire Fillout", status: "actif", color: "var(--blue)" },
  { step: "5", title: "Appel stratégique", status: "à préparer", color: "var(--orange)" },
];

const twitterDaily = [
  { task: "1-2 tweets positionnement SaaS", time: "~10 min" },
  { task: "2-3 réponses fondateurs SaaS", time: "~10 min" },
  { task: "2-3 DM prospects ciblés", time: "~15 min" },
];

export default function AcquisitionPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Acquisition</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>YouTube + Twitter/X + Outreach DM</p>
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

        {/* Tâches + Tunnel */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
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
            <CardHead title="Tunnel" meta="5 étapes" />
            <CardBody>
              {tunnel.map((t, i) => (
                <div key={t.step} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 0", borderBottom: i < tunnel.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--t3)", width: 16, textAlign: "center" }}>{t.step}</span>
                  <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{t.title}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: t.color }} />
                    <span style={{ fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".04em", textTransform: "uppercase" as const }}>{t.status}</span>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Routine Twitter */}
        <Card>
          <CardHead title="Routine Twitter/X" meta="~35 min/jour" />
          <CardBody>
            {twitterDaily.map((t, i) => (
              <div key={t.task} style={{
                display: "flex", justifyContent: "space-between",
                padding: "10px 0", borderBottom: i < twitterDaily.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
              }}>
                <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{t.task}</span>
                <span style={{ fontSize: 11, color: "var(--t4)" }}>{t.time}</span>
              </div>
            ))}
          </CardBody>
        </Card>

      </main>
    </div>
  );
}
