import React, { useEffect, useState } from "react";
import NodeList from "../components/nodes/NodeList.tsx";
import OverviewNode from "../components/nodes/OverviewNode.tsx";
import { Sensor, get_device_sensors, get_devices, Device } from "../data/devices.tsx";
import { useParams } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar.tsx";
import SideBarItem from "../components/sidebar/SideBarItem.tsx";

function DeviceTracker() {
  const url_params = useParams();
  const id = url_params.id ? url_params.id : "#";

  const [sensorData, setSensorData] = useState<Sensor[]>([]);
  const [devicesData, setDevicesData] = useState<Device[]>([]);

  useEffect(() => {
    async function fetch_data() {
      setDevicesData(await get_devices());
    }
    fetch_data();
  }, []);

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
        href={`/tracker/${id}/inspect`}
      />
    );
  });

  const side_bar_items = devicesData.map((item) => {
    return <SideBarItem title={item.name} subtitle={"Subtitle"} note={item.id} href={`/tracker/${item.id}`}/>
  })
  return (
    <div style={{display: "flex", flexDirection: "row", height: "78vh"}}>
      <div style={{ width: "25%", height: "100%", overflowY: "auto"}}>
        <SideBar elements={side_bar_items} />
      </div>
      <div style={{ width: "75%", height: "100%", overflowY: "auto"}}>
        <NodeList nodes={elements} />
      </div>
    </div>
  );
}

export default DeviceTracker;
