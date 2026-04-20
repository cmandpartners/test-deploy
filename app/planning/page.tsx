import Sidebar from "../components/Sidebar";

export default function PlanningPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: 210, padding: "48px 56px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.03em" }}>Planning</h2>
        <p style={{ fontSize: 13, color: "var(--t4)", marginTop: 8, fontWeight: 300 }}>
          Section en construction — bientôt disponible.
        </p>
      </main>
    </div>
  );
}
