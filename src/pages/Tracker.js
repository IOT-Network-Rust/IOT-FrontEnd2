import React, { useState, useEffect } from "react";
import DeviceCardList from "../components/DeviceCardList.tsx";
import NodeListUI from "../components/node/NodeListUI.tsx";
import { useParams } from "react-router-dom";

function Tracker() {
  // Define state to store device data
  const [deviceData, setDeviceData] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch("http://127.0.0.1:9000/api/devices")
      .then((response) => {
        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the JSON response
        return response.json();
      })
      .then((data) => {
        // Update state with the fetched data
        setDeviceData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const itemNames = deviceData.map((item) => item.name.replace("_" ," "));
  const itemIds = deviceData.map((item) => item.id);
  const itemDescriptions = deviceData.map((item) => "");

  const params = useParams()
  let id = params.id;
  if (id === undefined) {
    id = itemIds[0]
  }
  return (
    <>
      <div style={{ height: "81vh" }}  className="bgSecondary">
        {/* Pass device data as props to DeviceCardList */}
        <div style={{display: "flex", flexDirection: "row", width: "100vw", height:"100%"}}>

          <div style={{width: "30vw", height: "100%"}} className="bgPrimary">
            <DeviceCardList item_names={itemNames} item_ids={itemIds} item_subtitles={itemDescriptions} />
          </div>

          <div style={{width: "70vw", height: "100%"}}>
            <NodeListUI device_id={id}></NodeListUI>
          </div>

        </div>
      </div>
    </>
  );
}

export default Tracker;
