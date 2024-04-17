import React from "react";

interface Props {
  node: React.JSX.Element;
}

function Node(props: Props) {
  const node = props.node;

  return <div className="small bgTextBox p-3 border rounded text-light">{node}</div>;
}

export default Node;
