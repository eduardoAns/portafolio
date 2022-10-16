import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Flex,
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'

  export function ModalProject({data}) {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
      <>
        <Button colorScheme="blue" isFullWidth onClick={onOpen}>
            Detalles
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{data.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex mb={5}>
                {data.content}
              </Flex>
              <Flex>
                <List spacing={3}>
                  {data.listContent.map((content) => (
                      <ListItem>
                          <ListIcon as={"feComposite"} color='green.500' />
                          {content}
                      </ListItem>
                  ))}                    
                </List>
              </Flex>  
            </ModalBody>
  
            <ModalFooter>
              <Button variant='outline' onClick={() => window.open(`${data.projectUrl}`)}>Web</Button>
              

              {
                data.githubBackUrl 
                ? 
                  <>
                    <Button variant='outline' onClick={() => window.open(`${data.githubFrontUrl}`)}>GitHub Frontend</Button> 
                    <Button variant='outline' onClick={() => window.open(`${data.githubBackUrl}`)}>GitHub Backend</Button>
                  </>
                :
                  <Button variant='outline' onClick={() => window.open(`${data.githubFrontUrl}`)}>GitHub</Button>
              }                      
            </ModalFooter>
          </ModalContent>
        </Modal>


      </>
    )
  }