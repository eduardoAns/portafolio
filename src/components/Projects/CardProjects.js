import {
    AspectRatio,
    Box,
    HStack,
    Image,
    Skeleton,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import {IconTech} from './IconTech'
  import * as React from 'react'


  
  export const CardProjects = ({ name, imageUrl, projectUrl, technologies=[]}) => {

    return (
      <Stack
        spacing={useBreakpointValue({
          base: '4',
          md: '5',
        })}
      >
        <Box position="relative">
            <a href={projectUrl} target={"_blank"} rel="noreferrer">
          <AspectRatio ratio={4 / 3}>
                <Image
                src={imageUrl}
                alt={name}
                draggable="false"
                fallback={<Skeleton />}
                borderRadius={useBreakpointValue({
                    base: 'md',
                    md: 'xl',
                })}
                />
          </AspectRatio>
          </a>
          
        </Box>
        <Stack>
          <Stack spacing="1">
            <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
              {name}
            </Text>
          </Stack>
          <HStack justifyContent={"center"}>
            {technologies.map((technologie) => (
              <IconTech technologie={technologie} />
            ))}
        
          </HStack>
        </Stack>
        
      </Stack>
    )
  }