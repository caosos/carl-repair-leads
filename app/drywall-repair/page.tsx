import Link from "next/link";
import { ImageGallery } from "@/components/image-gallery";
import { ArrowRight, Check, CircleDot, Clock3, Home, MapPin, Paintbrush } from "lucide-react";

const repairs = ["Holes in walls", "Ceiling patches", "Texture matching", "Cracks", "Rental damage", "Move-out damage", "Damage from electricians, alarm installers, HVAC, plumbing, and attic work"];

export default function DrywallRepairPage() {
  return (
    <>
      <section className="drywall-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="local-pill"><MapPin size={16} /> Conway and Central Arkansas</div>
            <h1>Drywall damage?<br /><span>Let’s patch that.</span></h1>
            <p>Holes, cracks, ceiling patches, and texture repair. Send a few photos and get a straightforward local response.</p>
            <div className="hero-actions"><Link href="/post-a-job" className="button button-primary button-large">Send photos for a drywall quote <ArrowRight size={19} /></Link></div>
            <div className="trust-row"><span><Check /> Small drywall jobs welcome</span><span><Check /> Rental and move-out damage</span><span><Check /> Trade damage repair</span></div>
          </div>
          <div className="drywall-demo">
            <div className="wall-panel before-panel"><span>BEFORE</span><div className="wall-hole"><i /><i /><i /></div></div>
            <div className="wall-panel after-panel"><span>AFTER</span><div className="smooth-wall"><Check /></div></div>
            <div className="tape-roll" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split-section repair-list-section">
          <div>
            <span className="eyebrow">The first CARL specialty</span>
            <h2>Small damage is still worth fixing right.</h2>
            <p className="large-copy">Drywall repair can be messy, hard to match, and easy to put off. We’re focused on making the first step much easier.</p>
            <div className="check-grid">{repairs.map((repair) => <span key={repair}><Check />{repair}</span>)}</div>
          </div>
          <div className="quote-card">
            <Paintbrush size={34} />
            <h3>Photos help us help you.</h3>
            <p>Include one close-up and one wider photo showing where the damage sits in the room.</p>
            <Link href="/post-a-job" className="button button-secondary button-full">Send photos for a drywall quote</Link>
          </div>
        </div>
      </section>
      <ImageGallery />
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading centered"><span className="eyebrow">Common callouts</span><h2>How did that hole get there?</h2><p>We see the everyday stuff. No long explanation needed.</p></div>
          <div className="reason-grid">
            <div><CircleDot /><h3>Trade access</h3><p>After plumbing, electrical, HVAC, alarm, or attic work.</p></div>
            <div><Home /><h3>Rental turns</h3><p>Move-out holes, dings, dents, and damage before the next tenant.</p></div>
            <div><Clock3 /><h3>Life happened</h3><p>Door knobs, furniture, kids, pets, leaks, and everything else.</p></div>
          </div>
        </div>
      </section>
      <section className="section"><div className="container final-cta"><span className="eyebrow light">Conway and Central Arkansas</span><h2>Show us the wall.<br />We’ll take it from there.</h2><p>Small drywall jobs are welcome. It takes about two minutes to send the details.</p><Link href="/post-a-job" className="button button-white button-large">Send photos for a drywall quote <ArrowRight size={19} /></Link></div></section>
    </>
  );
}
