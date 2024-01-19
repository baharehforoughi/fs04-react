import { useState } from "react";

const LikeButton = () => {
  const [liked, set_liked] = useState(false);

  const character_liked = () => {
    set_liked(!liked);
  };
  return (
    <button onClick={character_liked}>{liked ? "⭐️" : "favorite"}</button>
  );
};

export default LikeButton;
