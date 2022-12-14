import React, {useState} from 'react'
import { Tabs, TabList, Button, Link, TabPanels, Tab, TabPanel, Box, Flex, Text, UnorderedList, ListItem, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, IconButton } from '@chakra-ui/react'
import { PhoneIcon, SearchIcon, EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
    FaGithub,
    FaLinkedin,
  } from "react-icons/fa";
import { TimelineMe } from './Timeline'


const Profile = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const handleSliderChange = (event) => {
      setTabIndex(parseInt(event.target.value, 10))
    }
  
    const handleTabsChange = (index) => {
      setTabIndex(index)
    }
  
    return (
        <Flex 
            direction={{base:'column',lg:"row"}} 
            width="100%" 
            height="100%" 
            px={{base:0, xl:16}}
        >
            
            <Box width={{base:'100%',lg:"50%"}}>
                <Flex width="100%" justifyContent={"center"}>
                    <Text fontWeight="bold" fontSize="4xl" mb={10} pb={2} borderTop="1px" borderBottom="1px" borderColor={'purple.800'} px={6}>
                        Perfil
                    </Text>
                </Flex >
                
                <input
                    type='range'
                    min='0'
                    max='2'
                    value={tabIndex}
                    onChange={handleSliderChange}
                />
  
                <Tabs index={tabIndex} onChange={handleTabsChange}  >
                    <TabList>
                        <Tab>Sobre mi</Tab>
                        <Tab>Experiencia</Tab>
                        <Tab>Estudios</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Box width={'100%'} maxWidth={'35rem'}>
                                <Text fontWeight="bold" fontSize="3xl" pb="6" >
                                    Sobre mi
                                </Text>
                                <Text fontWeight="bold" fontSize="xl" pb="6">
                                    Titulado como Analista Programador del instituto INACAP de la ciudad de CALAMA.
                                </Text>
                                <Text fontWeight="normal" fontSize="lg"  >
                                    Tengo una gran facilidad para el aprendizaje, junto con la 
                                    curiosidad para estudiar de forma autodidacta las tecnolog??as 
                                    actuales y necesarias de esta profesi??n, ademas siento que es 
                                    un area en la que puedo sacar a relucir todas mis 
                                    capacidades. 
                                </Text>
                            </Box>    
                        </TabPanel>
                        <TabPanel>
                            <Box width={'100%'} maxWidth={'35rem'}>
                                <Text fontWeight="bold" fontSize="3xl" pb="6">
                                    Experiencia
                                </Text>
                                <Text fontWeight="bold" fontSize="xl" pb="6">
                                    Desarollador Back-End / Junio 2022 --- agosto 2022
                                </Text>
                                <UnorderedList>
                                    <ListItem>Desarrollo de m??dulos de la aplicaci??n con Laravel, JavaScript, HTML y Bootstrap.</ListItem>
                                    <ListItem>Manipulaci??n del DOM, peticiones AJAX y manejo de datos en JSON.</ListItem>
                                    <ListItem>Desarrollo de rutas/controladores/websockets con Laravel 8.</ListItem>
                                    <ListItem>Desarrollo e implementaci??n de tablas de datos con MYSQL.</ListItem>
                                    <ListItem>Documentaci??n del c??digo.</ListItem>
                                </UnorderedList>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Flex width={'100%'} maxWidth={'35rem'} margin={'0'}>
                                <TimelineMe />
                            </Flex>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            <Box width={{base:'100%',lg:"50%"}} display="flex" flexDirection={"column"} alignItems={{base:"center", lg:"end"}}  >
                
                <Flex width="100%" justifyContent={"center"}>
                    <Text fontWeight="bold" fontSize="4xl" mb={{base:16, lg:28}} mt={{base:12, lg:0}} pb={2} borderTop="1px" borderBottom="1px" borderColor={'purple.800'} px={6}>
                        Contacto
                    </Text>
                </Flex> 
                <Accordion allowToggle width={"90%"} display="flex" flexDirection={"column"} justifyContent="end">
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Ubicacion
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display="flex" justifyContent={"center"} gap={4} alignItems="center">
                            <SearchIcon />
                            <Text >Calama, Chile</Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Correo
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display="flex" justifyContent={"center"} gap={4} alignItems="center">
                            <EmailIcon />
                            <Text >eduardoansa095@gmail.com</Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Telefono
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display="flex" justifyContent={"center"} gap={4} alignItems="center">
                            <PhoneIcon />
                            <Text >+56030996818</Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Redes sociales
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display="flex" justifyContent={"center"} gap={4} alignItems="center">
                            <IconButton
                                icon={<FaLinkedin />}
                                isRound="true"
                                onClick={() =>
                                    window.open("https://linkedin.com/in/eduardo-ansa-b862a9217")
                                }
                            />
                            <IconButton
                                ml={2}
                                icon={<FaGithub />}
                                isRound="true"
                                onClick={() => window.open("https://github.com/eduardoAns")}
                            />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Curriculum
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display="flex" justifyContent={"center"} gap={4} alignItems="center">
                            <ExternalLinkIcon />
                            <Link href='https://drive.google.com/file/d/12LDY8j3FKUyqRCPkdhqLV33kANanjwGu/view?usp=share_link' target={"_blank"}>
                                <Button colorScheme={'blue'}>
                                    Curriculum
                                </Button>
                            </Link>
                            
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Flex>
    
            


      
    )
}

export default Profile
