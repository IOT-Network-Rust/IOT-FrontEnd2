import React from "react";

function DeviceTracker() {
    const url_params = useParams();
    const id = url_params.id;

    const API_Inputs = `http://127.0.0.1:9000/api/devices/${id}/inputs`;
    const API_Sensors = `http://127.0.0.1:9000/api/devices/${id}/sensors`;
}

export default DeviceTracker;
