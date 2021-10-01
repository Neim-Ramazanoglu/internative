import "./App.css";
import SideLeft from "./container/SideLeft";
import { BrowserRouter as Router } from "react-router-dom";
import SideHeader from "./container/SideHeader";
import LogOut from "./container/LogOut";

function App() {
  return (
    <Router>
      <SideHeader />
      <SideLeft />
      <LogOut />
    </Router>
  );
}

export default App;
