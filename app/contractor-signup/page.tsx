import { BadgeCheck, Handshake, MessageSquareText } from "lucide-react";
import { Field, MockForm, SelectField, TextAreaField } from "@/components/mock-form";
import { PageHero } from "@/components/page-hero";

export default function ContractorSignupPage() {
  return (
    <>
      <PageHero eyebrow="Grow with CARL" title="Join the local repair network." description="We’re building a practical, trusted network of Central Arkansas contractors, handymen, and skilled workers—one good job at a time." />
      <section className="form-section">
        <div className="container form-layout">
          <MockForm buttonLabel="Apply to join the network" successTitle="Thanks for raising your hand." successText="Your mock application has been received. In the live version, CARL will contact you to learn more about your work.">
            <div className="form-section-title"><span>1</span><div><h2>About you</h2><p>Basic information to start the conversation.</p></div></div>
            <div className="field-row"><Field label="Your name" name="name" placeholder="First and last name" /><Field label="Business name (optional)" name="business" placeholder="Business or crew name" required={false} /></div>
            <div className="field-row"><Field label="Phone number" name="phone" type="tel" placeholder="(501) 555-0123" /><Field label="Email" name="email" type="email" placeholder="you@example.com" /></div>
            <Field label="Home ZIP code" name="zip" placeholder="72034" />
            <div className="form-divider" />
            <div className="form-section-title"><span>2</span><div><h2>Your work</h2><p>Help us send opportunities that fit.</p></div></div>
            <SelectField label="How would you describe your work?" name="role"><option>Licensed contractor</option><option>Handyman / small repair pro</option><option>Skilled tradesperson</option><option>General labor / helper</option><option>Crew or small company</option></SelectField>
            <TextAreaField label="Primary skills and services" name="skills" placeholder="Drywall, painting, carpentry, rental turns, electrical, plumbing..." />
            <div className="field-row"><SelectField label="Are you licensed?" name="licensed"><option>Yes</option><option>No</option><option>Not required for my work</option></SelectField><SelectField label="Are you insured?" name="insured"><option>Yes</option><option>No</option><option>In progress</option></SelectField></div>
            <TextAreaField label="Tell us a little about your experience" name="experience" placeholder="How long have you worked locally? What kinds of jobs are the best fit?" />
          </MockForm>
          <aside className="form-aside">
            <h3>Why join CARL?</h3>
            <div><Handshake /><p><strong>Local opportunities</strong>Spend less time hunting through scattered posts.</p></div>
            <div><MessageSquareText /><p><strong>Clearer job details</strong>We aim to collect the basics before making a connection.</p></div>
            <div><BadgeCheck /><p><strong>Build your reputation</strong>Good work leads to stronger local referrals.</p></div>
            <blockquote>We’re starting small in Conway, with a focus on good communication and fair expectations.</blockquote>
          </aside>
        </div>
      </section>
    </>
  );
}
