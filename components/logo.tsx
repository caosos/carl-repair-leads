import Link from "next/link";
import { Wrench } from "lucide-react";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`logo ${inverse ? "logo-inverse" : ""}`}>
      <span className="logo-mark">
        <Wrench size={22} strokeWidth={2.5} />
      </span>
      <span className="logo-copy">
        <strong>CARL</strong>
        <small>Central Arkansas Repair Leads</small>
      </span>
    </Link>
  );
}
