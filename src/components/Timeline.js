import { Timeline, Event } from 'react-trivial-timeline';
import { Flex, Text } from "@chakra-ui/layout";


export function TimelineMe() {
    return ( 
            <Timeline lineColor={"red"}>
                <Text fontWeight="bold" fontSize="4xl" pb="8" width="full" textAlign="center">
                    Estudios
                </Text>
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
            
            </Timeline>
    )
}

