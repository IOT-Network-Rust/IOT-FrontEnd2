import React from "react";
import Node from "./Node.tsx";

interface Props {
  title: string;
  subtitle: string;
  note: string;
  href: string;
}

/*
Represents a quick overview of data and an link to more
complicated data
*/
function OverviewNode(props: Props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const note = props.note;
  const href = props.href;

  return (
    <Node
      node={
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <div>
              <h5>{subtitle}</h5>
              <h4>{title}</h4>
            </div>
            <div>
              <h6>{note}</h6>
            </div>
          </div>

          <hr className="border"/>
          <h5><a href={href}>Inspect</a></h5>
        </div>
      }
    />
  );
}

export default OverviewNode;
