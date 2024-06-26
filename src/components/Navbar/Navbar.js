import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/profile" className={(navData) => (navData.isActive ? styles.active : styles.item)}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" className={(navData) => (navData.isActive ? styles.active : styles.item)}>
            Dialogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={(navData) => (navData.isActive ? styles.active : styles.item)}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" className={(navData) => (navData.isActive ? styles.active : styles.item)}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={(navData) => (navData.isActive ? styles.active : styles.item)}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
