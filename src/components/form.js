import styles from "./form.module.scss";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

const Form = () => {
  const [message, setMessage] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Please add a message");
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      uid,
      textMsg: message,
      name: displayName,
      photo: photoURL,
      time: serverTimestamp(),
    });
    setMessage("");
  };
  return (
    <form className={styles.form} onSubmit={(e) => sendMessage(e)}>
      <input
        className={styles.textField}
        type="text"
        placeholder="Type your message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      />
      <input className={styles.submit} type="submit" value="Send" />
    </form>
  );
};

export default Form;
