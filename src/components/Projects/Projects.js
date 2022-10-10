import { Flex, Text, Box, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import { CardProjects } from "./CardProjects";
import { ModalProject } from "./ModalProject";
import { projectsValue } from "../../data";

const Projects = () => {

  return (
    <Flex direction={"column"} alignItems="center" pb={32}>
        <Text fontWeight="bold" fontSize="4xl" mb={5}>
            Mis proyectos
        </Text>
        <SimpleGrid columns={{base:1, lg:3}}>

            {
            projectsValue.map((project) => (
                <Box w={350} h={350} pr={3}   textAlign={"center"} mb={36} >
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