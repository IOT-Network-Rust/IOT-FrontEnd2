import React from "react";

interface Props {
  node: React.JSX.Element;
}

function Node(props: Props) {
  const node = props.node;

  return <div>{node}</div>;
}

export default Node;
