import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const mapSteps = [
  { letter: "M", name: "Marché", desc: "Comprendre les vrais acheteurs — pas les personas, les vrais gens qui signent." },
  { letter: "A", name: "Avantage", desc: "Analyser le contexte dans lequel le client a l'avantage sur ses concurrents." },
  { letter: "P", name: "Positionnement", desc: "Formuler une direction claire et immédiatement activable." },
];

const values = [
  "La réalité des clients > l'intuition du fondateur",
  "La spécificité est le seul antidote à l'invisibilité",
  "La méthode vaut plus que les heures",
  "La réputation se construit client par client",
];

const pricing = [
  { clients: "1-2", price: "3 000 €", status: "actuel" },
  { clients: "3-4", price: "4 000 €", status: "prochain" },
  { clients: "5+", price: "5 000 €", status: "futur" },
];

const deliveryChecklist = [
  { item: "Protocole MAP rédigé", done: true },
  { item: "Plateforme client déployée", done: true },
  { item: "3 vidéos YouTube tournées/montées", done: true },
  { item: "Formulaire candidature (Fillout)", done: true },
  { item: "Stripe configuré", done: false },
  { item: "Contrat / CGV rédigés", done: false },
  { item: "Formulaire onboarding Fillout", done: false },
  { item: "Vidéos de bienvenue", done: false },
  { item: "Calendly configuré", done: false },
  { item: "Stratégie contenu définie", done: false },
];

export default function BusinessPage() {
  const ready = deliveryChecklist.filter(c => c.done).length;
  const total = deliveryChecklist.length;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>CM & Partners</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>
            Cabinet de conseil en positionnement stratégique pour SaaS B2B
          </p>
        </div>

        {/* KPIs business */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 12 }}>
          <Card>
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 11, color: "var(--t3)", letterSpacing: ".02em" }}>Clients signés</div>
              <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: "-.04em", lineHeight: 1, marginTop: 14 }}>0</div>
              <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 10, fontWeight: 300 }}>Objectif : 1 avant juin 2026</div>
            </div>
          </Card>
          <Card>
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 11, color: "var(--t3)", letterSpacing: ".02em" }}>Prêt au lancement</div>
              <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: "-.04em", lineHeight: 1, marginTop: 14 }}>
                {ready}<span style={{ fontSize: 20, fontWeight: 300, color: "var(--t3)" }}>/{total}</span>
              </div>
              <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 10, fontWeight: 300 }}>{total - ready} éléments manquants</div>
            </div>
          </Card>
          <Card>
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 11, color: "var(--t3)", letterSpacing: ".02em" }}>Prix actuel</div>
              <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: "-.04em", lineHeight: 1, marginTop: 14 }}>
                3K<span style={{ fontSize: 20, fontWeight: 300, color: "var(--t3)" }}>€</span>
              </div>
              <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 10, fontWeight: 300 }}>Accompagnement MAP complet · 4-5 sem</div>
            </div>
          </Card>
        </div>

        {/* Méthode MAP */}
        <Card>
          <CardHead title="Méthode MAP" meta="3 piliers" />
          <CardBody>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {mapSteps.map((s) => (
                <div key={s.letter} style={{
                  padding: 20, borderRadius: 12,
                  background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.04)",
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: "rgba(167,139,250,.10)", border: "1px solid rgba(167,139,250,.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, fontWeight: 700, color: "var(--accent)", marginBottom: 14,
                  }}>{s.letter}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--t1)", marginBottom: 6 }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: "var(--t3)", lineHeight: 1.6, fontWeight: 300 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <div style={{ height: 12 }} />

        {/* Pricing + Readiness */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Grille tarifaire" meta="évolutive" />
            <CardBody>
              {pricing.map((p) => (
                <div key={p.clients} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <div>
                    <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 400 }}>Clients {p.clients}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: p.status === "actuel" ? "var(--t1)" : "var(--t3)" }}>{p.price}</span>
                    {p.status === "actuel" && (
                      <span style={{
                        fontSize: 9, fontWeight: 500, letterSpacing: ".06em", textTransform: "uppercase" as const,
                        padding: "3px 8px", borderRadius: 4,
                        background: "rgba(167,139,250,.10)", color: "var(--accent)",
                      }}>actuel</span>
                    )}
                  </div>
                </div>
              ))}
              <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 14, fontWeight: 300, fontStyle: "italic" }}>
                Pas de négociation. Le plancher est le prix.
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Checklist lancement" meta={`${ready}/${total}`} />
            <CardBody>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {deliveryChecklist.map((c) => (
                  <div key={c.item} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,.03)",
                  }}>
                    <div style={{
                      width: 16, height: 16, borderRadius: 4,
                      background: c.done ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.03)",
                      border: `1px solid ${c.done ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.04)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 9, color: "var(--t2)",
                    }}>
                      {c.done && "✓"}
                    </div>
                    <span style={{
                      fontSize: 13, fontWeight: 300,
                      color: c.done ? "var(--t3)" : "var(--t2)",
                      textDecoration: c.done ? "line-through" : "none",
                    }}>{c.item}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Valeurs */}
        <Card>
          <CardHead title="Valeurs" meta="CM & Partners" />
          <CardBody>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {values.map((v) => (
                <div key={v} style={{
                  padding: 16, borderRadius: 10,
                  background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.03)",
                  fontSize: 13, color: "var(--t2)", fontWeight: 300, lineHeight: 1.5,
                }}>{v}</div>
              ))}
            </div>
          </CardBody>
        </Card>

      </main>
    </div>
  );
}
