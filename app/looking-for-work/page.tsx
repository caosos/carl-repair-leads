import { BriefcaseBusiness, Clock3, MapPin } from "lucide-react";
import { Field, LeadSourceField, MockForm, SelectField, TextAreaField } from "@/components/mock-form";
import { PageHero } from "@/components/page-hero";

export default function LookingForWorkPage() {
  return (
    <>
      <PageHero eyebrow="Conway / Central Arkansas work board" title="Ready to work today?" description="Tell us what you can do and where you can go. We’re building a dependable list of local people for repair, labor, cleanup, and extra-hand jobs." />
      <section className="form-section">
        <div className="container form-layout">
          <MockForm buttonLabel="Let CARL know I’m available" successTitle="You’re on today’s list!" successText="Your mock availability has been recorded. In the live version, we’ll text if a nearby job matches.">
            <div className="form-section-title"><span>1</span><div><h2>Your availability</h2><p>This listing is for immediate and short-notice work.</p></div></div>
            <SelectField label="Which worker category fits you best?" name="workerCategory"><option>Labor Help Today</option><option>Handyman / Skilled Worker</option><option>Licensed Contractor</option></SelectField>
            <div className="field-row"><Field label="Your name" name="name" placeholder="First and last name" /><Field label="Phone number" name="phone" type="tel" placeholder="(501) 555-0123" /></div>
            <SelectField label="When are you available?" name="availability"><option>Today — all day</option><option>Today — morning</option><option>Today — afternoon</option><option>Tomorrow</option><option>This week</option></SelectField>
            <div className="field-row"><Field label="Starting ZIP code" name="zip" placeholder="72032" /><SelectField label="How far can you travel?" name="distance"><option>Up to 10 miles</option><option>Up to 25 miles</option><option>Up to 50 miles</option><option>Anywhere in Central Arkansas</option></SelectField></div>
            <div className="form-divider" />
            <div className="form-section-title"><span>2</span><div><h2>What can you help with?</h2><p>Be direct about your skills and tools.</p></div></div>
            <TextAreaField label="Skills and work you can do" name="skills" placeholder="Example: Demo, cleanup, moving, basic drywall, painting, yard work..." />
            <div className="field-row"><SelectField label="Do you have transportation?" name="transport"><option>Yes, car</option><option>Yes, truck</option><option>Need a ride</option></SelectField><SelectField label="Do you have basic tools?" name="tools"><option>Yes</option><option>Some tools</option><option>No</option></SelectField></div>
            <LeadSourceField />
          </MockForm>
          <aside className="form-aside work-aside">
            <h3>How the work list works</h3>
            <div><Clock3 /><p><strong>Share availability</strong>Let us know each day or week when you’re ready.</p></div>
            <div><BriefcaseBusiness /><p><strong>Get job details</strong>If there’s a fit, CARL sends the details before you commit.</p></div>
            <div><MapPin /><p><strong>Keep it local</strong>Choose how far you’re willing to travel.</p></div>
            <p className="aside-note">CARL does not guarantee work. Always confirm scope, pay, and timing before starting a job.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
