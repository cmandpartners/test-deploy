import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

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

        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 12 }}>
          <Card>
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 11, color: "var(--t3)" }}>Clients</div>
              <div style={{ fontSize: 36, fontWeight: 600, lineHeight: 1, marginTop: 12 }}>0</div>
              <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 8, fontWeight: 300 }}>Objectif : 1 avant juin</div>
            </div>
          </Card>
          <Card>
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 11, color: "var(--t3)" }}>Lancement</div>
              <div style={{ fontSize: 36, fontWeight: 600, lineHeight: 1, marginTop: 12 }}>
                {ready}<span style={{ fontSize: 18, fontWeight: 300, color: "var(--t3)" }}>/{checklist.length}</span>
              </div>
              <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 8, fontWeight: 300 }}>{checklist.length - ready} manquants</div>
            </div>
          </Card>
          <Card>
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 11, color: "var(--t3)" }}>Prix</div>
              <div style={{ fontSize: 36, fontWeight: 600, lineHeight: 1, marginTop: 12 }}>3K<span style={{ fontSize: 18, fontWeight: 300, color: "var(--t3)" }}>€</span></div>
              <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 8, fontWeight: 300 }}>4-5 semaines</div>
            </div>
          </Card>
        </div>

        {/* MAP + Checklist */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Méthode MAP" />
            <CardBody>
              {[
                { l: "M", n: "Marché", d: "Comprendre les vrais acheteurs" },
                { l: "A", n: "Avantage", d: "Le contexte où le client gagne" },
                { l: "P", n: "Positionnement", d: "Direction claire et activable" },
              ].map((s, i) => (
                <div key={s.l} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "14px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,.03)" : "none",
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 6,
                    background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, fontWeight: 700, color: "var(--t1)", flexShrink: 0,
                  }}>{s.l}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "var(--t1)" }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: "var(--t3)", fontWeight: 300 }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Checklist" meta={`${ready}/${checklist.length}`} />
            <CardBody>
              {checklist.map((c, i) => (
                <div key={c.item} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "9px 0", borderBottom: i < checklist.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: c.done ? "var(--green)" : "var(--red)",
                  }} />
                  <span style={{ fontSize: 13, color: c.done ? "var(--t3)" : "var(--t2)", fontWeight: 300 }}>{c.item}</span>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Pricing */}
        <Card>
          <CardHead title="Grille tarifaire" meta="évolutive" />
          <CardBody>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {pricing.map((p) => (
                <div key={p.range} style={{
                  padding: 18, borderRadius: 10, textAlign: "center",
                  background: p.active ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.02)",
                  border: `1px solid ${p.active ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.04)"}`,
                }}>
                  <div style={{ fontSize: 11, color: "var(--t3)", fontWeight: 300, marginBottom: 8 }}>{p.range}</div>
                  <div style={{ fontSize: 22, fontWeight: 600, color: p.active ? "var(--t1)" : "var(--t3)" }}>{p.price}</div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

      </main>
    </div>
  );
}
