import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Circle, Stack, Flex, Box, Text} from "@chakra-ui/layout";
import { Button} from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

const Presentation = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      {isNotSmallerScreen && (
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
      )}
      <Flex
        direction={{base:"column", md:"row"}}
        spacing="200px"
        p={{base:0, md:16, lg:32}}
        alignSelf="flex-start"
      >
        <Box mt={{base:16, md:0}} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hola, soy
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Eduardo Ansa C
          </Text>
          <Text fontSize="4xl" color={isDark ? "gray.200" : "gray.500"}>
            Analista programador y desarrollador web
          </Text>
          <Text fontSize="xl" color={isDark ? "gray.200" : "gray.500"} mt={3}>
            Contacto: eduardoansa095@gmail.com
          </Text>
          
          
          
        </Box>
        <Image
          alignSelf="center"
          mt={{base:12, md:0}}
          mb={{base:12, md:0}}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="foto_perfil4.jpg"
          zIndex={1}
        />
      </Flex>
    </Stack>
  );
};

export default Presentation;
