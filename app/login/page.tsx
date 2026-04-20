"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: "100vh", background: "#000",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
    }}>
      <form onSubmit={handleSubmit} style={{
        width: 320, display: "flex", flexDirection: "column", gap: 16,
      }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h1 style={{ fontSize: 18, fontWeight: 600, color: "#fff", letterSpacing: "-.02em" }}>
            Cockpit
          </h1>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,.25)", marginTop: 6 }}>
            Accès restreint
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <input
            type={show ? "text" : "password"}
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            style={{
              width: "100%", padding: "12px 44px 12px 16px",
              background: "rgba(255,255,255,.03)",
              border: `1px solid ${error ? "rgba(248,113,113,.4)" : "rgba(255,255,255,.07)"}`,
              borderRadius: 10, color: "#fff", fontSize: 14,
              fontFamily: "inherit", outline: "none",
              transition: "border-color .2s",
            }}
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            style={{
              position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,.25)", fontSize: 13, fontFamily: "inherit",
              padding: 4, lineHeight: 1,
            }}
          >
            {show ? "◉" : "○"}
          </button>
        </div>

        {error && (
          <p style={{ fontSize: 12, color: "rgba(248,113,113,.7)", textAlign: "center" }}>
            Mot de passe incorrect
          </p>
        )}

        <button type="submit" disabled={loading} style={{
          width: "100%", padding: "11px 0",
          background: loading ? "rgba(255,255,255,.03)" : "rgba(255,255,255,.06)",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 10, color: loading ? "rgba(255,255,255,.25)" : "rgba(255,255,255,.6)",
          fontSize: 13, fontWeight: 500, fontFamily: "inherit",
          cursor: loading ? "wait" : "pointer",
          transition: "all .2s",
        }}>
          {loading ? "..." : "Entrer"}
        </button>
      </form>
    </div>
  );
}
