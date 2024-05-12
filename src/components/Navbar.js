import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#s">Profile</a>
        </li>
        <li>
          <a href="#s">Messages</a>
        </li>
        <li>
          <a href="#s">News</a>
        </li>
        <li>
          <a href="#s">Music</a>
        </li>
        <li>
          <a href="#s">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
