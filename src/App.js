import "./App.css";
import useFetch from "./customHooks/fetchHook";

function App() {
  const { data, extractDataFromApi } = useFetch();
  const changefetchUrl = (url) => {
    extractDataFromApi(
      "https://jsonplaceholder.typicode.com/todos/","",
      "GET"
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
