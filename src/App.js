import "./App.css";
import Aboutme from "./components/aboutme/Aboutme";
import Sidenav from "./components/sidenav/Sidenav";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Aboutme />
    </div>
  );
}

export default App;
