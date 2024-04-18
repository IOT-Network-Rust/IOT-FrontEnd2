interface Entry {
  value: number;
  time: string;
}

function FetchEntries(url: string): Promise<Entry[]> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
        return data.map((data) => {return data})
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return [];
    });
}

export default FetchEntries;
export { Entry };
