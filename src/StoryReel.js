import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const img =
  "https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/64041038?s=400&u=75196d0f6df79c05732f67ae4e52a58d2add7ed5&v=4"
        title="Reytar"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goon"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/64041038?s=400&u=75196d0f6df79c05732f67ae4e52a58d2add7ed5&v=4"
        title="Reytar"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/64041038?s=400&u=75196d0f6df79c05732f67ae4e52a58d2add7ed5&v=4"
        title="Reytar"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/64041038?s=400&u=75196d0f6df79c05732f67ae4e52a58d2add7ed5&v=4"
        title="Reytar"
      />
    </div>
  );
}

export default StoryReel;
