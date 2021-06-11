import './App.css';
import React, { useState, useEffect } from 'react';
import EventCard from './components/EventCard';

function App() {

  // Setting state in App since app is scoped to a single API call
  const defaultParams = {
    timeslot_start: 'gte_now', // Assume we only care about displaying timeslots in the future
  }
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [events, setEvents] = useState([]);
  const [queryParams, setQueryParams] = useState({...defaultParams});


  useEffect(() => {
    fetch('https://api.mobilize.us/v1/events?' + new URLSearchParams(queryParams).toString())
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setEvents(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError('Failed to load');
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Mobilize Feed</h1>
        <div>
          {events.map(event => (
            <EventCard props={event} key={event.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
