import React from "react";

interface Props {
  type: string;
  device_id: string;
}

function NodeUI(props:Props) {
  const type = props.type
  const device_id = props.device_id

  return (
    <>
      <div _ngcontent-klp-c220="" className="card text-white mb-4 bg-primary">
        <div _ngcontent-klp-c221="" className="card-body">
          <div
            _ngcontent-klp-c221=""
            className="d-flex justify-content-between align-items-center"
          >
            <div _ngcontent-klp-c221="" className="me-3">
              <div _ngcontent-klp-c221="" className="text-white-75 small">
                {type}
              </div>
              <div _ngcontent-klp-c221="" className="text-lg fw-bold">
                {"Some sort of data will go here that shows a snippet of what to expect"}
                $40,000
              </div>
            </div>
          </div>
        </div>
        <div
          _ngcontent-klp-c220=""
          className="card-footer d-flex align-items-center justify-content-between"
        >
          <a
            _ngcontent-klp-c220=""
            className="small text-white stretched-link"
            href="/dashboard"
          >
            Inspect
          </a>
          <div _ngcontent-klp-c220="" className="small text-white"></div>
        </div>
      </div>
    </>
  );
}

export default NodeUI;
