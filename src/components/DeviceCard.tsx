import React from "react";

interface Props {
  name: string;
  id: string;
  subtitle: string;
}

function DeviceCard(props: Props) {
    let name = props.name
    let id = props.id
    let subtitle = props.subtitle

  return (
    <>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">{name}</strong>
          <small className="text-muted">{id}</small>
        </div>
        <div className="col-10 mb-1 small">{subtitle}</div>
      </a>
    </>
  );
}

export default DeviceCard;
