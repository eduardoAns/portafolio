import { Timeline, Event } from 'react-trivial-timeline';
import { Text, Box } from "@chakra-ui/layout";


export function TimelineMe() {
    return ( 
            <Timeline >
                
                <Text fontWeight="bold" fontSize="3xl" pb="8" width="full" >
                    Estudios
                </Text>
                <Box pl={{base:'2rem', lg:'4rem'}} >
                <Event interval="---Marzo/2020---" title="Comenzando carrera de analista programador" >
                    <Text  fontWeight="black">
                        Aprendiendo Logica, Java, POO
                    </Text>                    
                </Event>
                <Event interval="---2021---" title="Continuando carrera y estudio autodidacta">
                    <Text fontWeight="black">
                        Estudiando Js, React, nodeJs, SpringBoot
                    </Text>
                </Event>
                <Event interval="---Junio/2022---" title="Comenzando practica en DevLEF SPA">
                    <Text  fontWeight="black">
                        Desarrollador Back-end
                    </Text>
                </Event>
                <Event interval="---Agosto/2022---" title="Finalizando carrera y practica">
                    <Text  fontWeight="black">
                        Proyecto final de carrera con NextJs, Springboot
                    </Text>
                </Event>
                <Event interval="---Ahora---" title="Titulado como Analista Programador">
                    <Text fontWeight="black">
                        Disponible para trabajar como desarrollador Web Front-end, Back-end o FullStack
                    </Text>
                </Event>
                </Box>
            </Timeline>
    )
}

