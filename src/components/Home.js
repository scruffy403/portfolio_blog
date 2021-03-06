import React from "react";
import image from "../guitar.1280.jpg";

export default function About() {
  return (
    <main>
      <img
        src={image}
        alt="Closeup of guitar soundhole and strings"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-36 md:pt-48 lg:pt-64 px-8">
        <h1 className="text:sm md:text-6xl lg:text-9xl text-blue-400 font-bold cursive leading-none lg:leading-snug home-name">
          Hello! I'm John David{" "}
        </h1>
      </section>
    </main>
  );
}
