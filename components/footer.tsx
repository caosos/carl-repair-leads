import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo inverse />
          <p className="footer-blurb">
            Local repair help and honest work opportunities for Conway and Central Arkansas.
          </p>
        </div>
        <div>
          <h3>Get help</h3>
          <Link href="/post-a-job">Post a job</Link>
          <Link href="/drywall-repair">Drywall repair</Link>
        </div>
        <div>
          <h3>Find work</h3>
          <Link href="/looking-for-work">Available today</Link>
          <Link href="/contractor-signup">Join the network</Link>
        </div>
        <div>
          <h3>Service area</h3>
          <p>Conway, Arkansas</p>
          <p>Faulkner County & nearby</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 CARL. Built local, for local.</span>
        <Link href="/admin">Admin</Link>
      </div>
    </footer>
  );
}
