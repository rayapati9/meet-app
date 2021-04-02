import React, { Component } from "react";

class Event extends Component {
  state = {
    showhideDetails: false,
  };

  handleShowHideButton = () => {
    if (this.state.showhideDetails === true) {
      this.setState({ showhideDetails: false });
    } else {
      this.setState({ showhideDetails: true });
    }
  };
  render() {
    const { event } = this.props;
    return (
      <div className="event-container">
        <h1>{event.summary}</h1>
        <p>{event.start.dateTime}</p>
        <p className="locations">{event.location}</p>

        {this.state.showhideDetails && (
          <div className="event-details">
            <h2>About Event: </h2>
            <a href={event.htmlLink}>See Deatils on Google Calendar</a>
            <p>{event.description}</p>
          </div>
        )}

        <button
          className="show-hide-btn"
          onClick={() => this.handleShowHideButton()}
        >
          {!this.state.showhideDetails ? "show details" : "hide deatils"}
        </button>
      </div>
    );
  }
}
export default Event;