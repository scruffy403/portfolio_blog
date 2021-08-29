import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Post from "./components/Post";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
        <Route component={NasaPhoto} path="/nasaphoto" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
