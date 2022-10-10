import React from 'react';
import { IconButton } from "@chakra-ui/button";
import { Flex, Heading, Spacer } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import {
    FaSun,
    FaMoon,
    FaGithub,
    FaLinkedin,
  } from "react-icons/fa";

const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <Flex w="100%" >
        <Heading ml={{base:0,md:"8"}} size="md" fontWeight="semibold" color="cyan.400">
          Eduardo Ansa C
        </Heading>
        <Spacer />
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open("https://www.google.com")
          }
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://www.google.com")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
    );
  };
  
  export default Header;