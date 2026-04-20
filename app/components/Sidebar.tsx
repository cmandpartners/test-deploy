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
    </aside>
  );
}
