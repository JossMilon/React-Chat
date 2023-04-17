import GoogleSignInImg from "../assets/images/btn_google_signin_dark_pressed_web.png";
import styles from "./googleSignIn.module.scss";
import { UserAuth } from "../context";

const GoogleSignIn = () => {
  const { googleSignIn, googleSignOut, user } = UserAuth();
  return !user ? (
    <div className={styles.button} onClick={googleSignIn}>
      <img src={GoogleSignInImg} alt="Google Sign In" />
    </div>
  ) : (
    <div className={styles.button} onClick={googleSignOut}>
      Log out
    </div>
  );
};

export default GoogleSignIn;
