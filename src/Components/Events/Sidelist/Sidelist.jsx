import React from "react";
import "./Sidelist.scss";
const Sidelist = props => {
	const eventSort=props.events.map((event,index)=>{
		return [event.event,index,event.pdf]
	})
	// console.log(eventSort)
  const eventList = eventSort.sort().map((event, index) => {
	  
    return (
      <li
        key={event[1]}
        className={`sidebarmenu__links__link ${
          event[1]===props.index ? "active" : ""
        }`}
        onClick={() => {
          return props.updateEvent(event[0],event[1],event[2]);
        }}
      >
        <a>{event[0]}</a>
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
