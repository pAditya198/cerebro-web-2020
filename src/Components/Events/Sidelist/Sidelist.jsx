import React from "react";
import "./Sidelist.scss";
const Sidelist = props => {
  // console.log(props.events.indexof(props.event));
  const eventList = props.events.map((event, index) => {
    return (
      <li
        key={index}
        className="sidebarmenu__links__link"
        onClick={() => {
          return props.updateEvent(index)
        }
        }
      >
        <a>{event.Title}</a>
      </li>
    );
  });
  return (
    <div className="sidebarmenu">
      <ul className="sidebarmenu__links">{eventList}</ul>
    </div>
  );
};

export default Sidelist;