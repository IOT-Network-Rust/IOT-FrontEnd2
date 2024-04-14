import React from "react";

function Welcome() {
  return (
    <>
      <header className="bg-dark py-5" style={{height: "80vh"}}>
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Welcome Home
                </h1>
                <p className="lead text-white-50 mb-4">
                  Enjoy the freedom of tracking your devices from anywhere
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a
                    className="btn btn-primary btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    Get Started
                  </a>
                  <a className="btn btn-outline-light btn-lg px-4" href="#!">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Welcome;
