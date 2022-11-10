import "./App.css";
import Aboutme from "./components/aboutme/Aboutme";
import Contact from "./components/contact/Contact";
import Sidenav from "./components/sidenav/Sidenav";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Aboutme />
      <Contact />
    </div>
  );
}

export default App;
