import React, { useState } from "react";

const Button = () => {
  const [joke, setJoke] = React.useState("");
  useState(() => {
    console.log("Button loading");
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  }, []);
  return <button>App2 Button {joke} quote</button>;
};

export default Button;
