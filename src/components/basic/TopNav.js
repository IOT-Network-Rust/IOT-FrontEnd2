import React from "react";

function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg bgNavBar" style={{height: "12vh"}}>
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          IOT Device Network
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{bsScrollHeight: "100px"}}
          >
            <li key={1} className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li key={2} className="nav-item">
              <a className="nav-link" href="#">
                Connect
              </a>
            </li>

            <li key={3} className="nav-item">
              <a className="nav-link" href="/tracker">
                Tracker
              </a>
            </li>

            <li key={4} className="nav-item">
              <a
                className="nav-link"
                aria-disabled="true"
                href="https://github.com/orgs/IOT-Network-Rust/repositories"
                target="_blank"
              >
                Project Source
              </a>
            </li>
            <li key={5} className="nav-item">
              <a className="nav-link" aria-disabled="true" href="/credits">
                Credits
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
