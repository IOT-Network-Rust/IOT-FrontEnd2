import React, { useState, useEffect } from "react";
import DeviceCardList from "../components/DeviceCardList.tsx";
import NodeListUI from "../components/node/NodeListUI.tsx";
import { useParams } from "react-router-dom";
import { get_devices, Device } from "../data/devices.tsx";

function Tracker() {
  // Define state to store device data
  const [deviceData, setDeviceData] = useState<Device[]>([]);

  // Fetching data from API
  useEffect(() => {
    async function fetch_data() {
      setDeviceData(await get_devices());
    };
    fetch_data();
  }, []);

  const itemNames = deviceData.map((item) => item.name.replace("_", " "));
  const itemIds = deviceData.map((item) => item.id);
  const itemDescriptions = deviceData.map((item) => "");

  const params = useParams();
  let id = params.id ? params.id : itemIds[0];

  return (
    <>
      <div style={{ height: "81vh" }} className="bgSecondary">
        {/* Pass device data as props to DeviceCardList */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            height: "100%",
          }}
        >
          <div style={{ width: "30vw", height: "100%" }} className="bgPrimary">
            <DeviceCardList
              item_names={itemNames}
              item_ids={itemIds}
              item_subtitles={itemDescriptions}
            />
          </div>

          <div style={{ width: "70vw", height: "100%" }}>
            <NodeListUI device_id={id}></NodeListUI>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracker;
