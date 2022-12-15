import React from 'react';
import { Flex, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";


function CardTecnology({tecnology, imgTecnology, hoverBg}) {
    return ( 
        <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="11rem"
            w="11rem"
            _hover={{ 
                bg: hoverBg,
                color:"white", 
                
            }}
            color="white"
            justifyContent={"center"}
        >
            <Icon color="black" w="24" h="24" as={imgTecnology} alignSelf="center"/>
            <Text color="black" fontSize="xl" fontWeight="semibold" textAlign={"center"}>
                {tecnology}
            </Text>
        </Flex> 
    );
}

export default CardTecnology;