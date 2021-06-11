import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { eventsResponseSuccess } from './tests/events-response-success.js'
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders event data", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(eventsResponseSuccess)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<App/>, container);
  });

  expect(container.textContent).toContain(eventsResponseSuccess.data[0].title);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
