import React from "react";
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/layout";
import { DiReact, DiNodejsSmall, DiJava, DiMysql, DiCss3 } from "react-icons/di";
import CardTecnology from "./CardTecnology";

const Tecnologies = () => {
  return (
    <Flex
      width={"100%"}
      justifyContent="center"
      px={{base:"0", xl:"16"}}
    >
      <Box alignSelf="center" width={"100%"} py="16" >
        <Flex width="100%" justifyContent={"center"}>
            <Text fontWeight="bold" fontSize="4xl" mb={16} pb={2} borderTop="1px" borderBottom="1px" borderColor={'purple.800'} px={6}>
              Tecnologias
            </Text>
        </Flex> 
        <Text fontWeight="bold" fontSize="2xl" ml={{base:0,md:4}}>
          Desarrollador Web, especializado en los siguientes lenguajes o tecnologias.
        </Text>
        <SimpleGrid columns={{base:2, lg:3, xl:5}} mt={8} justifyItems="center">
          <CardTecnology tecnology={"React"} imgTecnology={DiReact} hoverBg="blue.400"/>
          <CardTecnology tecnology={"Java"} imgTecnology={DiJava} hoverBg="green.400"/>
          <CardTecnology tecnology={"Nodejs"} imgTecnology={DiNodejsSmall} hoverBg="teal.400"/>
          <CardTecnology tecnology={"MySql"} imgTecnology={DiMysql} hoverBg="cyan.400"/>
          <CardTecnology tecnology={"Css"} imgTecnology={DiCss3} hoverBg="red.400"/>


        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Tecnologies;
