import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const tasksByCategory = [
  {
    category: "Bloqueurs",
    color: "rgba(248,113,113,.6)",
    tasks: [
      { text: "Configurer Stripe", context: "Nécessaire pour encaisser le premier paiement client", status: "bloqueur" },
      { text: "Rédiger contrat / CGV", context: "Obligatoire avant de signer un client", status: "bloqueur" },
    ],
  },
  {
    category: "À faire",
    color: "rgba(96,165,250,.5)",
    tasks: [
      { text: "Formulaire onboarding Fillout", context: "Structurer les questions de qualification", status: "à faire" },
      { text: "Tourner vidéos de bienvenue", context: "Pour l'onboarding client sur la plateforme", status: "à faire" },
      { text: "Script d'appel de closing", context: "Préparer l'argumentaire pour l'appel stratégique", status: "à faire" },
      { text: "Templates messages outreach Twitter", context: "DM personnalisés pour les fondateurs SaaS", status: "à faire" },
      { text: "Ouvrir CTO Trade Republic", context: "DCA 50€/mois en IWDA", status: "à faire" },
    ],
  },
  {
    category: "Prêt à lancer",
    color: "var(--green)",
    tasks: [
      { text: "Publier vidéos YouTube", context: "3 vidéos tournées et montées — prêtes à publier", status: "prêt" },
      { text: "Configurer cards + liens YouTube", context: "Tunnel vidéo 3→2→1→Fillout", status: "prêt" },
    ],
  },
  {
    category: "En attente",
    color: "var(--t4)",
    tasks: [
      { text: "Lancer outreach Twitter/X", context: "Après publication des vidéos et templates prêts", status: "en attente" },
      { text: "Configurer Calendly", context: "Pour les appels stratégiques — après Stripe", status: "en attente" },
      { text: "Stratégie contenu régulière", context: "Après le lancement initial — contenu récurrent", status: "en attente" },
    ],
  },
];

const upcoming = [
  { text: "Tâches finance", date: "Lun. 20 avril · 16h", dot: "next" },
  { text: "Entretien finance", date: "Dim. 4 mai", dot: "future" },
];

export default function TachesPage() {
  const total = tasksByCategory.reduce((acc, c) => acc + c.tasks.length, 0);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Tâches</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>
            {total} tâches actives · 2 bloqueurs
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {tasksByCategory.map((cat) => (
              <Card key={cat.category}>
                <CardHead title={cat.category} meta={String(cat.tasks.length)} />
                <CardBody>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {cat.tasks.map((t) => (
                      <div key={t.text} style={{
                        display: "flex", alignItems: "flex-start", gap: 14,
                        padding: "14px 4px", borderBottom: "1px solid rgba(255,255,255,.03)",
                      }}>
                        <div style={{
                          width: 7, height: 7, borderRadius: "50%", flexShrink: 0, marginTop: 5,
                          background: cat.color,
                        }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, color: "var(--t1)", fontWeight: 400 }}>{t.text}</div>
                          <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 3, fontWeight: 300 }}>{t.context}</div>
                        </div>
                        <span style={{
                          fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".04em",
                          textTransform: "uppercase" as const, flexShrink: 0,
                        }}>{t.status}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Sidebar : planning + rappels */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Card>
              <CardHead title="Prochains rendez-vous" />
              <CardBody>
                {upcoming.map((u) => (
                  <div key={u.text} style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                    padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.03)",
                  }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: "50%", flexShrink: 0, marginTop: 5,
                      background: u.dot === "next" ? "var(--accent)" : "var(--t4)",
                      boxShadow: u.dot === "next" ? "0 0 8px rgba(167,139,250,.3)" : "none",
                    }} />
                    <div>
                      <div style={{ fontSize: 13, color: "var(--t2)", fontWeight: 400 }}>{u.text}</div>
                      <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 2, fontWeight: 300 }}>{u.date}</div>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>

            <Card>
              <CardHead title="Résumé" />
              <CardBody>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {tasksByCategory.map((cat) => (
                    <div key={cat.category} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: cat.color }} />
                      <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{cat.category}</span>
                      <span style={{ fontSize: 15, fontWeight: 600, color: "var(--t1)" }}>{cat.tasks.length}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

      </main>
    </div>
  );
}
