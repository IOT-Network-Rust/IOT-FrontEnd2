import React from "react";
import Node from "./Node";

interface Props {
  title: string;
  subtitle: string;
  note: string;
}

/*
Represents a quick overview of data and an link to more
complicated data
*/
function OverviewNode(props: Props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const note = props.note;

  return (
    <Node
      node={
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <h3>{title}</h3>
              <h2>{subtitle}</h2>
            </div>
            <div>
              <h3>{note}</h3>
            </div>
          </div>

          <br />
          <h4>Inspect</h4>
        </div>
      }
    />
  );
}

export default OverviewNode;
