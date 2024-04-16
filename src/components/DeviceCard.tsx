import React from "react";
import { Link } from 'react-router-dom';


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
      <Link to={`/tracker/${id}`} className="list-group-item list-group-item-action py-3 bgTextBoxSmall" >
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">{name}</strong>
          <small className="text-muted">{id}</small>
        </div>
        <div className="col-10 mb-1 small">{subtitle}</div>
      </Link>
    </>
  );
}

export default DeviceCard;
