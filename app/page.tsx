import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Hammer,
  HardHat,
  HomeIcon,
  MapPin,
  MessageSquareText,
  PaintRoller,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  { icon: PaintRoller, title: "Drywall repair", text: "Holes, cracks, texture, ceilings, and move-out damage." },
  { icon: Wrench, title: "Small repairs", text: "The little jobs that still need a capable, reliable set of hands." },
  { icon: HardHat, title: "Licensed trades", text: "Connect with local pros for jobs that call for a licensed contractor." },
  { icon: Hammer, title: "Labor help today", text: "Moving, cleanup, demo, hauling, and an extra set of hands." },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="local-pill"><MapPin size={16} /> Conway & Central Arkansas</div>
            <h1>Small repair.<br /><span>Big relief.</span></h1>
            <p>
              Tell us what needs fixing. CARL connects Central Arkansas homeowners with
              local repair help—without the runaround.
            </p>
            <div className="hero-actions">
              <Link href="/post-a-job" className="button button-primary button-large">
                Post your repair <ArrowRight size={19} />
              </Link>
              <Link href="/looking-for-work" className="button button-ghost button-large">
                I’m looking for work
              </Link>
            </div>
            <div className="trust-row">
              <span><CheckCircle2 /> Free to post</span>
              <span><CheckCircle2 /> Local people</span>
              <span><CheckCircle2 /> No obligation</span>
            </div>
          </div>
          <div className="hero-art" aria-label="A local home repair illustration">
            <div className="sun" />
            <div className="cloud cloud-one" />
            <div className="cloud cloud-two" />
            <div className="house">
              <div className="roof" />
              <div className="chimney" />
              <div className="house-body">
                <div className="window"><span /><span /><span /><span /></div>
                <div className="door" />
              </div>
            </div>
            <div className="ground" />
            <div className="hero-badge">
              <span className="badge-icon"><ShieldCheck /></span>
              <span><small>LOCAL CONNECTION</small><strong>Help you can count on</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">How can CARL help?</span>
            <h2>One local place to get it done.</h2>
            <p>From a fist-sized drywall hole to an extra hand for the afternoon.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <Link href={title === "Drywall repair" ? "/drywall-repair" : "/post-a-job"} className="service-card" key={title}>
                <span className="service-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="card-link">Get help <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container split-section">
          <div className="process-visual">
            <div className="phone-card">
              <div className="phone-top"><span /><span>New repair request</span></div>
              <div className="mini-photo"><HomeIcon size={44} /></div>
              <span className="mini-label">DRYWALL REPAIR</span>
              <strong>Ceiling patch in Conway</strong>
              <p>Small area near the hallway light. Ready this week.</p>
              <div className="mini-meta"><MapPin size={14} /> Conway, AR <Clock3 size={14} /> This week</div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Simple on purpose</span>
            <h2>Tell us once.<br />We’ll help from there.</h2>
            <div className="steps">
              <div><span>1</span><p><strong>Describe the job</strong>Share a few details and photos if you have them.</p></div>
              <div><span>2</span><p><strong>We review it locally</strong>A real person checks your request and finds the right fit.</p></div>
              <div><span>3</span><p><strong>Connect and get it fixed</strong>Hear from available local help and choose what works.</p></div>
            </div>
            <Link href="/post-a-job" className="text-link">Start your repair request <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section worker-section">
        <div className="container worker-banner">
          <div>
            <span className="eyebrow light">Built for local workers, too</span>
            <h2>Good at fixing things?<br />Let’s find you good work.</h2>
            <p>Join a growing network of Central Arkansas contractors, handymen, and skilled helpers.</p>
          </div>
          <div className="worker-actions">
            <Link href="/contractor-signup" className="button button-white">Join the contractor network <ArrowRight size={18} /></Link>
            <Link href="/looking-for-work" className="button button-outline-light">Available for work today</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container local-callout">
          <span className="callout-icon"><MessageSquareText /></span>
          <div><span className="eyebrow">Local means reachable</span><h2>Questions before you post?</h2><p>Send the request anyway. We’ll follow up and help you sort out what kind of repair you need.</p></div>
          <Link href="/post-a-job" className="button button-secondary">Tell us what’s going on</Link>
        </div>
      </section>
    </>
  );
}
