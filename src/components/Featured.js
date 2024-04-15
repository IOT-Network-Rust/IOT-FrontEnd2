import React from "react";

function Featured() {
  return (
    <>
      <section className="py-5 border-bottom" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-collection"></i>
              </div>
              <h2 className="h4 fw-bolder">Easy To Use</h2>
              <p>
                This software is free and easy to use. We employ techniques to
                simplify the process of managing your devices.
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
              <h2 className="h4 fw-bolder">Customizable</h2>
              <p>
                Users can customize their setup as they wish. Nodes can be
                created when needed to show the correct information about a
                product.
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
              <h2 className="h4 fw-bolder">Safe</h2>
              <p>
                This network is yours, you choose what to do with it and how to
                secure it. You have the ability to place this network solely
                locally ensuring safety from any outside parties.
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

export default Featured;
