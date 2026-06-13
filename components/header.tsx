"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "/drywall-repair", label: "Drywall Repair" },
  { href: "/post-a-job", label: "Post a Job" },
  { href: "/looking-for-work", label: "Find Work" },
  { href: "/contractor-signup", label: "Join the Network" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="button button-small button-primary mobile-cta" href="/post-a-job">
            Get repair help
          </Link>
        </nav>
        <Link className="button button-small button-primary desktop-cta" href="/post-a-job">
          Get repair help
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
