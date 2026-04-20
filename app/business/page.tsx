import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const objective = {
  title: "Signer le premier client",
  horizon: "Avant juin 2026",
  progress: 0,
};

const tasks = [
  { text: "Configurer Stripe", status: "bloqueur", color: "var(--red)" },
  { text: "Rédiger contrat / CGV", status: "bloqueur", color: "var(--red)" },
  { text: "Formulaire onboarding Fillout", status: "à faire", color: "var(--orange)" },
  { text: "Tourner vidéos de bienvenue", status: "à faire", color: "var(--orange)" },
  { text: "Configurer Calendly", status: "en attente", color: "var(--blue)" },
  { text: "Stratégie contenu régulière", status: "en attente", color: "var(--blue)" },
];

const checklist = [
  { item: "Protocole MAP rédigé", done: true },
  { item: "Plateforme déployée", done: true },
  { item: "3 vidéos YouTube", done: true },
  { item: "Formulaire candidature", done: true },
  { item: "Stripe", done: false },
  { item: "Contrat / CGV", done: false },
  { item: "Onboarding Fillout", done: false },
  { item: "Vidéos bienvenue", done: false },
  { item: "Calendly", done: false },
  { item: "Stratégie contenu", done: false },
];

const pricing = [
  { range: "Clients 1-2", price: "3 000 €", active: true },
  { range: "Clients 3-4", price: "4 000 €", active: false },
  { range: "Clients 5+", price: "5 000 €", active: false },
];

const upcoming = [
  { text: "Finaliser plateforme", date: "Lun. 21 avril", color: "var(--blue)" },
  { text: "Publier vidéos YouTube", date: "À planifier", color: "var(--orange)" },
  { text: "Lancer outreach Twitter/X", date: "Après vidéos", color: "var(--orange)" },
];

export default function BusinessPage() {
  const ready = checklist.filter(c => c.done).length;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>CM & Partners</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>Positionnement stratégique SaaS B2B · Méthode MAP</p>
        </div>

        {/* Objectif */}
        <Card>
          <div style={{ padding: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "var(--t1)", marginBottom: 12 }}>Objectif</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontSize: 20, fontWeight: 500, color: "var(--t1)" }}>{objective.title}</div>
              <span style={{ fontSize: 11, color: "var(--t4)", fontWeight: 300 }}>{objective.horizon}</span>
            </div>
            <div style={{ height: 3, background: "rgba(255,255,255,.04)", borderRadius: 2, marginTop: 14 }}>
              <div style={{ height: "100%", width: `${objective.progress}%`, background: "var(--t1)", borderRadius: 2, minWidth: objective.progress > 0 ? 4 : 0 }} />
            </div>
          </div>
        </Card>

        <div style={{ height: 12 }} />

        {/* Tâches + Planning */}
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

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Card>
              <CardHead title="Prochaines étapes" />
              <CardBody>
                {upcoming.map((u, i) => (
                  <div key={u.text} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 0", borderBottom: i < upcoming.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: u.color }} />
                    <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{u.text}</span>
                    <span style={{ fontSize: 11, color: "var(--t4)", fontWeight: 300 }}>{u.date}</span>
                  </div>
                ))}
              </CardBody>
            </Card>

            <Card>
              <CardHead title="Lancement" meta={`${ready}/${checklist.length}`} />
              <CardBody>
                {checklist.map((c, i) => (
                  <div key={c.item} style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "8px 0", borderBottom: i < checklist.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: c.done ? "var(--green)" : "var(--red)" }} />
                    <span style={{ fontSize: 12, color: c.done ? "var(--t3)" : "var(--t2)", fontWeight: 300 }}>{c.item}</span>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Pricing */}
        <Card>
          <CardHead title="Tarif" meta="évolutif" />
          <CardBody>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {pricing.map((p) => (
                <div key={p.range} style={{
                  padding: 18, borderRadius: 10, textAlign: "center",
                  background: p.active ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.02)",
                  border: `1px solid ${p.active ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.04)"}`,
                }}>
                  <div style={{ fontSize: 11, color: "var(--t3)", fontWeight: 300, marginBottom: 6 }}>{p.range}</div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: p.active ? "var(--t1)" : "var(--t3)" }}>{p.price}</div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

      </main>
    </div>
  );
}
