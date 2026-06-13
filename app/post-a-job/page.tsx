import { Clock3, LockKeyhole, MapPin } from "lucide-react";
import { Field, MockForm, PhotoUpload, SelectField, TextAreaField } from "@/components/mock-form";
import { PageHero } from "@/components/page-hero";

export default function PostAJobPage() {
  return (
    <>
      <PageHero
        eyebrow="Get local repair help"
        title="What needs fixing?"
        description="Give us the basics. A local CARL team member will review your request and help connect you with the right person."
      />
      <section className="form-section">
        <div className="container form-layout">
          <MockForm buttonLabel="Send my repair request" successText="Your mock repair request has been received. In the live version, CARL will follow up by phone or text.">
            <div className="form-section-title"><span>1</span><div><h2>About the job</h2><p>Don’t worry if you’re not sure what to call it.</p></div></div>
            <SelectField label="What kind of help do you need?" name="service">
              <option>Drywall repair</option><option>Small home repair</option><option>Licensed contractor</option><option>Labor help / extra hands</option><option>Not sure</option>
            </SelectField>
            <TextAreaField label="Tell us what’s going on" name="description" placeholder="Example: We have a hole in the hallway drywall, about 8 inches wide..." />
            <div className="field-row">
              <SelectField label="When do you need help?" name="timeline"><option>As soon as possible</option><option>Today</option><option>This week</option><option>Flexible</option></SelectField>
              <Field label="Job ZIP code" name="zip" placeholder="72034" />
            </div>
            <PhotoUpload />
            <div className="form-divider" />
            <div className="form-section-title"><span>2</span><div><h2>How can we reach you?</h2><p>We’ll only use this to follow up about the job.</p></div></div>
            <div className="field-row"><Field label="Your name" name="name" placeholder="First and last name" /><Field label="Phone number" name="phone" type="tel" placeholder="(501) 555-0123" /></div>
            <Field label="Email (optional)" name="email" type="email" placeholder="you@example.com" required={false} />
          </MockForm>
          <aside className="form-aside">
            <h3>What happens next?</h3>
            <div><Clock3 /><p><strong>Quick local review</strong>We’ll look over the details and may text with a question.</p></div>
            <div><MapPin /><p><strong>Matched nearby</strong>We’ll share it with a relevant local worker or contractor.</p></div>
            <div><LockKeyhole /><p><strong>You stay in control</strong>Posting is free and there’s no obligation to hire.</p></div>
            <blockquote>“Small jobs deserve a straightforward answer, too.”<span>— The idea behind CARL</span></blockquote>
          </aside>
        </div>
      </section>
    </>
  );
}
