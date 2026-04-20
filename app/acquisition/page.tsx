import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const tunnel = [
  { step: "1", title: "Vidéo 3 (publique)", status: "tournée", color: "var(--green)" },
  { step: "2", title: "Vidéo 2 (publique)", status: "tournée", color: "var(--green)" },
  { step: "3", title: "Vidéo 1 — VSL (non répertoriée)", status: "tournée", color: "var(--green)" },
  { step: "4", title: "Formulaire Fillout", status: "actif", color: "var(--blue)" },
  { step: "5", title: "Appel stratégique", status: "à préparer", color: "var(--orange)" },
];

const twitterTasks = [
  { task: "1-2 tweets positionnement SaaS", time: "~10 min" },
  { task: "2-3 réponses fondateurs SaaS", time: "~10 min" },
  { task: "2-3 DM prospects ciblés", time: "~15 min" },
];

const todo = [
  { item: "Structure questions Fillout", done: false },
  { item: "Script appel closing", done: false },
  { item: "Templates outreach Twitter", done: false },
  { item: "Publier les 3 vidéos", done: false },
  { item: "Cards + liens YouTube", done: false },
  { item: "Lancer routine Twitter/X", done: false },
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

        {/* Tunnel */}
        <Card>
          <CardHead title="Tunnel de conversion" />
          <CardBody>
            {tunnel.map((t, i) => (
              <div key={t.step} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "12px 0", borderBottom: i < tunnel.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
              }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 6, flexShrink: 0,
                  background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 600, color: "var(--t2)",
                }}>{t.step}</div>
                <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{t.title}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: t.color }} />
                  <span style={{ fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".04em", textTransform: "uppercase" as const }}>{t.status}</span>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>

        <div style={{ height: 12 }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {/* Twitter */}
          <Card>
            <CardHead title="Routine Twitter/X" meta="~35 min/jour" />
            <CardBody>
              {twitterTasks.map((t, i) => (
                <div key={t.task} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "10px 0", borderBottom: i < twitterTasks.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                }}>
                  <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{t.task}</span>
                  <span style={{ fontSize: 11, color: "var(--t4)" }}>{t.time}</span>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* TODO */}
          <Card>
            <CardHead title="Reste à faire" meta={String(todo.length)} />
            <CardBody>
              {todo.map((t, i) => (
                <div key={t.item} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 0", borderBottom: i < todo.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--orange)" }} />
                  <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{t.item}</span>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

      </main>
    </div>
  );
}
