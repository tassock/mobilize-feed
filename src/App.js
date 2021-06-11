import './App.css';
import React, { useState, useEffect } from 'react';
import EventCard from './components/EventCard';
import EventMap from './components/EventMap';

const eventTypes = ['CANVASS', 'PHONE_BANK', 'TEXT_BANK', 'MEETING', 'COMMUNITY', 'FUNDRAISER', 'MEET_GREET', 'HOUSE_PARTY', 'VOTER_REG', 'TRAINING', 'FRIEND_TO_FRIEND_OUTREACH', 'DEBATE_WATCH_PARTY', 'ADVOCACY_CALL', 'RALLY', 'TOWN_HALL', 'OFFICE_OPENING', 'BARNSTORM', 'SOLIDARITY_EVENT', 'COMMUNITY_CANVASS', 'SIGNATURE_GATHERING', 'CARPOOL', 'WORKSHOP', 'PETITION', 'AUTOMATED_PHONE_BANK', 'LETTER_WRITING', 'LITERATURE_DROP_OFF', 'VISIBILITY_EVENT', 'OTHER']
const eventsEndpoint = 'https://api.mobilize.us/v1/events?' // Note: uses deprecated API call

function App() {

  // Setting state in App since app is scoped to a single API call
  const defaultParams = {
    timeslot_start: 'gte_now', // Assume we only care about displaying timeslots in the future
  }
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [events, setEvents] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [queryParams, setQueryParams] = useState({...defaultParams});


  function loadEvents({ nextPage, queryParams }) {
    const url = nextPage ? nextPage : (eventsEndpoint + new URLSearchParams(queryParams).toString())
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setEvents(result.data);
          setNextPage(result.next);
        },
        (error) => {
          setIsLoaded(true);
          setError('Failed to load');
        }
      )
  }

  useEffect(() => {
    loadEvents({ queryParams: defaultParams })
  }, [])

  function renderFilters() {
    return (
      <div className='event-filters'>
        <label for='event-type-select'>Filter by type:</label>
        <select id='event-type-select' onChange={(e) => loadEvents({ queryParams: { ...defaultParams, event_types: e.target.value }})}>
          {eventTypes.map(eventType => (
            <option value={eventType}>{eventType}</option>
          ))}
        </select>
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (events.length === 0) {
    return <div>No events matched this query...</div>;
  } else {
    return (
      <div>
        <h1>Mobilize Feed</h1>
        {renderFilters()}
        <div>
          {events.map(event => (
            <EventCard props={event} key={event.id} />
          ))}
        </div>
        <button onClick={() => loadEvents({ nextPage })}>Next Page</button>
        <EventMap props={{ events }} />
      </div>
    );
  }
}

export default App;
