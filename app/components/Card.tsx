import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}

export function CardHead({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="c-head">
      <span className="c-title">{title}</span>
      {meta && <span className="c-meta">{meta}</span>}
    </div>
  );
}

export function CardBody({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className} style={{ padding: "18px 22px 22px" }}>{children}</div>;
}
