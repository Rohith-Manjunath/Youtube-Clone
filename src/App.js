import "./App.css";
import Navbar from "./components/Navbar";
import Videos from "./components/Videos";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Videos></Videos>
      <Sidebar className="sidebar-component" />
    </div>
  );
}

export default App;
