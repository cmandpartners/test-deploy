import Sidebar from "./components/Sidebar";
import { Card, CardHead, CardBody } from "./components/Card";
import { kpis, tasks, readyItems, missingItems, financeRows, accounts, habits, events } from "./data";

const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>
            Bonjour, Clément
          </h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>
            Dimanche 20 avril 2026
          </p>
        </div>

        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 12 }}>
          {kpis.map((k) => (
            <Card key={k.label}>
              <div style={{ padding: 24 }}>
                <div style={{ fontSize: 11, fontWeight: 400, color: "var(--t3)", letterSpacing: ".02em" }}>
                  {k.label}
                </div>
                <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-.04em", lineHeight: 1, marginTop: 14 }}>
                  {k.value}
                  <span style={{ fontSize: 18, fontWeight: 300, color: "var(--t3)" }}>{k.unit}</span>
                </div>
                <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 10, fontWeight: 300 }}>{k.sub}</div>
                <div style={{ height: 2, background: "var(--t4)", borderRadius: 1, marginTop: 16, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${k.progress}%`, background: "var(--t2)", borderRadius: 1 }} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Vision */}
        <div style={{
          background: "linear-gradient(135deg, var(--card-hi) 0%, var(--card) 60%, var(--card-end) 100%)",
          border: "1px solid var(--border)",
          borderRadius: 14, padding: 30, marginBottom: 12,
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -60, right: -60, width: 180, height: 180,
            background: "radial-gradient(circle, rgba(167,139,250,.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: ".12em", textTransform: "uppercase" as const, color: "var(--t4)", marginBottom: 16 }}>
            Vision
          </div>
          <div style={{ fontSize: 18, fontWeight: 300, color: "var(--t3)", lineHeight: 1.65, letterSpacing: "-.01em", maxWidth: 600 }}>
            Devenir <strong style={{ fontWeight: 600, color: "var(--t1)" }}>la référence en positionnement SaaS B2B</strong>.
            Construire CM &amp; Partners client par client, atteindre l&apos;indépendance,
            vivre depuis <strong style={{ fontWeight: 600, color: "var(--t1)" }}>la Barbade</strong>.
          </div>
        </div>

        {/* Tasks + Readiness */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Priorités" meta="7" />
            <CardBody>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {tasks.map((t) => (
                  <div key={t.text} style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "12px 4px", borderBottom: "1px solid rgba(255,255,255,.03)",
                  }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                      background: t.dot === "urgent" ? "rgba(248,113,113,.6)" : t.dot === "ready" ? "rgba(96,165,250,.5)" : "var(--t4)",
                    }} />
                    <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 400 }}>{t.text}</span>
                    <span style={{ fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".04em", textTransform: "uppercase" as const }}>
                      {t.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Lancement" meta="pas prêt" />
            <CardBody>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div style={{ padding: 16, background: "rgba(255,255,255,.015)", borderRadius: 10 }}>
                  <div style={{ fontSize: 9, fontWeight: 500, textTransform: "uppercase" as const, letterSpacing: ".06em", color: "var(--t2)", marginBottom: 10 }}>Prêt</div>
                  <div style={{ fontSize: 12, color: "var(--t3)", lineHeight: 1.8, fontWeight: 300 }}>
                    {readyItems.map((item) => <div key={item}>{item}</div>)}
                  </div>
                </div>
                <div style={{ padding: 16, background: "rgba(255,255,255,.015)", borderRadius: 10 }}>
                  <div style={{ fontSize: 9, fontWeight: 500, textTransform: "uppercase" as const, letterSpacing: ".06em", color: "var(--t3)", marginBottom: 10 }}>Manquant</div>
                  <div style={{ fontSize: 12, color: "var(--t3)", lineHeight: 1.8, fontWeight: 300 }}>
                    {missingItems.map((item) => <div key={item}>{item}</div>)}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Finance + Habits */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Card>
            <CardHead title="Finance" meta="phase 1" />
            <CardBody>
              {financeRows.map((r) => (
                <div key={r.label} style={{
                  display: "flex", justifyContent: "space-between", padding: "11px 0",
                  borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <span style={{ fontSize: 13, color: "var(--t3)", fontWeight: 300 }}>{r.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--t2)" }}>{r.value}</span>
                </div>
              ))}
              <div style={{
                display: "flex", justifyContent: "space-between", padding: "14px 0 0",
                marginTop: 4, borderTop: "1px solid rgba(255,255,255,.06)",
              }}>
                <span style={{ fontSize: 13, color: "var(--t1)", fontWeight: 500 }}>Reste</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--t1)" }}>57 €</span>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
                {accounts.map((a) => (
                  <div key={a.label} style={{
                    flex: 1, padding: 16, background: "rgba(255,255,255,.02)",
                    borderRadius: 10, border: "1px solid rgba(255,255,255,.03)",
                  }}>
                    <div style={{ fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".06em", textTransform: "uppercase" as const }}>{a.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 600, color: a.dim ? "var(--t2)" : "var(--t1)", marginTop: 8, letterSpacing: "-.02em" }}>{a.value}</div>
                    <div style={{ fontSize: 10, color: "var(--t4)", marginTop: 4, fontWeight: 300 }}>{a.sub}</div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Habitudes" meta="S17" />
            <CardBody>
              <div style={{ display: "flex", gap: 14, marginBottom: 8, paddingLeft: 120 }}>
                {dayLabels.map((d, i) => (
                  <span key={`day-${i}`} style={{ width: 16, textAlign: "center", fontSize: 8, color: i === 6 ? "var(--t2)" : "var(--t4)" }}>{d}</span>
                ))}
              </div>
              {habits.map((h) => (
                <div key={h.name} style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "11px 0",
                  borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 400, minWidth: 100 }}>{h.name}</span>
                  <div style={{ display: "flex", gap: 4 }}>
                    {h.days.map((done, i) => (
                      <div key={`${h.name}-${i}`} style={{
                        width: 16, height: 16, borderRadius: 4,
                        background: done ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.03)",
                        border: `1px solid ${i === 6 ? "rgba(255,255,255,.15)" : done ? "rgba(255,255,255,.10)" : "rgba(255,255,255,.04)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 8, color: "var(--t2)",
                      }}>
                        {done && "✓"}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 20, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,.04)" }}>
                <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: ".10em", textTransform: "uppercase" as const, color: "var(--t4)", marginBottom: 14 }}>
                  À venir
                </div>
                {events.map((e, i) => (
                  <div key={`evt-${i}`} style={{
                    display: "flex", gap: 14, padding: "11px 0",
                    borderBottom: i < events.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                  }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: "50%", flexShrink: 0, marginTop: 5,
                      background: e.dot === "done" ? "rgba(255,255,255,.25)" : e.dot === "next" ? "var(--accent)" : "var(--t4)",
                      boxShadow: e.dot === "next" ? "0 0 8px rgba(167,139,250,.3)" : "none",
                    }} />
                    <div>
                      <div style={{ fontSize: 13, color: "var(--t2)", fontWeight: 400 }}>{e.title}</div>
                      <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 3, fontWeight: 300 }}>{e.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

      </main>
    </div>
  );
}
