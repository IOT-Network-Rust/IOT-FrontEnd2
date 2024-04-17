interface Device {
  name: string;
  id: string;
}

async function get_devices(): Promise<Device[]> {
  // Link to API
  const API_Devices = "http://127.0.0.1:9000/api/devices";

  return fetch(API_Devices)
    .then((response) => {
      if (!response.ok) {
        // Check success
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse response
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return [];
    });
}

interface Sensor {
  name: string;
  data_type: string;
}

async function get_device_sensors(id: string): Promise<Sensor[]> {
  const API_Sensors = `http://127.0.0.1:9000/api/devices/${id}/sensors`;
  return fetch(API_Sensors)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return [];
    });
}

interface SensorData {
    value: string;
    time: string;
}

async function get_sensor_data(id: string, sensor_name:string): Promise<SensorData[]> {
    const API_Sensors = `http://127.0.0.1:9000/api/devices/${id}/sensors/${sensor_name}/data`;
    return fetch(API_Sensors)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        return [];
      });
  }

export {
  get_devices,
  get_device_sensors,
  get_sensor_data,
  Device,
  Sensor,
  SensorData
}