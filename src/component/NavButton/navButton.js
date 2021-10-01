import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "../../container/SideLeft.css";

const NavButton = (props) => {
  const { text, icon, to } = props;

  return (
    <li className="nav_group">
      <NavLink to={to} className="nav_link">
        <img className="nav-icon" src={icon} />
        <span>{text}</span>
      </NavLink>
    </li>
  );
};

NavButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  handleNav: PropTypes.func,
};

export default NavButton;
