import React from "react";
import DeviceCard from "./DeviceCard.tsx";

interface Props {
  item_names: string[];
  item_ids: string[];
  item_subtitles: string[];
}

function DeviceCardList(props: Props) {
  let names = props.item_names;
  let ids = props.item_ids;
  let subtitles = props.item_subtitles;

  let elements:React.JSX.Element[] = []
  for (let i = 0; i < names.length; i++) {
    elements.push(<li key={i}><DeviceCard name={names[i]} id={ids[i]} subtitle={subtitles[i]}/></li>)
  }

  return (<>
  <div
    className="d-flex flex-column align-items-stretch flex-shrink-0 bg-light"
    style={{width: "20%", maxHeight: "76.5vh", overflowY: "auto", overflowX: "hidden"}}
  >
    <a
      href="/"
      className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
    >
      <svg className="bi me-2" width="30" height="24">
      </svg>
      <span className="fs-5 fw-semibold">Your Devices</span>
    </a>
    <div className="list-group list-group-flush border-bottom scrollarea">
      {elements}
    </div>
  </div>

</>);
}

export default DeviceCardList;
