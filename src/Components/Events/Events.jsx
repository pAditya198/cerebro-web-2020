import React, { Component } from "react";

import Header from "../Header/Header";
import Sidelist from "./Sidelist/Sidelist";
import Main from "./Main/Main";
import "./Events.scss";
import Circle from "./Circle/Circle";
class Events extends Component {
  componentWillMount() {
    window.scroll(0, 0)
  }
  constructor(props) {
    super(props);

    this.state = {
	  eventIndex:2,
      selectedEvent: "Big Tech Quiz",
      pdf:"https://github.com/cerebro-iiitv/cerebro-web-2020/files/4276026/Big.Tech.Quiz.pdf"
    };
  }
  updateEvent = (event,index,pdf) => {
    this.setState({
		eventIndex:index,
	  selectedEvent: event,
	  pdf:pdf
    });
  };

  render() {
    const { events, contacts } = this.props;
    return (
      <div>
        <Header />
        <div className="event">
          <div>
            <Circle index={this.state.eventIndex} />
          </div>
          <div>
            <Main
              events={events}
              index={this.state.eventIndex}
              title={this.state.selectedEvent}
              contacts={contacts}
              pdf={this.state.pdf}
            />
          </div>
          <div>
            <Sidelist
              events={events}
              updateEvent={this.updateEvent}
              index={this.state.eventIndex}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
