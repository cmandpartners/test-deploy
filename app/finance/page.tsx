import Sidebar from "../components/Sidebar";
import { Card, CardHead, CardBody } from "../components/Card";

const objective = {
  title: "Indépendance financière",
  horizon: "2-3 ans",
  progress: 5,
};

const tasks = [
  { text: "Ouvrir CTO Trade Republic", status: "à faire", color: "var(--orange)" },
  { text: "DCA 50€/mois IWDA", status: "à faire", color: "var(--orange)" },
  { text: "Coussin sécurité 1 000€", status: "en attente", color: "var(--blue)" },
];

const budget = [
  { label: "Revenus (AAH)", value: "+801 €" },
  { label: "Dépenses fixes", value: "-336 €" },
  { label: "Dépenses business", value: "-208 €" },
  { label: "Investissement (DCA)", value: "-50 €" },
  { label: "Remboursement CESP", value: "-150 €" },
];

const accounts = [
  { label: "PEA", value: "1 050 €", sub: "CW8" },
  { label: "LEP", value: "509 €", sub: "5% net" },
  { label: "CESP", value: "~50K", sub: "0% · 150€/mois" },
];

const phases = [
  { num: 1, title: "Fondation", active: true, desc: "PEA→CW8, ouvrir CTO, DCA 50€/mois" },
  { num: 2, title: "1er client", active: false, desc: "Coussin 1K€, DCA→200€/mois" },
  { num: 3, title: "Revenus réguliers", active: false, desc: "Coussin 3K€, DCA 300-500€/mois" },
  { num: 4, title: "Départ France", active: false, desc: "PEA gelé, CTO continue, fiscalité" },
];

const upcoming = [
  { text: "Tâches finance", date: "Lun. 20 avril · 16h", color: "var(--blue)" },
  { text: "Entretien finance", date: "Dim. 4 mai", color: "var(--orange)" },
];

export default function FinancePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Finance</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>Phase 1 · Entretiens le dimanche</p>
        </div>

        {/* Objectif */}
        <Card>
          <div style={{ padding: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" as const, color: "var(--t1)", marginBottom: 12 }}>Objectif</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontSize: 20, fontWeight: 500, color: "var(--t1)" }}>{objective.title}</div>
              <span style={{ fontSize: 11, color: "var(--t4)", fontWeight: 300 }}>{objective.horizon}</span>
            </div>
            <div style={{ height: 3, background: "rgba(255,255,255,.04)", borderRadius: 2, marginTop: 14 }}>
              <div style={{ height: "100%", width: `${objective.progress}%`, background: "var(--t1)", borderRadius: 2, minWidth: 4 }} />
            </div>
          </div>
        </Card>

        <div style={{ height: 12 }} />

        {/* Budget + Comptes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Budget mensuel" />
            <CardBody>
              {budget.map((r) => (
                <div key={r.label} style={{
                  display: "flex", justifyContent: "space-between", padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <span style={{ fontSize: 13, color: "var(--t3)", fontWeight: 300 }}>{r.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--t2)" }}>{r.value}</span>
                </div>
              ))}
              <div style={{
                display: "flex", justifyContent: "space-between", padding: "12px 0 0",
                marginTop: 4, borderTop: "1px solid rgba(255,255,255,.06)",
              }}>
                <span style={{ fontSize: 13, color: "var(--t1)", fontWeight: 500 }}>Reste à vivre</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--t1)" }}>57 €</span>
              </div>
            </CardBody>
          </Card>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Card>
              <CardHead title="Comptes" />
              <CardBody>
                {accounts.map((a, i) => (
                  <div key={a.label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "12px 0", borderBottom: i < accounts.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                  }}>
                    <div>
                      <div style={{ fontSize: 13, color: "var(--t2)" }}>{a.label}</div>
                      <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 2, fontWeight: 300 }}>{a.sub}</div>
                    </div>
                    <span style={{ fontSize: 18, fontWeight: 600, color: "var(--t1)" }}>{a.value}</span>
                  </div>
                ))}
              </CardBody>
            </Card>

            <Card>
              <CardHead title="Tâches" meta={String(tasks.length)} />
              <CardBody>
                {tasks.map((t, i) => (
                  <div key={t.text} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 0", borderBottom: i < tasks.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: t.color }} />
                    <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{t.text}</span>
                    <span style={{ fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".04em", textTransform: "uppercase" as const }}>{t.status}</span>
                  </div>
                ))}
              </CardBody>
            </Card>

            <Card>
              <CardHead title="Prochains rendez-vous" />
              <CardBody>
                {upcoming.map((u, i) => (
                  <div key={u.text} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 0", borderBottom: i < upcoming.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: u.color }} />
                    <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{u.text}</span>
                    <span style={{ fontSize: 11, color: "var(--t4)", fontWeight: 300 }}>{u.date}</span>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Phases */}
        <Card>
          <CardHead title="Plan d'investissement" />
          <CardBody>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
              {phases.map((p) => (
                <div key={p.num} style={{
                  padding: 18, borderRadius: 10,
                  background: p.active ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.02)",
                  border: `1px solid ${p.active ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.04)"}`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: 5,
                      background: p.active ? "var(--t1)" : "rgba(255,255,255,.06)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 700, color: p.active ? "#000" : "var(--t3)",
                    }}>{p.num}</div>
                    <span style={{ fontSize: 12, fontWeight: 500, color: p.active ? "var(--t1)" : "var(--t3)" }}>{p.title}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "var(--t3)", fontWeight: 300, lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

      </main>
    </div>
  );
}
