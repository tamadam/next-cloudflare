"use client";

import { useState } from "react";

const Button = () => {
  const [isActive, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive((prev) => !prev)}
      style={{
        backgroundColor: `${isActive ? "red" : "transparent"}`,
        padding: "1em",
      }}
    >
      Click me
    </button>
  );
};

export default Button;
