import React, { Component } from "react";
import Event from "./Event";
import { WarningAlert } from "./Alert";
class EventList extends Component {
  state = {
    infoText: "",
  };

  closeAlert = () => {
    this.setState({
      infoText: "",
    });
  };

  checkConnection = () => {
    if (!navigator.onLine) {
      this.setState({
        infoText:
          "No Internet Connection. Viewing events offline. Connect to the internet for updated event list.",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };

  componentDidMount() {
    this.checkConnection();
  }

  render() {
    const { events } = this.props;
    return (
      <div>
        <WarningAlert text={this.state.infoText} />
        <ul className="EventList">
          {events.map((event) => (
            <li key={event.id}>
              <Event event={event} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EventList;
