import styles from "./Header.module.css";

const Header = () => {
    return (
      <header className={styles.header}>
        <img src="https://www.offidocs.com/images/logobirdgreen.jpg" alt="logo" />
      </header>
    );
}

export default Header;