import React, { useEffect, useState } from "react";
import { Create } from "@mui/icons-material";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import "./Feed.css";
import { db } from "../../firebase";
import {
  addDoc,
  serverTimestamp,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const qry = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(qry, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    const payload = {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: serverTimestamp(),
    };
    await addDoc(collection(db, "posts"), payload);
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form onSubmit={sendPost}>
            <input
              type="text"
              name=""
              id=""
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="photo" color="skyblue" />
          <InputOption Icon={SubscriptionsIcon} title="video" color="orange" />
          <InputOption Icon={EventNoteIcon} title="event" color="skyblue" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="green"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, name, description, message }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
