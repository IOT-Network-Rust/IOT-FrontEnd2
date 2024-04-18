import React, { useEffect, useState } from "react";
import Node from "./Node";
import FetchEntries, { Entry } from "../../data/FetchEntries";
import { Line } from "react-chartjs-2";

interface Props {
  title: string;
  url: string;
}

function GraphNode(props: Props) {
  const title = props.title;
  const url = props.url;

  const [graphData, setGraphData] = useState<Entry[]>([]);

  useEffect(() => {
    async function fetch_data() {
      setGraphData(await FetchEntries(url));
    }
    fetch_data();
  }, []);

  const values: number[] = graphData.map((item) => {return item.value});
  const labels: string[] = graphData.map((item) => {return item.time})

  const data = {
    labels: labels,
    datasets: [
        {
          label: 'Popularity of colours',
          data: values,
          borderWidth: 1,
        }
    ]
  }

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );

}

export default GraphNode;
