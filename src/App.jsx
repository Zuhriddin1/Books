import "./App.css";
import Cards from "./components/Book/Cards";
import data from "./data/data.json";
function App() {
  return (
    <>
      {data.map((v, i) => {
        return <Cards data={v} key={i}></Cards>;
      })}
    </>
  );
}
export default App;
