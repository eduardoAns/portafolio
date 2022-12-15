import { VStack } from "@chakra-ui/layout";
import React from "react";
import {Helmet} from "react-helmet";
import Header from "./components/Header";
import Projects from "./components/Projects/Projects";
import Presentation from "./components/Presentation";
import Tecnologies from "./components/tecnologies/Tecnologies";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact";

const App = () => {

  return (
    <VStack py="5" px={{base:"2", md:"14", lg:"28"}} >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eduardo Ansa</title>
        <meta name="og:description" content={ "Portafolio para mostrar mis proyectos." } />
        <meta name="og:image" content={ "https://i.picsum.photos/id/824/800/1200.jpg?hmac=oL7ccvkyMJ2uRT6IRUVsyWtZslXS_cRMSYjDr8GMGc4" } />
        
      </Helmet>
      <Header />
      <Presentation />
      <Profile />
      <Tecnologies />
      <Projects />
      <Contact />

    </VStack>
  );
};

export default App;
