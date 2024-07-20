import "./App.css";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <h1>CRUD Applications</h1>
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;
