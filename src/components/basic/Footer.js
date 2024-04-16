import React from "react"

function Footer() {
    return (<footer className="bg-dark py-4 mt-auto" style={{height: '10vh', display: "flex", alignItems: "center", justifyContent: "center"}}>
    <div className="container px-5">
      <div
        className="row align-items-center justify-content-between flex-column flex-sm-row"
      >
        <div className="col-auto">
          <div className="small m-0 text-white">
            Copyright © Rust IOT Network 2024
          </div>
        </div>
        <div className="col-auto">
          <a className="link-light small" href="#!">Privacy</a>
          <span className="text-white mx-1">·</span>
          <a className="link-light small" href="#!">Terms</a>
          <span className="text-white mx-1">·</span>
          <a className="link-light small" href="/tracker">Credits</a>
        </div>
      </div>
    </div>
  </footer>)
}

export default Footer;