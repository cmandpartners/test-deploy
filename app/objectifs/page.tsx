import Sidebar from "../components/Sidebar";
import { Card, CardBody } from "../components/Card";

const objectives = [
  {
    title: "Signer le premier client",
    category: "business",
    horizon: "Avant juin 2026",
    progress: 0,
    milestones: [
      { text: "Plateforme déployée", done: true },
      { text: "3 vidéos YouTube", done: true },
      { text: "Protocole MAP", done: true },
      { text: "Formulaire candidature", done: true },
      { text: "Stripe + paiement", done: false },
      { text: "Contrat / CGV", done: false },
      { text: "Tunnel vidéo actif", done: false },
      { text: "Outreach lancé", done: false },
      { text: "1er appel stratégique", done: false },
      { text: "Signature", done: false },
    ],
  },
  {
    title: "YouTube — contenu de conviction",
    category: "acquisition",
    horizon: "Avril-Mai 2026",
    progress: 60,
    milestones: [
      { text: "Vidéo 1 (VSL)", done: true },
      { text: "Vidéo 2", done: true },
      { text: "Vidéo 3", done: true },
      { text: "Publication", done: false },
      { text: "Cards + liens", done: false },
    ],
  },
  {
    title: "Plateforme MAP Signature",
    category: "produit",
    horizon: "En cours",
    progress: 60,
    milestones: [
      { text: "Architecture + design", done: true },
      { text: "Déploiement Vercel", done: true },
      { text: "Backend Supabase", done: true },
      { text: "4 bloqueurs restants", done: false },
      { text: "Tests end-to-end", done: false },
    ],
  },
  {
    title: "Expertise positionnement",
    category: "compétence",
    horizon: "Permanent",
    progress: 30,
    milestones: [
      { text: "Méthode MAP formalisée", done: true },
      { text: "Études de cas", done: false },
      { text: "Contenu éducatif", done: false },
    ],
  },
  {
    title: "Indépendance financière",
    category: "personnel",
    horizon: "2-3 ans",
    progress: 5,
    milestones: [
      { text: "Plan financier établi", done: true },
      { text: "PEA + CW8", done: true },
      { text: "CTO Trade Republic", done: false },
      { text: "Coussin 1K€", done: false },
      { text: "Revenus récurrents", done: false },
      { text: "Départ France", done: false },
    ],
  },
  {
    title: "Physique athlétique",
    category: "personnel",
    horizon: "Permanent",
    progress: 33,
    milestones: [
      { text: "Sport 3x/semaine", done: false },
      { text: "Réveil 6h stable", done: false },
      { text: "Plan alimentation", done: false },
    ],
  },
];

export default function ObjectifsPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Objectifs</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>{objectives.length} objectifs actifs</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {objectives.map((obj) => {
            const done = obj.milestones.filter(m => m.done).length;
            return (
              <Card key={obj.title}>
                <CardBody>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 500, color: "var(--t1)" }}>{obj.title}</h3>
                      <span style={{ fontSize: 11, color: "var(--t4)", fontWeight: 300 }}>{obj.category} · {obj.horizon}</span>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 600, color: "var(--t1)" }}>
                      {obj.progress}<span style={{ fontSize: 12, fontWeight: 300, color: "var(--t3)" }}>%</span>
                    </div>
                  </div>

                  {/* Progress */}
                  <div style={{ height: 3, background: "rgba(255,255,255,.04)", borderRadius: 2, marginBottom: 14 }}>
                    <div style={{ height: "100%", width: `${obj.progress}%`, background: "var(--t1)", borderRadius: 2 }} />
                  </div>

                  {/* Milestones */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {obj.milestones.map((m) => (
                      <span key={m.text} style={{
                        fontSize: 11, fontWeight: 300, padding: "4px 10px", borderRadius: 6,
                        background: m.done ? "rgba(0,208,132,.08)" : "rgba(255,255,255,.03)",
                        color: m.done ? "var(--green)" : "var(--t3)",
                        border: `1px solid ${m.done ? "rgba(0,208,132,.15)" : "rgba(255,255,255,.04)"}`,
                      }}>{m.text}</span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

      </main>
    </div>
  );
}
