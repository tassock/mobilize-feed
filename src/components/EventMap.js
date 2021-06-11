import GoogleMapReact from 'google-map-react';
const key = "AIzaSyDoRY1XMAC6JJbg7ZhLqkPXsQvywrevXcA" // Should be in secrets and not checked into version control, but moving fast!

const MarkerComponent = ({ text }) => <div>{text}</div>;

export default function EventMap({ props }) {
  const { events } = props;

  // Center on united states
  const defaultProps = {
    center: {
      lat: 39.8097343,
      lng: -98.5556199
    },
    zoom: 4
  };
  if (events.length === 0) return null;
  const filteredEvents = events.filter(e => e.location && e.location.location);
  return (
    <div className='event-map-container'>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {filteredEvents.map(event => (
          <div
            className='event-map-marker'
            key={event.id}
            lat={event.location.location.latitude}
            lng={event.location.location.longitude}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
