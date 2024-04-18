import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar.tsx";
import SideBarItem from "../components/sidebar/SideBarItem.tsx";
import { get_device_sensors, Sensor } from "../data/devices.tsx";
import TableNode from "../components/nodes/TableNode.tsx";
import NodeList from "../components/nodes/NodeList.tsx";

function TrackerInspect() {
  const url_params = useParams();
  const id = url_params.id ? url_params.id : "#";

  const [sensorData, setSensorData] = useState<Sensor[]>([]);

  useEffect(() => {
    async function fetch_data() {
      setSensorData(await get_device_sensors(id));
    }
    fetch_data();
  }, [id]);

  const side_bar_items = sensorData.map((item) => {
    return (
      <SideBarItem
        title={item.name}
        subtitle={"Subtitle"}
        note={item.data_type}
        href={`/tracker/${id}`}
      />
    );
  });

  const elements = sensorData.map((item) => {
    return (
      <TableNode
        topBar={["Value", "Type"]}
        grid={[
          ["31", "2314"],
          ["31", "2314"],
          ["31", "2314"],
        ]}
        toIndex={false}
      />
    );
  });

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "78vh" }}>
      <div style={{ width: "25%", height: "100%", overflowY: "auto" }}>
        <SideBar elements={side_bar_items} />
      </div>
      <div style={{ width: "75%", height: "100%", overflowY: "auto" }}>
        <NodeList nodes={elements} />
      </div>
    </div>
  );
}

export default TrackerInspect;
