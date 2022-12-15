import { Flex, Text, UnorderedList, ListItem } from "@chakra-ui/layout";
import React from "react";
import { TimelineMe } from "./Timeline";

const AboutMe = () => {
  return (

    <Flex 
      maxW={{base:'95%',lg:"65%"}}
      direction={{base:'column',lg:"row"}}
    >
      
      <Flex 
        // bgColor={"orange.200"} 
        width={{base:'100%',lg:"50%"}}
        alignItems="center" 
        direction="column"
      >
        <Text fontWeight="bold" fontSize="4xl" pb="8">
          Sobre mi
        </Text>
        <Text fontWeight="bold" fontSize="xl" textAlign={"initial"} pb="8" >
          Titulado como Analista Programador del instituto INACAP de la ciudad de CALAMA.
        </Text>
        <Text fontWeight="normal" fontSize="lg" textAlign={"initial"} >
        Tengo una gran facilidad para el aprendizaje, junto con la 
        curiosidad para estudiar de forma autodidacta las tecnologías 
        actuales y necesarias de esta profesión, ademas siento que es 
        un area en la que puedo sacar a relucir todas mis 
        capacidades. 
        </Text>
        <Text fontWeight="bold" fontSize="4xl" pb="6" mt={6}>
          Experiencia
        </Text>
        <Text fontWeight="bold" fontSize="xl" textAlign={"initial"} pb="8" >
          Desarollador Back-End / Junio 2022 – agosto 2022
        </Text>
        <UnorderedList>
          <ListItem>Desarrollo de módulos de la aplicación con Laravel, JavaScript, HTML y Bootstrap.</ListItem>
          <ListItem>Manipulación del DOM, peticiones AJAX y manejo de datos en JSON.</ListItem>
          <ListItem>Desarrollo de rutas/controladores/websockets con Laravel 8.</ListItem>
          <ListItem>Desarrollo e implementación de tablas de datos con MYSQL.</ListItem>
          <ListItem>Documentación del código.</ListItem>
        </UnorderedList>
      </Flex>

      <Flex         
        // bgColor={"orange.900"}
        width={{base:'100%',lg:"50%"}}
        alignItems="center"
        justifyContent={"center"}
        pt={{base:"12",lg:"0"}}
      >
        
        <TimelineMe />
      </Flex>
    </Flex>

  );
};

export default AboutMe;
