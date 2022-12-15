import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Circle, Stack, Flex, Text, Link} from "@chakra-ui/layout";
import { Button} from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

const Presentation = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:1020px)");
  return (
    <Stack width={"100%"} px={{base:"0", xl:"16"}}>
      {isNotSmallerScreen && (
        <Circle
          position="absolute"
          right={28}
          top={20}
          bg="blue.100"
          opacity="0.1"
          w="350px"
          h="350px"
          alignSelf="flex-end"
        />
      )}
      <Flex
        direction={{base:"column", md:"row"}}
        py={{base:"0", md:"16"}}
        justifyContent={'space-around'}
        
      >
        <Flex mt={{base:16, md:0}} align="flex-start" gap={3} flexDirection="column"  width="100%" >
          <Text fontSize="5xl" fontWeight="semibold" width={"100%"}>
            Hola, soy
          </Text>
          <Text
            fontSize="6xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Eduardo Ansa C
          </Text>
          <Text fontSize="4xl" fontWeight="semibold" mb={3}>
            Analista programador y desarrollador web
          </Text>
          <Flex justifyContent={{base:'center', lg:'start'}} width="100%">
            <Link href="#contact">
              <Button colorScheme={'blue'} size="lg" >
                Contactame
              </Button>
            </Link>
          </Flex>
          
          
        </Flex>
        <Flex 
            width={{base:'100%',lg:"80%"}}
            justifyContent={{base:'center',lg:"end"}}
            my={{base:'12', lg:'0'}}
        >
              <Image
                alignSelf="center"
                borderRadius="full"
                backgroundColor="transparent"
                boxShadow="lg"
                boxSize="350px"
                src="foto_perfil4.jpg"
                zIndex={1}
              />
            
        </Flex>
          
        
      </Flex>
    </Stack>
  );
};

export default Presentation;
