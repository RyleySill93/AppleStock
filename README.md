# Apple Tracker

![apple](/docs/apple.png)

Apple Tracker is a simple React/Redux app built for a coding challenge.
The app uses the Yahoo Finance API to gather trading details on Apple
stock and displays details about the stock in a chart and table format.

## Structure

* `Application` - Responsible for making a request to the Yahoo Finance API,
rendering a spinner while waiting for the response from that API, and rendering
the two widgets, `Chart` and `Table` when the data has been received. Both the
chart and table can be moved around the page via clicking and dragging
through the usage of [React Grid Layout](https://github.com/STRML/react-grid-layout).
* `Chart` - Renders a chart with Apple's (adjusted closing) stock price on the y axis and
the corresponding date on the x axis. This component relies on [Highcharts](https://github.com/highcharts/highcharts) to create and
animate the chart.
* `Table` - Renders a table with Apple's stock price in one column and the
corresponding date in the other. Relies on [React Table](https://github.com/tannerlinsley/react-table).

## Running the Apple Tracker Locally

* `git clone https://github.com/RyleySill93/AppleStock.git`
* `cd AppleStock`
* `npm install`
* `npm start`
* Navigate to "http://localhost:3000/" in your browser
