import React from "react";

type Props = {};

export const fruits = ["apple", "mango", "banana"];
export default function Fruits({}: Props) {
  return (
    <>
      <h1>fruits</h1>
      <div>
        {fruits.map((fruit, index) => (
          <div key={index}>{fruit}</div>
        ))}
      </div>
    </>
  );
}
