import "./App.css";
import SideLeft from "./container/SideLeft";
import { BrowserRouter as Router } from "react-router-dom";
import SideHeader from "./container/SideHeader";
import LogOut from "./container/LogOut";
import DataPicker from "./component/DataPicker/DataPicker";

function App() {
  return (
    <div className="main">
      <div className="sidebar">
        <Router>
          <SideHeader />
          <SideLeft />
          <LogOut />
        </Router>
      </div>
      <div className="appointment">Appointment</div>

      <div className="calender">
        <DataPicker />
      </div>
    </div>
  );
}

export default App;
