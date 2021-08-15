import React from "react"
import image from "../guitar.jpg";

export default function About() {
    return (
        <main>
            <img src={image} alt="Closeup of guitar soundhole and strings" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-400 font-bold cursive leading-none lg:leading-snug home-name">Hello! I'm JD</h1>
            </section>
        </main>
    )
}