import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const tunnel = [
  { step: 1, title: "Vidéo 3 (publique)", desc: "Titre TBD — accroche large", status: "tournée", arrow: true },
  { step: 2, title: "Vidéo 2 (publique)", desc: "\"Comment Ne Pas devenir Un Simple Outil De Plus Sur Le Marché\"", status: "tournée", arrow: true },
  { step: 3, title: "Vidéo 1 (non répertoriée)", desc: "\"Pourquoi Votre SaaS N'explose Pas Malgré Un Produit Solide\" — VSL", status: "tournée", arrow: true },
  { step: 4, title: "Formulaire Fillout", desc: "Candidature — questions de qualification", status: "actif", arrow: true },
  { step: 5, title: "Appel stratégique", desc: "Closing — présentation de l'accompagnement MAP", status: "à préparer", arrow: false },
];

const twitterDaily = [
  { task: "1-2 tweets sur positionnement SaaS", time: "~10 min" },
  { task: "2-3 réponses à des fondateurs SaaS", time: "~10 min" },
  { task: "2-3 DM personnalisés à des prospects ciblés", time: "~15 min" },
];

const todo = [
  { item: "Formulaire Fillout : structure des questions", done: false },
  { item: "Script d'appel de closing", done: false },
  { item: "Templates messages outreach Twitter", done: false },
  { item: "Publier les 3 vidéos YouTube", done: false },
  { item: "Configurer cards + liens description YouTube", done: false },
  { item: "Lancer routine Twitter/X quotidienne", done: false },
];

export default function AcquisitionPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Acquisition</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>
            Stratégie validée le 17 avril 2026 · YouTube + Twitter/X + Outreach DM
          </p>
        </div>

        {/* Stratégie résumée */}
        <div style={{
          background: "linear-gradient(135deg, var(--card-hi) 0%, var(--card) 60%, var(--card-end) 100%)",
          border: "1px solid var(--border)", borderRadius: 14, padding: 30, marginBottom: 12,
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -60, right: -60, width: 180, height: 180,
            background: "radial-gradient(circle, rgba(167,139,250,.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: ".12em", textTransform: "uppercase" as const, color: "var(--t4)", marginBottom: 16 }}>
            Principe
          </div>
          <div style={{ fontSize: 16, fontWeight: 300, color: "var(--t3)", lineHeight: 1.65, maxWidth: 700 }}>
            Zéro audience, zéro client, zéro preuve sociale. <strong style={{ fontWeight: 600, color: "var(--t1)" }}>YouTube</strong> pour le contenu de conviction,{" "}
            <strong style={{ fontWeight: 600, color: "var(--t1)" }}>Twitter/X</strong> pour la distribution et l&apos;outreach direct.
            L&apos;outreach DM est le seul levier réaliste pour le 1er client.
          </div>
        </div>

        {/* Tunnel de conversion */}
        <Card>
          <CardHead title="Tunnel de conversion" meta="5 étapes" />
          <CardBody>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {tunnel.map((t) => (
                <div key={t.step}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: "16px 4px",
                  }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                      background: t.status === "actif" ? "rgba(167,139,250,.12)" : t.status === "à préparer" ? "rgba(255,255,255,.03)" : "rgba(255,255,255,.06)",
                      border: `1px solid ${t.status === "actif" ? "rgba(167,139,250,.20)" : "rgba(255,255,255,.06)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 600, color: t.status === "actif" ? "var(--accent)" : "var(--t3)",
                    }}>{t.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 500, color: "var(--t1)" }}>{t.title}</div>
                      <div style={{ fontSize: 12, color: "var(--t3)", marginTop: 3, fontWeight: 300 }}>{t.desc}</div>
                    </div>
                    <span style={{
                      fontSize: 9, fontWeight: 500, letterSpacing: ".04em", textTransform: "uppercase" as const,
                      color: t.status === "actif" ? "var(--accent)" : t.status === "tournée" ? "var(--green)" : "var(--t4)",
                    }}>{t.status}</span>
                  </div>
                  {t.arrow && (
                    <div style={{ paddingLeft: 17, color: "var(--t4)", fontSize: 12 }}>↓</div>
                  )}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <div style={{ height: 12 }} />

        {/* Twitter + TODO */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Card>
            <CardHead title="Routine Twitter/X" meta="~35 min/jour" />
            <CardBody>
              {twitterDaily.map((t) => (
                <div key={t.task} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{t.task}</span>
                  <span style={{ fontSize: 11, color: "var(--t4)", fontWeight: 400 }}>{t.time}</span>
                </div>
              ))}
              <div style={{ marginTop: 16, padding: 16, borderRadius: 10, background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.03)" }}>
                <div style={{ fontSize: 11, fontWeight: 500, color: "var(--t3)", letterSpacing: ".04em", textTransform: "uppercase" as const, marginBottom: 8 }}>Cible</div>
                <div style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300, lineHeight: 1.6 }}>
                  Fondateurs de SaaS B2B en phase de croissance.<br/>
                  Pas de e-commerce, marketplace ou non-tech.
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Reste à faire" meta={`0/${todo.length}`} />
            <CardBody>
              {todo.map((t) => (
                <div key={t.item} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: 4,
                    background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.04)",
                  }} />
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
