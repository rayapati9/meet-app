import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import EventGenre from "./EventGenre";

class App extends Component {
  state = {
    events: [],
    locations: [],
  };
  eventCount = 5;
  searchLocation = "all";
  updateLocation = (location) => {
    let locationEvents;
    this.searchLocation = location;
    getEvents().then((events) => {
      if (this.searchLocation === "all") {
        locationEvents = events.slice(0, this.eventCount);
      } else {
        locationEvents = events
          .filter((event) => event.location === this.searchLocation)
          .slice(0, this.eventCount);
      }
      this.setState({
        events: locationEvents,
      });
    });
  };

  updateCount = (count) => {
    let locationEvents;
    this.eventCount = parseInt(count);
    getEvents().then((events) => {
      if (this.searchLocation === "all") {
        locationEvents = events.slice(0, this.eventCount);
      } else {
        locationEvents = events
          .filter((event) => event.location === this.searchLocation)
          .slice(0, this.eventCount);
      }
      this.setState({
        events: locationEvents,
      });
    });
  };
  updateEvents = (location, eventCount) => {
    let locationEvents;
    getEvents().then((events) => {
      if (location === "all") {
        locationEvents = events.slice(0, eventCount);
      } else {
        locationEvents = events
          .filter((event) => event.location === location)
          .slice(0, eventCount);
      }
      this.setState({
        events: locationEvents,
        eventCount,
      });
    });
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(" ").shift();
      return { city, number };
    });
    return data;
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.eventCount),
          locations: extractLocations(events),
        });
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch
          locations={this.state.locations}
          updateLocation={this.updateLocation}
        />
        <NumberOfEvents
          eventCount={this.eventCount}
          updateCount={this.updateCount}
        />
        <h4> Events in each city </h4>
        <div className="data-vis-wrapper">
          <EventGenre
            events={this.state.events}
            locations={this.state.locations}
          />
          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis
                type="number"
                dataKey="number"
                name="number of events"
                allowDecimals={false}
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}
export default App;
