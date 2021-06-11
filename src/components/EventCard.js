// Simple emulation of event card layout on https://www.mobilize.us/
// Assumptions: Every event has a id, title, browser_url, featured_image_url and at least 1 timeslot
export default function EventCard({ props }) {
  const { featured_image_url, title, browser_url, timeslots, location } = props;

  return (
    <div className='event-card'>
      <div className='inner'>
        <div className='image-container'>
          <img src={featured_image_url} alt={title}/>
        </div>
        <div className='details'>
          <span>{formattedTimeslots(timeslots)}</span>
          <h3>{title}</h3>
          <p>{formattedLocation(location)}</p>
          <a href={browser_url}>
            Details
          </a>
        </div>
      </div>
    </div>
  )
}

// Assume we always want to show venue and address if we have it, even for virtual events
function formattedLocation(location) {
  if (!location) return null;
  const { venue, address_lines, locality, region } = location;
  return [ venue, ...address_lines, locality, region].filter(n => n && n !== '').join(', ');
}

// Assume requirements are to show first timeslot date and total number of timeslots if more than one.
function formattedTimeslots(timeslots) {
  const startDate = new Date(timeslots[0].start_date * 1000);
  const dateOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZoneName: 'short',
    hour: 'numeric',
    minute: '2-digit'
  };
  const dateAddendum = timeslots.length > 1 ? ` + ${timeslots.length - 1} other times` : '';
  return startDate.toLocaleTimeString('en-US', dateOptions) + dateAddendum;
}
