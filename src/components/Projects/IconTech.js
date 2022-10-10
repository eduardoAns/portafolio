
import React from 'react';
import { Icon,useColorModeValue,} from "@chakra-ui/react";


export const IconTech = ({technologie}) => {
    return ( 
        <Icon 
            color={useColorModeValue('black', 'white')}  
            p="4" 
            w="20" 
            h="20" 
            as={technologie} />
     );
}

