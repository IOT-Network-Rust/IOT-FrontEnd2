import React, { useState, useEffect } from "react";
import NodeUI from "./NodeUI.tsx";

interface Props {
  device_id: string;
}

function get_device_data(name: string): Promise<string[][]> {
  const apiUrlInputs = `http://127.0.0.1:9000/api/devices/${name}/inputs`;
  const apiUrlSensors = `http://127.0.0.1:9000/api/devices/${name}/sensors`;

  return fetch(apiUrlSensors)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const Sensors: string[][] = data.map((item: any) => [item.name, item.data_type]);
      return Sensors;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return [];
    });
}

function NodeListUI(props: Props) {
  const [sensor_names, setSensorNames] = useState<string[][]>([]);

  useEffect(() => {
    get_device_data(props.device_id).then((data) => {
      setSensorNames(data);
    });
  }, [props.device_id]);

  return (
    <>
      <ul style={{listStyleType: "none"}}>
        {sensor_names.map((item, index) => (
          <li key={index}>
            <NodeUI name={item[0]} type={item[1]}></NodeUI>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NodeListUI;
