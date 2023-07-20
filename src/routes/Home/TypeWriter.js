import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: ["Web Developer", "React Developer", "React Native "],
        autoStart: true,
        loop: true,
        delay: 180,
      }}
    />
  );
};

export default TypeWriter;
