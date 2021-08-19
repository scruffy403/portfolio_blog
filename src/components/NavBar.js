import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-yellow-500 text-4xl font-bold cursive tracking-widest"
            activeClassName="text-blue-100 bg-blue-700"
          >
            John David
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-500"
            activeClassName="text-blue-100 bg-blue-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-500"
            activeClassName="text-blue-100 bg-blue-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-500"
            activeClassName="text-blue-100 bg-blue-700"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-6 px-3 mx-6">
          <SocialIcon
            url="https://twitter.com/JohnDavidSoto1"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/scruffy403/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/johndavid.soto.3"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
