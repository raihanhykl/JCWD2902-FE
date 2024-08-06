import Link from "next/link";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <nav>
        <h1>Aboutpage</h1>
        <Link href="/">Home</Link>
      </nav>
    </>
  );
}
