# MobilizeFeed
Demo frontend app using the Mobilize America API

## How to run app
From the project directory, run:

`npm install` to install dependencies

`npm start` to start server

`npm test` to run tests

## Dependencies
* ReactJS - Common javascript UI library, already seems to be used by Mobilize
* create-react-app - Standard react configuration, already seems to be used by Mobilize
* Google Maps - Commons maps library, already used by Mobilize
* google-map-react - react wrapper for Google Maps API that does what we need it to do, at least for this example. Had more stars and fewer open issues than `google-maps-react` library.

## Features implemented
* A list of upcoming events + their details, specifically: `featured_image_url`, `title`, `timeslots`, `location`, `event_type`, `browser_url`
* A map view of event integrated into the main page with red markers

## Suggested UX Improvements
* Better styling for event cards, including image size handling and layout improvements
* Add some sort of hover and/or click handlers to event map markers
