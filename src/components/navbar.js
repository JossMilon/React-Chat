import GoogleSignIn from "./googleSignIn";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>REACT CHAT</div>
      <GoogleSignIn />
    </nav>
  );
};

export default Navbar;
