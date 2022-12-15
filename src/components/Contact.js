import React, {useState} from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Textarea,
  Box,
  Text,
  useToast,
  Flex
} from '@chakra-ui/react'

const Contact = () => {
  // const [input, setInput] = useState('')
  const toast = useToast()
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    comments: false,
  })

  const [isPost, setIsPost] = useState(false)
  const [dataForm, setDataFrom] = useState({
    name: '',
    email: '',
    comments: ''
  })

  const handleChange = (e) => {
    setDataFrom({...dataForm, [e.target.name]: e.target.value})
    console.log(dataForm)
  }

  const handleClick = (e) => {

    if(e.target.value.trim() === ''){
        setIsError({[e.target.name] : true})       
    }
  }

  const handleKeyUp = (e) => {
    if(e.target.value.trim() !== ''){
        setIsError({[e.target.name] : false,})
      } 
  }
  
  // const handleInputChange = (e) => setInput(e.target.value)
  const postEmail = (e) => {
      e.preventDefault()
      const {name, email, comments} = dataForm
      console.log(dataForm)
    

      if (name.trim() === '' || email.trim() === '' || comments.trim() === '' ) {
          setIsPost(true)
          setTimeout(() => {
            setIsPost(false)
          }, 3000);

          return
      }
      

      try {
        
          fetch("https://formsubmit.co/ajax/eduardoansa095@gmail.com", {
              method: "POST",
              body: new FormData(e.target),
          })
          toast({
            title: 'Mensaje Enviado!.',
            description: "muchas gracias por tus comentarios",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
          setDataFrom({
            name: '',
            email: '',
            comments: '',
          })


      } catch (e) {
          console.log(e)

      }
  } 

  return (
    <Box width={"100%"} px={{base:0, xl:16}} id="contact">
      <Flex width="100%" justifyContent={"center"}>
          <Text fontWeight="bold" fontSize="4xl" mb={16} pb={2} borderTop="1px" borderBottom="1px" borderColor={'purple.800'} px={6}>
            ¿Interesado?
          </Text>
      </Flex> 
      <form onSubmit={postEmail}>
        <FormControl isInvalid={isError.name} mb={4}>
          <FormLabel>Nombre</FormLabel>
          <Input type='text' name="name" onChange={handleChange} onFocus={handleClick} onKeyUp={handleKeyUp}  value={dataForm.name}/>
          {!isError.name ? (
            null
          ) : (
            <FormErrorMessage>El nombre es requerido.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={isError.email} mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type='email' name="email" onChange={handleChange} onFocus={handleClick} onKeyUp={handleKeyUp} value={dataForm.email}/>
          {!isError.email? (
            null
          ) : (
            <FormErrorMessage>el email es requerido.</FormErrorMessage>
          )}
        </FormControl>
        <FormLabel>Contenido</FormLabel>
        <Textarea
          onKeyUp={handleKeyUp}
          value={dataForm.comments}
          onFocus={handleClick}
          isInvalid={isError.comments}
          name="comments"
          placeholder='deja tu mensaje'
          size='md'
          onChange={handleChange}
        />
          {
            isError.comments ? (
              <Text mt={2} color={'red.300'}>mensaje requerido</Text>
            ):(
              null
            )
          }

          {
            isPost ? (
              <Text mt={2} color={'red.500'}>Rellene Todos los campos</Text>
            ):(
              null
            )
          }
          <Flex justifyContent={"center"}>
            <Button mt={4} mb={16} colorScheme={"blue"} type='submit' width={48} size="lg">Enviar</Button>
          </Flex>
      </form>
    </Box>

  )
}

export default Contact

