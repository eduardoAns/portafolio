import { VStack } from "@chakra-ui/layout";
import React from "react";
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
        <meta name="og:description" content={ "Portafolio para mostrar mis proyectos." } />
        <meta name="og:image" content={ "https://i.picsum.photos/id/824/800/1200.jpg?hmac=oL7ccvkyMJ2uRT6IRUVsyWtZslXS_cRMSYjDr8GMGc4" } />
        

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
