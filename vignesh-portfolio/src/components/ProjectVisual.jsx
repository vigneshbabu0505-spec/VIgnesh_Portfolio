import { Search, MapPin, Home, Calendar, CreditCard, Users, FolderOpen, Save } from 'lucide-react'

// Small CSS/UI mockups that communicate each project without external images.

function PgPeekInVisual() {
  return (
    <div className="mockup mockup--pgpeekin" aria-hidden="true">
      <div className="mockup__topbar">
        <span className="mockup__dot" />
        <span className="mockup__dot" />
        <span className="mockup__dot" />
        <span className="mockup__title">pgpeekin · dashboard</span>
      </div>
      <div className="mockup__search">
        <Search size={13} />
        <span>Search PGs near you</span>
      </div>
      <div className="mockup__chips">
        <span className="mockup__chip"><MapPin size={11} /> Location</span>
        <span className="mockup__chip"><Home size={11} /> PG Type</span>
        <span className="mockup__chip">Rooms</span>
      </div>
      <div className="mockup__rows">
        <div className="mockup__row">
          <Calendar size={13} />
          <div className="mockup__row-bar" style={{ width: '70%' }} />
        </div>
        <div className="mockup__row">
          <CreditCard size={13} />
          <div className="mockup__row-bar" style={{ width: '55%' }} />
        </div>
        <div className="mockup__row">
          <Users size={13} />
          <div className="mockup__row-bar" style={{ width: '40%' }} />
        </div>
      </div>
    </div>
  )
}

function StudentManagementVisual() {
  return (
    <div className="mockup mockup--sms" aria-hidden="true">
      <div className="mockup__topbar">
        <span className="mockup__dot" />
        <span className="mockup__dot" />
        <span className="mockup__dot" />
        <span className="mockup__title">StudentManagementSystem.java</span>
      </div>
      <div className="mockup__sms-panel">
        <div className="mockup__sms-actions">
          <span className="mockup__sms-btn"><FolderOpen size={11} /> Add</span>
          <span className="mockup__sms-btn"><Save size={11} /> Update</span>
          <span className="mockup__sms-btn">Delete</span>
        </div>
        <div className="mockup__sms-table">
          <div className="mockup__sms-thead">
            <span>ID</span>
            <span>Name</span>
            <span>Grade</span>
          </div>
          {[1, 2, 3].map((r) => (
            <div className="mockup__sms-trow" key={r}>
              <span />
              <span />
              <span />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectVisual({ type }) {
  if (type === 'pgpeekin') return <PgPeekInVisual />
  if (type === 'sms') return <StudentManagementVisual />
  return null
}
