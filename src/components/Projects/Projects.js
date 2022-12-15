import { Flex, Text, Box, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import { CardProjects } from "./CardProjects";
import { ModalProject } from "./ModalProject";
import { projectsValue } from "../../data";

const Projects = () => {

  return (
    <Flex direction={"column"} alignItems="center" pb={16} width="100%" px={{base:0,xl:16}} >
        <Flex width="100%" justifyContent={"center"}>
            <Text fontWeight="bold" fontSize="4xl" mb={16} pb={2} borderTop="1px" borderBottom="1px" borderColor={'purple.800'} px={6}>
                Mis proyectos
            </Text>
        </Flex> 
        <SimpleGrid columns={{base:1, lg:2, xl:3}} gap={2} width="100%" justifyItems="center">

            {
            projectsValue.map((project) => (
                <Box w={"23rem"} h={"23rem"} textAlign={"center"} mb={36}>
                    <CardProjects 
                        name={project.name}
                        imageUrl={project.imageUrl}
                        projectUrl={project.projectUrl}
                        technologies={project.technologies}
                    />

                    <ModalProject data={project.modal} />
                        
                </Box>
            ))}
            
        </SimpleGrid>
    </Flex>
    
  );
};

export default Projects;