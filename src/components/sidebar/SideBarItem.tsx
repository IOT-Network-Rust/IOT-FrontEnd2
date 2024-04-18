import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  note: string;
  href: string;
}

function SideBarItem(props: Props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const note = props.note;
  const href = props.href;

  return (
    <Link
      to={href}
      className="list-group-item list-group-item-action py-3 bgTextBoxSmall p-3"
    >
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">{title}</strong>
        <small className="text-muted">{subtitle}</small>
      </div>
      <div className="col-10 mb-1 small">{note}</div>
    </Link>
  );
}

export default SideBarItem;
