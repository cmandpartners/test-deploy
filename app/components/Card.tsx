"use client";
import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`card ${className}`}>
      {children}
      <style jsx>{`
        .card {
          background: linear-gradient(165deg, var(--card-hi) 0%, var(--card) 50%, var(--card-end) 100%);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color .3s;
        }
        .card:hover { border-color: var(--border-hi); }
      `}</style>
    </div>
  );
}

export function CardHead({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="c-head">
      <span className="c-title">{title}</span>
      {meta && <span className="c-meta">{meta}</span>}
      <style jsx>{`
        .c-head {
          padding: 18px 22px 0;
          display: flex; align-items: center; justify-content: space-between;
        }
        .c-title {
          font-size: 11px; font-weight: 500; letter-spacing: .06em;
          text-transform: uppercase; color: var(--t3);
        }
        .c-meta {
          font-size: 11px; font-weight: 500; letter-spacing: .06em;
          text-transform: uppercase; color: var(--t4);
        }
      `}</style>
    </div>
  );
}

export function CardBody({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className} style={{ padding: "18px 22px 22px" }}>{children}</div>;
}
