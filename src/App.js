import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import useFetch from "./customHooks/fetchHook";

function App() {
  const { data, extractDataFromApi } = useFetch();
  const changefetchUrl = (url) => {
    extractDataFromApi(
      "https://jsonplaceholder.typicode.com/todos/",
      { key1: "val1", key2: "val2" },

      "POST"
    );
  };

  data.length > 0 && console.log(data);
  return (
    <div className="App">
      <button onClick={changefetchUrl}>Fetch Products</button>
      <p>Check console for results</p>
    </div>
  );
}

export default App;
