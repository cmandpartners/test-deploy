"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Principal", items: [
    { name: "Vue d'ensemble", icon: "◆", href: "/", count: null },
    { name: "Tâches", icon: "□", href: "/taches", count: 7 },
    { name: "Planning", icon: "○", href: "/planning", count: null },
  ]},
  { label: "Business", items: [
    { name: "CM & Partners", icon: "△", href: "/business", count: null },
    { name: "Acquisition", icon: "↗", href: "/acquisition", count: null },
    { name: "Plateforme", icon: "■", href: "/plateforme", count: null },
  ]},
  { label: "Personnel", items: [
    { name: "Finance", icon: "◆", href: "/finance", count: null },
    { name: "Objectifs", icon: "★", href: "/objectifs", count: null },
  ]},
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <h1>Cockpit</h1>
        <p>Clément Mourlon</p>
      </div>

      <nav className="sb-nav">
        {nav.map((section) => (
          <div key={section.label}>
            <div className="sb-label">{section.label}</div>
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`sb-item ${pathname === item.href ? "active" : ""}`}
              >
                <span className="sb-icon">{item.icon}</span>
                {item.name}
                {item.count !== null && <span className="sb-count">{item.count}</span>}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      <div className="sb-foot">
        <span className="sb-dot" />
        Dave connecté
      </div>

      <style jsx>{`
        .sidebar {
          width: 210px;
          min-height: 100vh;
          background: #09090b;
          border-right: 1px solid var(--border);
          padding: 32px 0;
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0; left: 0; bottom: 0;
          z-index: 10;
        }
        .sb-brand { padding: 0 24px 32px; }
        .sb-brand h1 { font-size: 15px; font-weight: 600; letter-spacing: -.02em; }
        .sb-brand p {
          font-size: 10px; color: var(--t3); margin-top: 4px;
          font-weight: 400; letter-spacing: .08em; text-transform: uppercase;
        }
        .sb-nav { padding: 0 10px; flex: 1; }
        .sb-label {
          font-size: 9px; font-weight: 500; letter-spacing: .12em;
          text-transform: uppercase; color: var(--t4);
          padding: 20px 14px 8px;
        }
        .sb-item {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 14px; border-radius: 8px;
          color: var(--t3); font-size: 13px; font-weight: 400;
          cursor: pointer; transition: all .2s;
          position: relative; overflow: hidden;
          text-decoration: none; border: 1px solid transparent;
        }
        .sb-item:hover { color: var(--t2); }
        .sb-item.active {
          color: var(--t1);
          background: linear-gradient(90deg, rgba(167,139,250,.10) 0%, transparent 100%);
        }
        .sb-item.active::before {
          content: ''; position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 2px; background: var(--accent); border-radius: 1px;
        }
        .sb-icon { font-size: 12px; width: 16px; text-align: center; }
        .sb-count { margin-left: auto; font-size: 11px; color: var(--t4); }
        .sb-foot {
          margin-top: auto; padding: 20px 24px;
          display: flex; align-items: center; gap: 8px;
          font-size: 11px; color: var(--t4);
        }
        .sb-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px rgba(52,211,153,.5);
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .4; }
        }
      `}</style>
    </aside>
  );
}
