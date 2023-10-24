import animal from "../assets/animal.jpg";
//we need to import useState with {}
import { useState } from "react";

export default function Child({ name }) {
  const [likes, setLikes] = useState(0);
  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <p>{name} is the child</p>
      <img src={animal} onClick={handleLikes} alt="animal" />
      <span>❤️{likes}</span>
    </div>
  );
}
