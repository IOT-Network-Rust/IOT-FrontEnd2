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
    <div
      className="d-flex flex-column align-items-stretch flex-shrink-0 bgPrimary"
      style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
    >
      <a
        href="/"
        className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom bgTextBox"
      >
        <svg className="bi me-2" width="30" height="24"></svg>
        <span className="fs-5 fw-semibold">Your Devices</span>
      </a>

      <div className="list-unstyled list-group list-group-flush border-bottom scrollarea">
        {wrapped_elements}
      </div>
    </div>
  );
}

export default SideBar;
