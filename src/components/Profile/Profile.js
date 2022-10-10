import React from "react";
import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/layout";
import { DiReact, DiNodejsSmall, DiJava, DiMysql } from "react-icons/di";
import CardTecnology from "./CardTecnology";

const Profile = () => {
  return (
    <Flex
      maxWidth={""}
      //bgColor={"blue.200"}
      justifyContent="center"
    >
      <Box alignSelf=""  py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
        </Heading>
        <Text fontSize="2xl" color="gray.400">
        </Text>
      </Box>
      <Box alignSelf="center" px="16" py="16">
        <Text fontWeight="bold" fontSize="4xl" ml={{base:0,md:4}} pb={8} textAlign="center">
          Tecnologias principales
        </Text>
        <Text fontWeight="bold" fontSize="2xl" ml={{base:0,md:4}} >
          Desarrollador full stack, especializado en las siguientes tecnologias.
        </Text>
        <SimpleGrid columns={{base:1, md:2, lg:4}} mt={8} justifyItems="center">
          <CardTecnology tecnology={"React"} imgTecnology={DiReact} hoverBg="blue.400"/>
          <CardTecnology tecnology={"Nodejs"} imgTecnology={DiNodejsSmall} hoverBg="teal.400"/>
          <CardTecnology tecnology={"Java"} imgTecnology={DiJava} hoverBg="green.400"/>
          <CardTecnology tecnology={"MySql"} imgTecnology={DiMysql} hoverBg="cyan.400"/>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Profile;
