import { useState, useEffect } from "react";

const Likecounter = () => {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes);
  //   console.log("what are these?", numLikes, set_numLikes);
  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1); //why?
  };
  const reset = () => {
    console.log("number of likes reset!");
    set_numLikes(initial_numLikes);
  };
  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>like</button>
        <button onClick={reset}>reset</button>
      </p>
    </div>
  );
};
export default Likecounter;
