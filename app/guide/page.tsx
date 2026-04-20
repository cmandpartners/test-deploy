import Sidebar from "../components/Sidebar";
import Link from "next/link";

const sections = [
  {
    title: "Vue d'ensemble",
    icon: "◆",
    desc: "Ta page d'accueil. Tu y retrouves les 4 indicateurs clés (clients, plateforme, portefeuille, sport), ta vision long terme, les tâches prioritaires et l'état de lancement de CM & Partners.",
    details: [
      { label: "KPIs", text: "4 cartes en haut — chiffres mis à jour automatiquement par Dave à chaque conversation." },
      { label: "Vision", text: "Ta direction stratégique. Elle évolue avec toi — pas figée." },
      { label: "Priorités", text: "Les tâches les plus urgentes. Les dots indiquent le niveau : rouge = bloqueur, bleu = prêt à lancer, gris = en attente." },
      { label: "Lancement", text: "Ce qui est prêt vs ce qui manque pour accueillir ton premier client." },
    ],
  },
  {
    title: "Finance",
    icon: "◆",
    desc: "Ton budget mensuel, tes comptes (PEA, LEP, CESP) et ta phase d'investissement actuelle. Tout est lié au plan financier établi le 19 avril.",
    details: [
      { label: "Budget", text: "Revenus - dépenses fixes - dépenses business - invest - CESP = reste. Simple." },
      { label: "Comptes", text: "PEA (Boursorama), LEP, dette CESP. Mis à jour à chaque entretien du dimanche." },
      { label: "Phase", text: "Tu es en Phase 1. Le passage à la phase suivante se fait quand le 1er client signe." },
    ],
  },
  {
    title: "Habitudes",
    icon: "★",
    desc: "Suivi hebdomadaire de tes 4 habitudes clés. La case du jour est légèrement surlignée pour te repérer.",
    details: [
      { label: "Sport", text: "Objectif 3 sessions/semaine. Coche toi-même ou dis-le à Dave." },
      { label: "Réveil 6h", text: "Ton objectif de routine matinale." },
      { label: "Contenu", text: "As-tu créé du contenu aujourd'hui ? (vidéo, post, thread)" },
      { label: "Outreach", text: "DMs envoyés, tweets, réponses aux fondateurs SaaS." },
    ],
  },
  {
    title: "À venir",
    icon: "○",
    desc: "Tes prochains rendez-vous et deadlines. Le dot violet avec glow = le prochain événement.",
    details: [
      { label: "Entretiens finance", text: "Bimensuels, le dimanche. Planning complet dans le Google Sheet." },
      { label: "Tâches planifiées", text: "Actions spécifiques avec date et heure — Dave te rappelle automatiquement." },
    ],
  },
];

const principles = [
  { title: "Monochrome first", text: "L'interface est volontairement en noir, blanc et gris. Les couleurs apparaissent uniquement quand elles portent du sens (un bloqueur, un événement imminent)." },
  { title: "Hierarchy par opacité", text: "Le texte le plus important est blanc pur (100%). L'information secondaire est à 50%. Le contexte est à 25%. Le bruit de fond à 12%. Rien de coloré, juste du contraste." },
  { title: "Cards en dégradé", text: "Chaque carte a un dégradé subtil du coin supérieur gauche (plus clair) vers le bas droite (plus sombre). Ça crée de la profondeur sans glass effect." },
  { title: "Un seul accent", text: "Le violet (#a78bfa) est le seul accent. Il marque l'élément actif de la sidebar et le prochain événement. Tout le reste est neutre." },
  { title: "Dots de statut", text: "Les petits cercles de 6px à côté des tâches utilisent 3 niveaux : rouge pâle (urgent), bleu pâle (prêt), gris (en attente). Subtils mais lisibles." },
  { title: "Respiration", text: "48px de padding principal, 12px de gap entre les cartes. Chaque section respire. Pas de surcharge visuelle." },
];

export default function GuidePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px", maxWidth: 900 }}>

        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ fontSize: 11, color: "var(--t4)", textDecoration: "none", letterSpacing: ".06em", textTransform: "uppercase" }}>
            ← Retour au cockpit
          </Link>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em", marginTop: 16 }}>
            Guide du Cockpit
          </h2>
          <p style={{ fontSize: 13, color: "var(--t3)", marginTop: 8, fontWeight: 300, lineHeight: 1.6 }}>
            Ce dashboard centralise tout : business, finance, habitudes, objectifs.
            Dave le met à jour à chaque conversation. Tu n&apos;as rien à saisir.
          </p>
        </div>

        {/* Fonctionnement */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: ".12em", textTransform: "uppercase" as const, color: "var(--t4)", marginBottom: 20 }}>
            Comment ça marche
          </div>
          <div style={{
            padding: 24, borderRadius: 14,
            background: "linear-gradient(165deg, var(--card-hi), var(--card), var(--card-end))",
            border: "1px solid var(--border)",
          }}>
            <div style={{ fontSize: 14, color: "var(--t2)", lineHeight: 1.8, fontWeight: 300 }}>
              <strong style={{ color: "var(--t1)", fontWeight: 500 }}>1.</strong> Tu parles avec Dave sur Telegram — business, finance, habitudes, n&apos;importe quoi.<br/>
              <strong style={{ color: "var(--t1)", fontWeight: 500 }}>2.</strong> Dave met à jour les données du cockpit en temps réel.<br/>
              <strong style={{ color: "var(--t1)", fontWeight: 500 }}>3.</strong> Tu ouvres le cockpit — tout est à jour, sans rien saisir manuellement.<br/>
              <strong style={{ color: "var(--t1)", fontWeight: 500 }}>4.</strong> Les entretiens finance du dimanche ajustent le plan d&apos;investissement.
            </div>
          </div>
        </div>

        {/* Sections */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: ".12em", textTransform: "uppercase" as const, color: "var(--t4)", marginBottom: 20 }}>
            Sections
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {sections.map((s) => (
              <div key={s.title} style={{
                padding: 24, borderRadius: 14,
                background: "linear-gradient(165deg, var(--card-hi), var(--card), var(--card-end))",
                border: "1px solid var(--border)",
              }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: "var(--t1)", marginBottom: 8 }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 13, color: "var(--t3)", lineHeight: 1.6, fontWeight: 300, marginBottom: 16 }}>
                  {s.desc}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.details.map((d) => (
                    <div key={d.label} style={{ display: "flex", gap: 12 }}>
                      <span style={{ fontSize: 12, fontWeight: 500, color: "var(--t2)", minWidth: 100, flexShrink: 0 }}>{d.label}</span>
                      <span style={{ fontSize: 12, color: "var(--t3)", fontWeight: 300, lineHeight: 1.5 }}>{d.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design principles */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: ".12em", textTransform: "uppercase" as const, color: "var(--t4)", marginBottom: 20 }}>
            Principes de design
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {principles.map((p) => (
              <div key={p.title} style={{
                padding: 20, borderRadius: 14,
                background: "linear-gradient(165deg, var(--card-hi), var(--card), var(--card-end))",
                border: "1px solid var(--border)",
              }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--t1)", marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: 12, color: "var(--t3)", lineHeight: 1.6, fontWeight: 300 }}>{p.text}</div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
