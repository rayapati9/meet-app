import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    eventCount: 5,
  };

  handleEventInputChanged = (event) => {
    const eventCount = event.target.value;
    if (eventCount < 1) {
      this.setState({
        eventCount: "",
        errorText: `select number between 1 and 5`,
      });
    } else if (eventCount > 5) {
      return this.setState({
        eventCount: "",
        errorText: `select number between 1 and 5`,
      });
    } else {
      this.setState({
        eventCount,
        errorText: "",
      });
      this.props.updateCount(eventCount);
    }
  };

  render() {
    return (
      <div className="event-number">
        <ErrorAlert text={this.state.errorText} />
        <label htmlFor="numberOfEvent"></label>
        <input
          type="number"
          name="numberOfEvent"
          className="event-number-input"
          placeholder="Enter Number of Events"
          value={this.state.eventCount}
          onChange={this.handleEventInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
