import { useState } from "react";
import Stats from "../components/Stats";
import Textarea from "../components/Textarea";
import { INTAGRAM__MAX__CHARRACTERS } from "../lib/constant";
import { FACEBOOK__MAX__CHARRACTERS } from "../lib/constant";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharracters: text.length,
    instagramNumberOfCharractersLeft: INTAGRAM__MAX__CHARRACTERS - text.length,
    facebooNumberOfCharractersLeft: FACEBOOK__MAX__CHARRACTERS - text.length,
    numberOfWords: text.split(" ").filter((word) => word !== "").length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
