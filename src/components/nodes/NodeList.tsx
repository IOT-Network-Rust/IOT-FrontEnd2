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

  const wrapped_nodes = nodes.map((element, index) => {
    return <li key={index} style={{margin: "2%"}}>{element}</li>;
  });

  return <ul style={{listStyleType: "none"}}>{wrapped_nodes}</ul>
}

export default NodeList;
