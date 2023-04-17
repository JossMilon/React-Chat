//Getting all documents with Firebase messages collection
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Message from "./message";

const MessagesList = ({ test, setTest }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const request = query(
      collection(db, "messages"),
      orderBy("time"),
      limit(100)
    );
    const getAllMessages = () => {
      onSnapshot(request, (QuerySnapshot) => {
        let allMessages = [];
        QuerySnapshot.forEach((doc) => {
          allMessages.push(doc.data());
        });
        setData(allMessages);
      });
    };
    getAllMessages();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <Message
          name={item.name}
          message={item.textMsg}
          photo={item.photo}
          key={item.uid}
        />
      ))}
    </div>
  );
};

export default MessagesList;
