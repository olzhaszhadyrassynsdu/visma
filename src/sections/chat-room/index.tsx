import { FC, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "@/firebase-config";

export const Chat: FC = (room) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room.room", "==", room.room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      const messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser?.displayName,
      room,
    });

    setNewMessage(" ");
  };

  return (
    <div className="p-8">
      <p className="text-4xl mb-8 text-center font-bold bg-blue-500">
        Welcome to: {room.room.toUpperCase()}
      </p>
      <div className="mb-20">
        {messages.map((message) => (
          <div className=" mb-2">
            <span className="text-xl font-bold mr-4">
              {message.user.toUpperCase()}:
            </span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-[#eaeaea] p-2 w-[400px]"
          placeholder="Type your message here..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="ml-8 p-2 rounded-xl bg-gray-500">
          Send
        </button>
      </form>
    </div>
  );
};
