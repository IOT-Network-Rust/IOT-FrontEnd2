import React from "react";

interface Props {
  elements: React.JSX.Element[];
}
function SideBar(props: Props) {
  const elements = props.elements;

  const wrapped_elements = elements.map((element, index) => {
    return <li key={index}>{element}</li>;
  });

  return (
    <div>
      <div>
        <h3>Side Bar</h3>
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          listStyleType: "none",
        }}
      >
        {wrapped_elements}
      </ul>
    </div>
  );
}

export default SideBar;
