import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars3.githubusercontent.com/u/64041038?s=400&u=75196d0f6df79c05732f67ae4e52a58d2add7ed5&v=4"
        message="Woooow Wokrs"
        timestamp="time"
        username="username"
        image="https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg"
      />
      <Post
        profilePic="https://avatars3.githubusercontent.com/u/64041038?s=400&u=75196d0f6df79c05732f67ae4e52a58d2add7ed5&v=4"
        message="Woooow Wokrs"
        timestamp="time"
        username="username"
        image=""
      />
    </div>
  );
}

export default Feed;
