import React, { useState, useEffect } from "react";

function TypingEffect() {
  const words = ["الخدمات المتاحة لدينا"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const typingSpeed = isDeleting ? 100 : 200;

  useEffect(() => {
    const currentWord = words[loopIndex % words.length];

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex]);

  return (
    <h2 className="typing-effect">
      {text}
      <span className="cursor"></span>
    </h2>

  );
}

export default TypingEffect;
