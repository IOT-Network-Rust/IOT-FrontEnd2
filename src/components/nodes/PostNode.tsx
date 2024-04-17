import React from "react";
import Node from "./Node";

interface Props {
  title: string;
  subtitle: string;
  post_addr: string;
}

/*
This node consists of a button where it will just send a empty request to 
the backend api to notify a device
 */
function PostNode(props: Props) {
  return <Node node={<></>}/>;
}

export default PostNode;
