import "./App.css";
import SideLeft from "./container/SideLeft";
import { BrowserRouter as Router } from "react-router-dom";
import SideHeader from "./container/SideHeader";
import LogOut from "./container/LogOut";
import UserInfo from "./component/UserInfo/UserInfo";
import DayPicker from "../src/component/DayPicker/DayPicker";
import RenderTable from "./component/Schedule/RenderTable";
import Datepicker from "./component/Schedule/DatePicker";
import Navbar from "./component/Schedule/Navbar";

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
      <div className="appointment">
        <Navbar />
        <Datepicker />
        <RenderTable />
      </div>

      <div className="calender">
        <UserInfo />
        <DayPicker />
      </div>
    </div>
  );
}

export default App;
