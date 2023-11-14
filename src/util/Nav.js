import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <h3 className={styles.header}>ihatethesyntax</h3>
      <ul className={styles.icons}>
        <li>
          <img alt="github icon" src="./images/icon-github.svg" />
        </li>
        <li>
          <img alt="linkedin icon" src="./images/icon-linkedin.svg" />
        </li>
        <li>
          <img alt="twitter icon" src="./images/icon-twitter.svg" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
