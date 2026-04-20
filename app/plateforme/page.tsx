import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const blockers = [
  "Stripe — paiement",
  "Contrat / CGV",
  "Onboarding Fillout",
  "Vidéos de bienvenue",
];

const completed = [
  "Architecture + design",
  "Déploiement Vercel",
  "Backend Supabase",
  "Repo GitHub",
  "Protocole MAP",
  "Formulaire candidature",
];

const stack = [
  { name: "Next.js 16", role: "Frontend + API" },
  { name: "TypeScript", role: "Typage" },
  { name: "Tailwind 4", role: "Styles" },
  { name: "Supabase", role: "Base de données" },
  { name: "Vercel", role: "Hosting" },
  { name: "GitHub", role: "Code source" },
];

export default function PlateformePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Plateforme MAP Signature</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>60% · 4 bloqueurs</p>
        </div>

        {/* Progress */}
        <Card>
          <div style={{ padding: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
              <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: "-.04em" }}>60<span style={{ fontSize: 20, fontWeight: 300, color: "var(--t3)" }}>%</span></div>
              <span style={{ fontSize: 11, color: "var(--t4)", fontWeight: 300 }}>4 bloqueurs restants</span>
            </div>
            <div style={{ height: 3, background: "rgba(255,255,255,.04)", borderRadius: 2 }}>
              <div style={{ height: "100%", width: "60%", background: "var(--t1)", borderRadius: 2 }} />
            </div>
          </div>
        </Card>

        <div style={{ height: 12 }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Bloqueurs" meta="4" />
            <CardBody>
              {blockers.map((b, i) => (
                <div key={b} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "11px 0", borderBottom: i < blockers.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)" }} />
                  <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{b}</span>
                </div>
              ))}
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Complété" meta={String(completed.length)} />
            <CardBody>
              {completed.map((c, i) => (
                <div key={c} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "11px 0", borderBottom: i < completed.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)" }} />
                  <span style={{ fontSize: 13, color: "var(--t3)", fontWeight: 300 }}>{c}</span>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Stack */}
        <Card>
          <CardHead title="Stack" />
          <CardBody>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
              {stack.map((s) => (
                <div key={s.name} style={{
                  padding: 14, borderRadius: 10,
                  background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.04)",
                }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--t1)" }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: "var(--t3)", marginTop: 3, fontWeight: 300 }}>{s.role}</div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

      </main>
    </div>
  );
}
