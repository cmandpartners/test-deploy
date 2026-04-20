import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const objectives = [
  {
    title: "Signer le premier client",
    category: "business",
    priority: "critique",
    horizon: "Avant juin 2026",
    progress: 0,
    desc: "Tout converge vers cet objectif. La plateforme, l'acquisition, le contenu — tout est un levier pour décrocher le premier client qualifié.",
    milestones: [
      { text: "Plateforme MAP Signature déployée", done: true },
      { text: "3 vidéos YouTube tournées", done: true },
      { text: "Protocole MAP rédigé", done: true },
      { text: "Formulaire candidature actif", done: true },
      { text: "Stripe + paiement configuré", done: false },
      { text: "Contrat / CGV prêts", done: false },
      { text: "Vidéos publiées + tunnel actif", done: false },
      { text: "Outreach Twitter lancé", done: false },
      { text: "1er appel stratégique", done: false },
      { text: "Signature", done: false },
    ],
  },
  {
    title: "YouTube — contenu de conviction",
    category: "acquisition",
    priority: "haute",
    horizon: "Avril-Mai 2026",
    progress: 60,
    desc: "3 vidéos tournées et montées. Tunnel configuré : Vidéo 3 → 2 → 1 (VSL) → Fillout. Reste à publier et configurer les cards/liens.",
    milestones: [
      { text: "Vidéo 1 (VSL) tournée + montée", done: true },
      { text: "Vidéo 2 tournée + montée", done: true },
      { text: "Vidéo 3 tournée + montée", done: true },
      { text: "Publication des 3 vidéos", done: false },
      { text: "Cards + liens description configurés", done: false },
    ],
  },
  {
    title: "Plateforme MAP Signature",
    category: "produit",
    priority: "haute",
    horizon: "En cours",
    progress: 60,
    desc: "Plateforme client déployée sur Vercel via GitHub. Supabase en backend. 4 bloqueurs restants avant d'être 100% opérationnelle.",
    milestones: [
      { text: "Architecture + design validés", done: true },
      { text: "Déploiement Vercel", done: true },
      { text: "Backend Supabase", done: true },
      { text: "Résolution des 4 bloqueurs", done: false },
      { text: "Tests end-to-end", done: false },
    ],
  },
  {
    title: "Expertise positionnement",
    category: "compétence",
    priority: "continue",
    horizon: "Permanent",
    progress: 30,
    desc: "Montée en compétence quotidienne sur le positionnement SaaS B2B. Méthode basée sur les travaux d'April Dunford. Objectif : devenir LA référence sur la niche.",
    milestones: [
      { text: "Méthode MAP formalisée", done: true },
      { text: "Études de cas documentées", done: false },
      { text: "Contenu éducatif créé", done: false },
      { text: "Reconnu comme expert", done: false },
    ],
  },
  {
    title: "Indépendance financière",
    category: "personnel",
    priority: "long terme",
    horizon: "2-3 ans",
    progress: 5,
    desc: "Sécuriser sa famille financièrement. Plan en 4 phases : fondation → 1er client → revenus réguliers → départ France. Destination envisagée : la Barbade.",
    milestones: [
      { text: "Plan financier établi", done: true },
      { text: "PEA ouvert + CW8", done: true },
      { text: "CTO Trade Republic ouvert", done: false },
      { text: "Coussin sécurité 1 000€", done: false },
      { text: "Revenus CM&P récurrents", done: false },
      { text: "Coussin 3 000€", done: false },
      { text: "Départ France", done: false },
    ],
  },
  {
    title: "Physique athlétique",
    category: "personnel",
    priority: "continue",
    horizon: "Permanent",
    progress: 33,
    desc: "Sport 3x/semaine minimum : renforcement musculaire + cardio. Réveil 6h pour routine matinale. Alimentation à travailler.",
    milestones: [
      { text: "Routine sport 3x/semaine", done: false },
      { text: "Réveil 6h stable", done: false },
      { text: "Plan alimentation Martinique", done: false },
    ],
  },
];

const categoryColors: Record<string, string> = {
  business: "rgba(248,113,113,.15)",
  acquisition: "rgba(96,165,250,.15)",
  produit: "rgba(167,139,250,.15)",
  compétence: "rgba(52,211,153,.15)",
  personnel: "rgba(255,255,255,.06)",
};

const categoryTextColors: Record<string, string> = {
  business: "rgba(248,113,113,.7)",
  acquisition: "rgba(96,165,250,.7)",
  produit: "var(--accent)",
  compétence: "var(--green)",
  personnel: "var(--t3)",
};

export default function ObjectifsPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Objectifs</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>
            Vision long terme · {objectives.length} objectifs actifs
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {objectives.map((obj) => {
            const done = obj.milestones.filter(m => m.done).length;
            const total = obj.milestones.length;
            return (
              <Card key={obj.title}>
                <CardBody>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <span style={{
                          fontSize: 9, fontWeight: 500, letterSpacing: ".06em", textTransform: "uppercase" as const,
                          padding: "3px 8px", borderRadius: 4,
                          background: categoryColors[obj.category], color: categoryTextColors[obj.category],
                        }}>{obj.category}</span>
                        <span style={{ fontSize: 9, color: "var(--t4)", letterSpacing: ".04em", textTransform: "uppercase" as const }}>
                          {obj.priority}
                        </span>
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 500, color: "var(--t1)" }}>{obj.title}</h3>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 24, fontWeight: 600, color: "var(--t1)", letterSpacing: "-.02em" }}>
                        {obj.progress}<span style={{ fontSize: 14, fontWeight: 300, color: "var(--t3)" }}>%</span>
                      </div>
                      <div style={{ fontSize: 10, color: "var(--t4)", fontWeight: 300 }}>{obj.horizon}</div>
                    </div>
                  </div>

                  <p style={{ fontSize: 13, color: "var(--t3)", fontWeight: 300, lineHeight: 1.6, marginBottom: 16 }}>
                    {obj.desc}
                  </p>

                  {/* Progress bar */}
                  <div style={{ height: 3, background: "rgba(255,255,255,.04)", borderRadius: 2, marginBottom: 16 }}>
                    <div style={{ height: "100%", width: `${obj.progress}%`, background: "var(--t2)", borderRadius: 2, transition: "width .3s" }} />
                  </div>

                  {/* Milestones */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                    {obj.milestones.map((m) => (
                      <div key={m.text} style={{
                        display: "flex", alignItems: "center", gap: 8, padding: "6px 0",
                      }}>
                        <div style={{
                          width: 14, height: 14, borderRadius: 3, flexShrink: 0,
                          background: m.done ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.02)",
                          border: `1px solid ${m.done ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.04)"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 8, color: "var(--t2)",
                        }}>{m.done && "✓"}</div>
                        <span style={{
                          fontSize: 12, fontWeight: 300,
                          color: m.done ? "var(--t4)" : "var(--t2)",
                          textDecoration: m.done ? "line-through" : "none",
                        }}>{m.text}</span>
                      </div>
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
