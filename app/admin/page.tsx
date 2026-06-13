import { Bell, BriefcaseBusiness, CheckCircle2, CircleDollarSign, Clock3, HardHat, MapPin, MoreHorizontal, Search, Users } from "lucide-react";

const leads = [
  { id: "CARL-1042", name: "Sarah M.", job: "Ceiling drywall patch", location: "Conway", time: "12 min ago", status: "New", priority: true },
  { id: "CARL-1041", name: "James R.", job: "Rental move-out repairs", location: "Greenbrier", time: "48 min ago", status: "Contacted" },
  { id: "CARL-1040", name: "Melissa T.", job: "Handyman — door & trim", location: "Maumelle", time: "2 hrs ago", status: "Matched" },
  { id: "CARL-1039", name: "David L.", job: "Garage wall holes", location: "Conway", time: "Yesterday", status: "New" },
];

export default function AdminPage() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand"><span>CARL</span><small>OPERATIONS</small></div>
        <nav><a className="active"><BriefcaseBusiness /> Leads</a><a><HardHat /> Workers</a><a><Users /> Network</a><a><CircleDollarSign /> Outcomes</a></nav>
        <div className="admin-user"><span>MR</span><p><strong>Michael</strong><small>Administrator</small></p></div>
      </aside>
      <div className="admin-main">
        <header className="admin-header"><div><h1>Good morning, Michael.</h1><p>Here’s what’s happening with CARL today.</p></div><button><Bell /></button></header>
        <div className="admin-content">
          <div className="stat-grid">
            <div><span className="stat-icon orange"><BriefcaseBusiness /></span><p>New leads today<strong>7</strong><small>↑ 3 from yesterday</small></p></div>
            <div><span className="stat-icon blue"><Clock3 /></span><p>Needs follow-up<strong>4</strong><small>2 over one hour old</small></p></div>
            <div><span className="stat-icon green"><CheckCircle2 /></span><p>Matched this week<strong>18</strong><small>72% match rate</small></p></div>
            <div><span className="stat-icon gold"><HardHat /></span><p>Available workers<strong>12</strong><small>5 available today</small></p></div>
          </div>
          <div className="admin-panel">
            <div className="panel-header"><div><h2>Recent repair leads</h2><p>Newest requests across Central Arkansas</p></div><div className="search-box"><Search /><input placeholder="Search leads..." /></div></div>
            <div className="lead-table">
              <div className="table-row table-head"><span>Lead</span><span>Request</span><span>Location</span><span>Status</span><span>Received</span><span /></div>
              {leads.map((lead) => <div className="table-row" key={lead.id}><span><strong>{lead.name}</strong><small>{lead.id}</small></span><span>{lead.job}{lead.priority && <small className="hot">Drywall priority</small>}</span><span className="location"><MapPin />{lead.location}</span><span><i className={`status ${lead.status.toLowerCase()}`}>{lead.status}</i></span><span>{lead.time}</span><button><MoreHorizontal /></button></div>)}
            </div>
          </div>
          <div className="admin-bottom-grid">
            <div className="admin-panel mini-panel"><div className="panel-header"><div><h2>Lead sources</h2><p>This month</p></div></div><div className="bar-list"><span><b>Direct / CARL site</b><i><em style={{width:"72%"}} /></i><strong>42</strong></span><span><b>Facebook referral</b><i><em style={{width:"48%"}} /></i><strong>28</strong></span><span><b>Word of mouth</b><i><em style={{width:"31%"}} /></i><strong>18</strong></span></div></div>
            <div className="admin-panel mini-panel"><div className="panel-header"><div><h2>Today’s worker board</h2><p>5 people marked available</p></div></div><div className="worker-list"><span><i>JT</i><p><strong>Jake T.</strong><small>Drywall, paint · Conway</small></p><b>Available</b></span><span><i>DM</i><p><strong>DeShawn M.</strong><small>Labor, moving · Maumelle</small></p><b>Available</b></span><span><i>CR</i><p><strong>Carlos R.</strong><small>Handyman · Greenbrier</small></p><b>Afternoon</b></span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
