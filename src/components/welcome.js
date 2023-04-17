import reactImg from "../assets/images/logo512.png";
import GoogleSignIn from "./googleSignIn";
import styles from "./welcome.module.scss";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h1>Welcome to React Chat with Frirebase.</h1>
      <img className={styles.logo} src={reactImg} alt="React logo" />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <GoogleSignIn />
    </div>
  );
};

export default Welcome;
