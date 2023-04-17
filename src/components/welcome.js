import reactImg from "../assets/images/logo512.png";
import firebaseImg from "../assets/images/ffd94de89eccc1f7b1e76c999f1adeec.png";
import GoogleSignIn from "./googleSignIn";
import styles from "./welcome.module.scss";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h1>Welcome to React Chat with Frirebase.</h1>
      <div className={styles.logos}>
        <img className={styles.react} src={reactImg} alt="React logo" />
        <img
          className={styles.firebase}
          src={firebaseImg}
          alt="Firebase logo"
        />
      </div>
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <GoogleSignIn />
    </div>
  );
};

export default Welcome;
