import styles from "./message.module.scss";

const Message = ({ name, message, photo }) => {
  return (
    <div className={styles.messageBox}>
      <img src={photo} alt={name + " profile picture"} />
      <div>
        <p className={styles.authorName}>{name}</p>
        <p className={styles.messageContent}>{message}</p>
      </div>
      <p></p>
    </div>
  );
};

export default Message;
