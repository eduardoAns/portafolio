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
            h="25vh"
            w="25vh"
            ml={{base:0,md:4}}
            justify="flex-end"
            _hover={{ 
                bg: hoverBg,
                color:"white", 
                
            }}
            color="white"
        >
            <Icon color="black"  p="4" w="24" h="24" as={imgTecnology} />
            <Text color="black"  p="4" fontSize="xl" fontWeight="semibold">
                {tecnology}
            </Text>
        </Flex> 
    );
}

export default CardTecnology;