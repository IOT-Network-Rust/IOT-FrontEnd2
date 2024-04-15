import React from "react";

function Credits() {
  return (
    <>
      <header className="bg-dark py-5" style={{height: "35vh"}}>
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Our Contributors
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section style={{background: "rgb(198, 198, 198)", height: "28vh", padding: "10%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div
          className="container px-5"
          style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}
        >
          <h2>The Project</h2>
          <div style={{textAlign: "center", width: "70%"}}>
            <p>
              We created this project to enable people to safely analyze and
              administrate the many smart devices in your home. We are ever so
              dependant on the web as of late and it is a responsibility of ours
              to properly manage our devices to ensure security and efficiency.
            </p>
          </div>
        </div>
      </section>
      <section className="py-5 border-bottom" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-collection"></i>
              </div>
              <h2 className="h4 fw-bolder">Liam Israel</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a className="text-decoration-none" href="#!">
                Call to action
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-building"></i>
              </div>
              <h2 className="h4 fw-bolder">Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a className="text-decoration-none" href="#!">
                Call to action
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="col-lg-4">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-toggles2"></i>
              </div>
              <h2 className="h4 fw-bolder">Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a className="text-decoration-none" href="#!">
                Call to action
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Credits;
