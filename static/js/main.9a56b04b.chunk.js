(this["webpackJsonpmobilize-feed"]=this["webpackJsonpmobilize-feed"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(3),a=n.n(i),s=(n(17),n(9)),o=n(6),l=(n(18),n(11)),u=n(1);function j(e){var t=e.props,n=t.featured_image_url,c=t.title,r=t.browser_url,i=t.timeslots,a=t.location;return Object(u.jsx)("div",{className:"event-card",children:Object(u.jsxs)("div",{className:"inner",children:[Object(u.jsx)("div",{className:"image-container",children:Object(u.jsx)("img",{src:n,alt:c})}),Object(u.jsxs)("div",{className:"details",children:[Object(u.jsx)("span",{children:O(i)}),Object(u.jsx)("h3",{children:c}),Object(u.jsx)("p",{children:d(a)}),Object(u.jsx)("a",{href:r,children:"Details"})]})]})})}function d(e){if(!e)return null;var t=e.venue,n=e.address_lines,c=e.locality,r=e.region;return[t].concat(Object(l.a)(n),[c,r]).filter((function(e){return e&&""!==e})).join(", ")}function O(e){var t=new Date(1e3*e[0].start_date),n=e.length>1?" + ".concat(e.length-1," other times"):"";return t.toLocaleTimeString("en-US",{weekday:"short",month:"short",day:"numeric",timeZoneName:"short",hour:"numeric",minute:"2-digit"})+n}var b=n(12),h=function(e){e.text;return Object(u.jsx)("div",{className:"event-map-marker"})};function v(e){var t=e.props.events,n={center:{lat:39.8097343,lng:-98.5556199},zoom:4};if(0===t.length)return null;var c=t.filter((function(e){return e.location&&e.location.location}));return Object(u.jsx)("div",{className:"event-map-container",children:Object(u.jsx)(b.a,{bootstrapURLKeys:{key:"AIzaSyDoRY1XMAC6JJbg7ZhLqkPXsQvywrevXcA"},defaultCenter:n.center,defaultZoom:n.zoom,children:c.map((function(e){return Object(u.jsx)(h,{lat:e.location.location.latitude,lng:e.location.location.longitude},e.id)}))})})}var m=["CANVASS","PHONE_BANK","TEXT_BANK","MEETING","COMMUNITY","FUNDRAISER","MEET_GREET","HOUSE_PARTY","VOTER_REG","TRAINING","FRIEND_TO_FRIEND_OUTREACH","DEBATE_WATCH_PARTY","ADVOCACY_CALL","RALLY","TOWN_HALL","OFFICE_OPENING","BARNSTORM","SOLIDARITY_EVENT","COMMUNITY_CANVASS","SIGNATURE_GATHERING","CARPOOL","WORKSHOP","PETITION","AUTOMATED_PHONE_BANK","LETTER_WRITING","LITERATURE_DROP_OFF","VISIBILITY_EVENT","OTHER"];var f=function(){var e={timeslot_start:"gte_now"},t=Object(c.useState)(null),n=Object(o.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)(!1),l=Object(o.a)(a,2),d=l[0],O=l[1],b=Object(c.useState)([]),h=Object(o.a)(b,2),f=h[0],E=h[1],T=Object(c.useState)(),N=Object(o.a)(T,2),x=N[0],A=N[1];function _(e){var t=e.nextPage,n=e.queryParams,c=t||"https://api.mobilize.us/v1/events?"+new URLSearchParams(n).toString();fetch(c).then((function(e){return e.json()})).then((function(e){O(!0),E(e.data),A(e.next)}),(function(e){O(!0),i("Failed to load")}))}return Object(c.useEffect)((function(){_({queryParams:e})}),[]),r?Object(u.jsxs)("div",{children:["Error: ",r]}):d?0===f.length?Object(u.jsx)("div",{children:"No events matched this query..."}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Mobilize Feed"}),Object(u.jsxs)("div",{className:"event-filters",children:[Object(u.jsx)("label",{htmlFor:"event-type-select",children:"Filter by type:"}),Object(u.jsx)("select",{id:"event-type-select",onChange:function(t){return _({queryParams:Object(s.a)(Object(s.a)({},e),{},{event_types:t.target.value})})},children:m.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))})]}),Object(u.jsx)("div",{children:f.map((function(e){return Object(u.jsx)(j,{props:e},e.id)}))}),Object(u.jsx)("button",{onClick:function(){return _({nextPage:x})},children:"Next Page"}),Object(u.jsx)(v,{props:{events:f}})]}):Object(u.jsx)("div",{children:"Loading..."})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),E()}},[[22,1,2]]]);
//# sourceMappingURL=main.9a56b04b.chunk.js.map