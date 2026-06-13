import { Bell, BriefcaseBusiness, CheckCircle2, CircleDollarSign, ClipboardCheck, Hammer, HardHat, MapPin, MoreHorizontal, PaintRoller, Search, UserPlus, Users } from "lucide-react";

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
          <div className="stat-grid admin-category-grid">
            <div><span className="stat-icon orange"><BriefcaseBusiness /></span><p>New Leads<strong>7</strong><small>3 added today</small></p></div>
            <div><span className="stat-icon blue"><PaintRoller /></span><p>Drywall Leads<strong>9</strong><small>4 need follow-up</small></p></div>
            <div><span className="stat-icon gold"><Hammer /></span><p>Labor Help Requests<strong>5</strong><small>2 needed today</small></p></div>
            <div><span className="stat-icon green"><Users /></span><p>Worker Signups<strong>12</strong><small>5 available today</small></p></div>
            <div><span className="stat-icon blue"><UserPlus /></span><p>Contractor Signups<strong>8</strong><small>2 new this week</small></p></div>
            <div><span className="stat-icon gold"><ClipboardCheck /></span><p>Assigned Jobs<strong>18</strong><small>6 in progress</small></p></div>
            <div><span className="stat-icon green"><CheckCircle2 /></span><p>Completed Jobs<strong>31</strong><small>8 this week</small></p></div>
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
