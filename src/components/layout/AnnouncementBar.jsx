export default function AnnouncementBar() {
  return (
    <div className="announcement">
      <div className="announcement-track" aria-label="Mega one dollar deals, limited stock">
        {Array.from({ length: 4 }, (_, index) => (
          <span key={index}>✳ MEGA ONE DOLLAR DEALS <b>—</b> LIMITED STOCK <i>✦</i> SHIP ACROSS PAKISTAN <b>—</b></span>
        ))}
      </div>
    </div>
  )
}
