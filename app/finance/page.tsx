import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const budget = [
  { label: "Revenus (AAH)", value: "+801 €", type: "income" },
  { label: "Dépenses fixes", value: "-336 €", type: "expense" },
  { label: "Dépenses business", value: "-208 €", type: "expense" },
  { label: "Investissement (DCA)", value: "-50 €", type: "invest" },
  { label: "Remboursement CESP", value: "-150 €", type: "expense" },
];

const accounts = [
  { label: "PEA Boursorama", value: "1 050 €", sub: "CW8 — ETF Monde", status: "actif" },
  { label: "LEP", value: "509 €", sub: "Taux 5% net", status: "actif" },
  { label: "Livret A", value: "~0 €", sub: "Transit CESP uniquement", status: "transit" },
  { label: "Revolut", value: "—", sub: "Réserve imprévus business", status: "reserve" },
];

const phases = [
  {
    num: 1, title: "Fondation", active: true,
    actions: ["PEA → CW8 (fait)", "Ouvrir CTO Trade Republic", "DCA 50€/mois IWDA"],
    trigger: "Maintenant",
  },
  {
    num: 2, title: "Premier client",
    actions: ["Coussin sécurité 1 000€", "DCA → 200€/mois"],
    trigger: "Quand 1er client CM&P signé",
  },
  {
    num: 3, title: "Revenus réguliers",
    actions: ["Coussin → 3 000€", "DCA 300-500€/mois", "Optionnel : BTC"],
    trigger: "Revenus récurrents stables",
  },
  {
    num: 4, title: "Départ France",
    actions: ["PEA gelé (avantage fiscal)", "CTO continue", "Adapter fiscalité pays d'accueil"],
    trigger: "Départ vers la Barbade ou autre",
  },
];

const depensesPassif = [
  { label: "Téléphone", value: "20 €" },
  { label: "Internet", value: "35 €" },
  { label: "Assurance", value: "30 €" },
  { label: "Alimentation", value: "200 €" },
  { label: "Divers", value: "50.97 €" },
];

const depensesBusiness = [
  { label: "Vercel", value: "0 €" },
  { label: "Domaines", value: "~15 €" },
  { label: "Claude / IA", value: "~20 €" },
  { label: "Fillout", value: "0 €" },
  { label: "Outils divers", value: "~173 €" },
];

export default function FinancePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Finance</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>
            Plan financier · Phase 1 · Prochain entretien : dimanche 4 mai
          </p>
        </div>

        {/* Budget + Comptes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Budget mensuel" meta="avril 2026" />
            <CardBody>
              {budget.map((r) => (
                <div key={r.label} style={{
                  display: "flex", justifyContent: "space-between", padding: "11px 0",
                  borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <span style={{ fontSize: 13, color: "var(--t3)", fontWeight: 300 }}>{r.label}</span>
                  <span style={{
                    fontSize: 13, fontWeight: 500,
                    color: r.type === "income" ? "var(--green)" : r.type === "invest" ? "var(--accent)" : "var(--t2)",
                  }}>{r.value}</span>
                </div>
              ))}
              <div style={{
                display: "flex", justifyContent: "space-between", padding: "14px 0 0",
                marginTop: 4, borderTop: "1px solid rgba(255,255,255,.06)",
              }}>
                <span style={{ fontSize: 13, color: "var(--t1)", fontWeight: 500 }}>Reste à vivre</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--t1)" }}>57 €</span>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Comptes" meta="4 comptes" />
            <CardBody>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {accounts.map((a) => (
                  <div key={a.label} style={{
                    padding: 16, background: "rgba(255,255,255,.02)",
                    borderRadius: 10, border: "1px solid rgba(255,255,255,.03)",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: "var(--t2)" }}>{a.label}</div>
                      <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 3, fontWeight: 300 }}>{a.sub}</div>
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: a.status === "transit" ? "var(--t4)" : "var(--t1)", letterSpacing: "-.02em" }}>
                      {a.value}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 14, padding: "12px 16px", borderRadius: 10,
                background: "rgba(167,139,250,.05)", border: "1px solid rgba(167,139,250,.10)",
              }}>
                <div style={{ fontSize: 11, color: "var(--t4)", fontWeight: 500, letterSpacing: ".04em", textTransform: "uppercase" as const }}>
                  Dette CESP
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 6 }}>
                  <span style={{ fontSize: 22, fontWeight: 600, color: "var(--t2)" }}>~50 000 €</span>
                  <span style={{ fontSize: 12, color: "var(--t4)", fontWeight: 300 }}>0% · 150€/mois</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Détail dépenses */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Dépenses passif" meta="335.97 €" />
            <CardBody>
              {depensesPassif.map((d) => (
                <div key={d.label} style={{
                  display: "flex", justifyContent: "space-between", padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <span style={{ fontSize: 13, color: "var(--t3)", fontWeight: 300 }}>{d.label}</span>
                  <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 400 }}>{d.value}</span>
                </div>
              ))}
            </CardBody>
          </Card>
          <Card>
            <CardHead title="Dépenses business" meta="208.37 €" />
            <CardBody>
              {depensesBusiness.map((d) => (
                <div key={d.label} style={{
                  display: "flex", justifyContent: "space-between", padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <span style={{ fontSize: 13, color: "var(--t3)", fontWeight: 300 }}>{d.label}</span>
                  <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 400 }}>{d.value}</span>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Phases d'investissement */}
        <Card>
          <CardHead title="Plan d'investissement" meta="4 phases" />
          <CardBody>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {phases.map((p) => (
                <div key={p.num} style={{
                  padding: 20, borderRadius: 12,
                  background: p.active ? "rgba(167,139,250,.06)" : "rgba(255,255,255,.02)",
                  border: `1px solid ${p.active ? "rgba(167,139,250,.15)" : "rgba(255,255,255,.04)"}`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 6,
                      background: p.active ? "var(--accent)" : "rgba(255,255,255,.06)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 600, color: p.active ? "#000" : "var(--t3)",
                    }}>{p.num}</div>
                    <span style={{ fontSize: 13, fontWeight: 500, color: p.active ? "var(--t1)" : "var(--t2)" }}>{p.title}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--t3)", lineHeight: 1.7, fontWeight: 300 }}>
                    {p.actions.map((a) => <div key={a}>• {a}</div>)}
                  </div>
                  <div style={{ fontSize: 10, color: "var(--t4)", marginTop: 10, fontWeight: 400, fontStyle: "italic" }}>
                    {p.trigger}
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

      </main>
    </div>
  );
}
