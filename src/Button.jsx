import React, { useState } from "react";

const Button = (prop) => {
  const [joke, setJoke] = React.useState(prop.value);
  useState(() => {
    if (prop.value) {
      console.log("Button loaded from SSR");
    } else {
      console.log("Button loading from client side");
      fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((data) => setJoke(data.value));
    }
  }, []);
  return <button>{joke}</button>;
};

export default Button;
