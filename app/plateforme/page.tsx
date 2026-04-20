import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const stack = [
  { name: "Next.js", version: "16.2.4", role: "Framework frontend + API" },
  { name: "Tailwind CSS", version: "4", role: "Styles" },
  { name: "TypeScript", version: "", role: "Typage" },
  { name: "Supabase", version: "", role: "Base de données + auth" },
  { name: "Vercel", version: "", role: "Hosting + CI/CD" },
  { name: "GitHub", version: "", role: "Repo cmandpartners" },
];

const blockers = [
  { text: "Stripe — configuration paiement", impact: "Impossible d'encaisser sans ça" },
  { text: "Contrat / CGV — documents légaux", impact: "Pas de signature client possible" },
  { text: "Onboarding Fillout — formulaire client", impact: "Pas de parcours d'entrée structuré" },
  { text: "Vidéos de bienvenue — contenu plateforme", impact: "Expérience client incomplète" },
];

const completed = [
  "Architecture + design system validés",
  "Déploiement Vercel opérationnel",
  "Backend Supabase configuré",
  "Repo GitHub (cmandpartners/test-deploy)",
  "Protocole MAP intégré",
  "Formulaire candidature Fillout actif",
];

export default function PlateformePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Plateforme MAP Signature</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>
            Plateforme d&apos;accompagnement client · 60% complète
          </p>
        </div>

        {/* Progress */}
        <div style={{
          background: "linear-gradient(135deg, var(--card-hi) 0%, var(--card) 60%, var(--card-end) 100%)",
          border: "1px solid var(--border)", borderRadius: 14, padding: 30, marginBottom: 12,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
            <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-.04em", lineHeight: 1 }}>
              60<span style={{ fontSize: 24, fontWeight: 300, color: "var(--t3)" }}>%</span>
            </div>
            <span style={{ fontSize: 11, color: "var(--t4)", fontWeight: 300 }}>4 bloqueurs restants</span>
          </div>
          <div style={{ height: 4, background: "rgba(255,255,255,.04)", borderRadius: 2 }}>
            <div style={{ height: "100%", width: "60%", background: "var(--accent)", borderRadius: 2 }} />
          </div>
        </div>

        {/* Bloqueurs + Complété */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Bloqueurs" meta="4" />
            <CardBody>
              {blockers.map((b) => (
                <div key={b.text} style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <div style={{
                    width: 7, height: 7, borderRadius: "50%", flexShrink: 0, marginTop: 5,
                    background: "rgba(248,113,113,.6)",
                  }} />
                  <div>
                    <div style={{ fontSize: 13, color: "var(--t1)", fontWeight: 400 }}>{b.text}</div>
                    <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 3, fontWeight: 300 }}>{b.impact}</div>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Complété" meta={String(completed.length)} />
            <CardBody>
              {completed.map((c) => (
                <div key={c} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: 4,
                    background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 9, color: "var(--t2)",
                  }}>✓</div>
                  <span style={{ fontSize: 13, color: "var(--t3)", fontWeight: 300, textDecoration: "line-through" }}>{c}</span>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Stack technique */}
        <Card>
          <CardHead title="Stack technique" meta={`${stack.length} outils`} />
          <CardBody>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {stack.map((s) => (
                <div key={s.name} style={{
                  padding: 16, borderRadius: 10,
                  background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.04)",
                }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--t1)" }}>
                    {s.name}
                    {s.version && <span style={{ fontSize: 11, fontWeight: 300, color: "var(--t4)", marginLeft: 6 }}>v{s.version}</span>}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--t3)", marginTop: 4, fontWeight: 300 }}>{s.role}</div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

      </main>
    </div>
  );
}
