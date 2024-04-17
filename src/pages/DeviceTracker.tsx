import React, { useEffect, useState } from "react";
import NodeList from "../components/nodes/NodeList.tsx";
import OverviewNode from "../components/nodes/OverviewNode.tsx";
import { Sensor, get_device_sensors } from "../data/devices.tsx";
import { useParams } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar.tsx";
import SideBarItem from "../components/sidebar/SideBarItem.tsx";

function DeviceTracker() {
  const url_params = useParams();
  const id = url_params.id ? url_params.id : "#";

  const [sensorData, setSensorData] = useState<Sensor[]>([]);

  useEffect(() => {
    async function fetch_data() {
      setSensorData(await get_device_sensors(id));
    }
    fetch_data();
  }, [id]);

  const elements = sensorData.map((item) => {
    return (
      <OverviewNode
        title={item.name}
        subtitle={item.data_type}
        note={"This is a note"}
      />
    );
  });

  const side_bar_items = sensorData.map((item) => {
    return <SideBarItem title={item.name} subtitle={"Subtitle"} note={item.data_type} href={""}/>
  })
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <div style={{ width: "25%", height: "100%" }}>
        <SideBar elements={side_bar_items} />
      </div>
      <div style={{ width: "75%", height: "100%" }}>
        <NodeList nodes={elements} />
      </div>
    </div>
  );
}

export default DeviceTracker;
