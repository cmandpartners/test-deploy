"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "", items: [
    { name: "Dashboard", icon: "◆", href: "/" },
  ]},
  { label: "Business", items: [
    { name: "CM & Partners", icon: "△", href: "/business" },
    { name: "Acquisition", icon: "↗", href: "/acquisition" },
    { name: "Plateforme", icon: "■", href: "/plateforme" },
  ]},
  { label: "Personnel", items: [
    { name: "Finance", icon: "○", href: "/finance" },
    { name: "Bien-être", icon: "●", href: "/bien-etre" },
  ]},
  { label: "", items: [
    { name: "Guide", icon: "?", href: "/guide" },
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
        {nav.map((section, si) => (
          <div key={si}>
            {section.label && <div className="sb-label">{section.label}</div>}
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`sb-item ${pathname === item.href ? "active" : ""}`}
              >
                <span className="sb-icon">{item.icon}</span>
                {item.name}
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
