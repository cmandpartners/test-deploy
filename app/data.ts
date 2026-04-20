export const kpis = [
  { label: "Clients", value: "0", unit: "", sub: "Objectif : 1 avant juin", progress: 0 },
  { label: "Plateforme", value: "60", unit: "%", sub: "4 bloqueurs", progress: 60 },
  { label: "Portefeuille", value: "1 559", unit: " €", sub: "PEA + LEP", progress: 5 },
  { label: "Sport", value: "1", unit: " /3", sub: "Sessions cette semaine", progress: 33 },
];

export const tasks = [
  { text: "Configurer Stripe", status: "bloqueur", dot: "urgent" },
  { text: "Rédiger contrat / CGV", status: "bloqueur", dot: "urgent" },
  { text: "Formulaire onboarding Fillout", status: "à faire", dot: "default" },
  { text: "Tourner vidéos de bienvenue", status: "à faire", dot: "default" },
  { text: "Publier vidéos YouTube", status: "prêt", dot: "ready" },
  { text: "Lancer outreach Twitter/X", status: "en attente", dot: "wait" },
  { text: "Stratégie Instagram", status: "en attente", dot: "wait" },
];

export const readyItems = [
  "Plateforme déployée",
  "3 vidéos YouTube",
  "Formulaire candidature",
  "Protocole MAP rédigé",
];

export const missingItems = [
  "Stripe",
  "Contrat / CGV",
  "Onboarding Fillout",
  "Vidéos bienvenue",
  "Calendly",
  "Stratégie contenu",
];

export const financeRows = [
  { label: "Revenus", value: "+801 €", highlight: false },
  { label: "Dépenses fixes", value: "-336 €", highlight: false },
  { label: "Dépenses business", value: "-208 €", highlight: false },
  { label: "Investissement", value: "-50 €", highlight: false },
  { label: "Remb. CESP", value: "-150 €", highlight: false },
];

export const accounts = [
  { label: "PEA", value: "1 050 €", sub: "CW8" },
  { label: "LEP", value: "509 €", sub: "5% net" },
  { label: "CESP", value: "~50K", sub: "0% · 150/mois", dim: true },
];

export const habits = [
  { name: "Sport", days: [true, false, false, false, false, false, false] },
  { name: "Réveil 6h", days: [true, true, false, false, false, false, false] },
  { name: "Contenu", days: [false, false, false, false, false, false, false] },
  { name: "Outreach", days: [false, false, false, false, false, false, false] },
];

export const events = [
  { title: "Entretien finance", sub: "Dim. 19 avril · fait", dot: "done" },
  { title: "Tâches finance", sub: "Lun. 20 avril · 16h", dot: "next" },
  { title: "Entretien finance", sub: "Dim. 4 mai", dot: "future" },
];
