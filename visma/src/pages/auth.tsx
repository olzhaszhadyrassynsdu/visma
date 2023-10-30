import { FC, useState, useRef } from "react";
import { auth, provider } from "@/firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { Chat } from "@/sections/chat-room";
import { signOut } from "firebase/auth";
const cookies = new Cookies();

export const Auth: FC = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <section>
        <p>Sign in with Google to continue</p>
        <button
          className="p-2 bg-green-500 rounded-xl"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      </section>
    );
  }

  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="pl-4">
          <label className="block">Enter Room Name:</label>
          <input ref={roomInputRef} className="block bg-gray-500 mt-4 p-4" />
          <button
            onClick={() => setRoom(roomInputRef.current.value)}
            className="mt-4 p-4 bg-[#eaeaea]"
          >
            Enter Chat
          </button>
        </div>
      )}

      <div className="ml-4 mt-8">
        <button
          onClick={signUserOut}
          className="p-4 bg-blue-500 font-bold rounded-xl"
        >
          Sign Out
        </button>
      </div>
    </>
  );
};
