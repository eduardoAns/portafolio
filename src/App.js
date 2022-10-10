import { VStack } from "@chakra-ui/layout";
import React from "react";
import BgAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import {Helmet} from "react-helmet";
import Header from "./components/Header";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Presentation from "./components/Presentation";
import AboutMe from "./components/AboutMe";

const App = () => {

  return (
    <VStack p="5" >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eduardo Ansa</title>
      </Helmet>
      <Header />
      <Presentation />
      <AboutMe />
      <Profile />
      <Projects />

    </VStack>
  );
};

export default App;
