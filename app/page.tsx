import Sidebar from "./components/Sidebar";
import { Card, CardHead, CardBody } from "./components/Card";
import { kpis, tasks, readyItems, missingItems, financeRows, accounts, habits, events } from "./data";

const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];

const dotColor: Record<string, string> = {
  urgent: "var(--red)",
  ready: "var(--green)",
  wait: "var(--blue)",
  default: "var(--orange)",
};

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Bonjour, Clément</h2>
          <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 6, fontWeight: 300 }}>Dimanche 20 avril 2026</p>
        </div>

        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 12 }}>
          {kpis.map((k) => (
            <Card key={k.label}>
              <div style={{ padding: 24 }}>
                <div style={{ fontSize: 11, color: "var(--t3)" }}>{k.label}</div>
                <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-.04em", lineHeight: 1, marginTop: 12 }}>
                  {k.value}<span style={{ fontSize: 18, fontWeight: 300, color: "var(--t3)" }}>{k.unit}</span>
                </div>
                <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 8, fontWeight: 300 }}>{k.sub}</div>
                <div style={{ height: 2, background: "var(--t4)", borderRadius: 1, marginTop: 14 }}>
                  <div style={{ height: "100%", width: `${k.progress}%`, background: "var(--t2)", borderRadius: 1 }} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Vision */}
        <Card>
          <div style={{ padding: 28 }}>
            <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: ".12em", textTransform: "uppercase" as const, color: "var(--t4)", marginBottom: 14 }}>Vision</div>
            <div style={{ fontSize: 17, fontWeight: 300, color: "var(--t3)", lineHeight: 1.65, maxWidth: 650 }}>
              Devenir <strong style={{ fontWeight: 600, color: "var(--t1)" }}>la référence en positionnement SaaS B2B</strong>.
              Construire CM &amp; Partners client par client, atteindre l&apos;indépendance,
              vivre depuis <strong style={{ fontWeight: 600, color: "var(--t1)" }}>la Barbade</strong>.
            </div>
          </div>
        </Card>

        <div style={{ height: 12 }} />

        {/* Priorités + Lancement */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <Card>
            <CardHead title="Priorités" meta={String(tasks.length)} />
            <CardBody>
              {tasks.map((t) => (
                <div key={t.text} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "11px 0", borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: dotColor[t.dot] || "var(--t4)" }} />
                  <span style={{ flex: 1, fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{t.text}</span>
                  <span style={{ fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".04em", textTransform: "uppercase" as const }}>{t.status}</span>
                </div>
              ))}
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Lancement" meta="pas prêt" />
            <CardBody>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div style={{ padding: 14, background: "rgba(255,255,255,.015)", borderRadius: 10 }}>
                  <div style={{ fontSize: 9, fontWeight: 500, textTransform: "uppercase" as const, letterSpacing: ".06em", color: "var(--green)", marginBottom: 8 }}>Prêt</div>
                  <div style={{ fontSize: 12, color: "var(--t3)", lineHeight: 1.8, fontWeight: 300 }}>
                    {readyItems.map((item) => <div key={item}>{item}</div>)}
                  </div>
                </div>
                <div style={{ padding: 14, background: "rgba(255,255,255,.015)", borderRadius: 10 }}>
                  <div style={{ fontSize: 9, fontWeight: 500, textTransform: "uppercase" as const, letterSpacing: ".06em", color: "var(--red)", marginBottom: 8 }}>Manquant</div>
                  <div style={{ fontSize: 12, color: "var(--t3)", lineHeight: 1.8, fontWeight: 300 }}>
                    {missingItems.map((item) => <div key={item}>{item}</div>)}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Finance + Habitudes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Card>
            <CardHead title="Finance" meta="phase 1" />
            <CardBody>
              {financeRows.map((r) => (
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
                <span style={{ fontSize: 13, color: "var(--t1)", fontWeight: 500 }}>Reste</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--t1)" }}>57 €</span>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                {accounts.map((a) => (
                  <div key={a.label} style={{
                    flex: 1, padding: 14, background: "rgba(255,255,255,.02)",
                    borderRadius: 10, border: "1px solid rgba(255,255,255,.03)",
                  }}>
                    <div style={{ fontSize: 9, fontWeight: 500, color: "var(--t4)", letterSpacing: ".04em", textTransform: "uppercase" as const }}>{a.label}</div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: a.dim ? "var(--t3)" : "var(--t1)", marginTop: 6, letterSpacing: "-.02em" }}>{a.value}</div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHead title="Habitudes" meta="S17" />
            <CardBody>
              <div style={{ display: "flex", gap: 14, marginBottom: 6, paddingLeft: 100 }}>
                {dayLabels.map((d, i) => (
                  <span key={`day-${i}`} style={{ width: 16, textAlign: "center", fontSize: 8, color: "var(--t4)" }}>{d}</span>
                ))}
              </div>
              {habits.map((h) => (
                <div key={h.name} style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,.03)",
                }}>
                  <span style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300, minWidth: 80 }}>{h.name}</span>
                  <div style={{ display: "flex", gap: 4 }}>
                    {h.days.map((done, i) => (
                      <div key={`${h.name}-${i}`} style={{
                        width: 16, height: 16, borderRadius: 4,
                        background: done ? "rgba(0,208,132,.15)" : "rgba(255,255,255,.03)",
                        border: `1px solid ${done ? "rgba(0,208,132,.25)" : "rgba(255,255,255,.04)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 8, color: done ? "var(--green)" : "transparent",
                      }}>
                        {done && "✓"}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,.04)" }}>
                <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: ".10em", textTransform: "uppercase" as const, color: "var(--t4)", marginBottom: 10 }}>À venir</div>
                {events.map((e, i) => (
                  <div key={`evt-${i}`} style={{
                    display: "flex", gap: 12, padding: "10px 0",
                    borderBottom: i < events.length - 1 ? "1px solid rgba(255,255,255,.03)" : "none",
                  }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%", flexShrink: 0, marginTop: 5,
                      background: e.dot === "done" ? "var(--green)" : e.dot === "next" ? "var(--blue)" : "var(--t4)",
                    }} />
                    <div>
                      <div style={{ fontSize: 13, color: "var(--t2)", fontWeight: 300 }}>{e.title}</div>
                      <div style={{ fontSize: 11, color: "var(--t4)", marginTop: 2, fontWeight: 300 }}>{e.sub}</div>
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
