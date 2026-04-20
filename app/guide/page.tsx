import Sidebar from "../components/Sidebar";
import Link from "next/link";

const sections = [
  {
    title: "Vue d'ensemble",
    desc: "KPIs, vision, priorités, état de lancement, finance et habitudes en un coup d'œil.",
  },
  {
    title: "Tâches",
    desc: "Toutes les tâches classées par statut : bloqueur (rouge), à faire (orange), prêt (vert), en attente (bleu).",
  },
  {
    title: "CM & Partners",
    desc: "Méthode MAP, checklist lancement, grille tarifaire. Tout ce qui concerne le business.",
  },
  {
    title: "Acquisition",
    desc: "Tunnel de conversion YouTube→Fillout→appel, routine Twitter/X, reste à faire.",
  },
  {
    title: "Finance",
    desc: "Budget mensuel, comptes (PEA/LEP/CESP), plan d'investissement en 4 phases.",
  },
  {
    title: "Objectifs",
    desc: "6 objectifs avec milestones et progression : 1er client, YouTube, plateforme, expertise, finance, physique.",
  },
];

const howItWorks = [
  "Tu parles avec Dave sur Telegram",
  "Dave met à jour les données du cockpit",
  "Tu ouvres le cockpit — tout est à jour",
  "Les entretiens du dimanche ajustent le plan finance",
];

export default function GuidePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px", maxWidth: 900 }}>

        <div style={{ marginBottom: 40 }}>
          <Link href="/" style={{ fontSize: 11, color: "var(--t4)", textDecoration: "none", letterSpacing: ".06em", textTransform: "uppercase" }}>
            ← Retour
          </Link>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em", marginTop: 14 }}>Guide</h2>
          <p style={{ fontSize: 13, color: "var(--t3)", marginTop: 6, fontWeight: 300, lineHeight: 1.6 }}>
            Ce dashboard centralise tout. Dave le met à jour à chaque conversation.
          </p>
        </div>

        {/* Comment ça marche */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "rgba(255,255,255,.70)", marginBottom: 14 }}>
            Comment ça marche
          </div>
          <div style={{
            padding: 22, borderRadius: 14,
            background: "linear-gradient(165deg, var(--card-hi), var(--card), var(--card-end))",
            border: "1px solid var(--border)",
          }}>
            {howItWorks.map((step, i) => (
              <div key={step} style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300, lineHeight: 1.8 }}>
                <strong style={{ color: "var(--t1)", fontWeight: 500 }}>{i + 1}.</strong> {step}
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "rgba(255,255,255,.70)", marginBottom: 14 }}>
            Sections
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {sections.map((s) => (
              <div key={s.title} style={{
                padding: 18, borderRadius: 14,
                background: "linear-gradient(165deg, var(--card-hi), var(--card), var(--card-end))",
                border: "1px solid var(--border)",
              }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: "var(--t1)", marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: "var(--t3)", fontWeight: 300 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Couleurs de statut */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "rgba(255,255,255,.70)", marginBottom: 14 }}>
            Couleurs de statut
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {[
              { label: "Bloqueur", color: "var(--red)" },
              { label: "À faire", color: "var(--orange)" },
              { label: "Prêt", color: "var(--green)" },
              { label: "En attente", color: "var(--blue)" },
            ].map((c) => (
              <div key={c.label} style={{
                padding: 16, borderRadius: 10, textAlign: "center",
                background: "linear-gradient(165deg, var(--card-hi), var(--card), var(--card-end))",
                border: "1px solid var(--border)",
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.color, margin: "0 auto 8px" }} />
                <div style={{ fontSize: 12, color: "var(--t2)", fontWeight: 300 }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
