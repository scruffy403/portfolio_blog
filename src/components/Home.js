import React from "react";
import { Link } from "react-router-dom";
import image from "../guitar.1280.jpg";

export default function About() {
  return (
    <main>
      <img
        src={image}
        alt="Closeup of guitar soundhole and strings"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-4xl text-blue-400 font-bold cursive leading-none lg:leading-snug home-name">
          Hello! I'm John David{" "}
          <p className="text-4xl flex justify-center lg:leading-snug bg-black rounded-full hover:text-yellow-500">
            <Link to="/nasaphoto">Have a look at the stars!</Link>
          </p>
        </h1>
      </section>
    </main>
  );
}
