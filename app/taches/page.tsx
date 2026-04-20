import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const tasks = [
  { text: "Configurer Stripe", status: "bloqueur", color: "var(--red)" },
  { text: "Rédiger contrat / CGV", status: "bloqueur", color: "var(--red)" },
  { text: "Formulaire onboarding Fillout", status: "à faire", color: "var(--orange)" },
  { text: "Tourner vidéos de bienvenue", status: "à faire", color: "var(--orange)" },
  { text: "Script d'appel de closing", status: "à faire", color: "var(--orange)" },
  { text: "Templates outreach Twitter", status: "à faire", color: "var(--orange)" },
  { text: "Ouvrir CTO Trade Republic", status: "à faire", color: "var(--orange)" },
  { text: "Publier vidéos YouTube", status: "prêt", color: "var(--green)" },
  { text: "Configurer cards + liens YouTube", status: "prêt", color: "var(--green)" },
  { text: "Lancer outreach Twitter/X", status: "en attente", color: "var(--blue)" },
  { text: "Configurer Calendly", status: "en attente", color: "var(--blue)" },
  { text: "Stratégie contenu régulière", status: "en attente", color: "var(--blue)" },
];

const legend = [
  { label: "Bloqueur", color: "var(--red)", count: 2 },
  { label: "À faire", color: "var(--orange)", count: 5 },
  { label: "Prêt", color: "var(--green)", count: 2 },
  { label: "En attente", color: "var(--blue)", count: 3 },
];

export default function TachesPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Tâches</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>{tasks.length} tâches · 2 bloqueurs</p>
        </div>

        {/* Légende */}
        <div style={{ display: "flex", gap: 20, marginBottom: 16 }}>
          {legend.map((l) => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: l.color }} />
              <span style={{ fontSize: 11, color: "var(--t3)", fontWeight: 300 }}>{l.label} ({l.count})</span>
            </div>
          ))}
        </div>

        <Card>
          <CardBody>
            {tasks.map((t, i) => (
              <div key={t.text} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "12px 0", borderBottom: i < tasks.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: t.color }} />
                <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{t.text}</span>
                <span style={{ fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".04em", textTransform: "uppercase" as const }}>{t.status}</span>
              </div>
            ))}
          </CardBody>
        </Card>

      </main>
    </div>
  );
}
