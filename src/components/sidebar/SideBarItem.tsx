import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  note: string;
  href: string;
}

function SideBarItem(props: Props) {
  return (
    <Link
      to={props.href}
      className="list-group-item list-group-item-action py-3 bgTextBoxSmall"
    >
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">{props.title}</strong>
        <small className="text-muted">{props.subtitle}</small>
      </div>
      <div className="col-10 mb-1 small">{props.note}</div>
    </Link>
  );
}

export default SideBarItem;
