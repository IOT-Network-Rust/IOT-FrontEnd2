import React from "react";

interface Props {
  nodes: React.JSX.Element[];
}

/*
Represents a list of node objects so it can be 
better organized
*/
function NodeList(props: Props) {
  const nodes = props.nodes;

  return <>{nodes}</>;
}

export default NodeList;
