import { Text, Center } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Center borderTopEndRadius='50%' mt='8' py='20px' bg='pink.900' color='white'  width="100%">
        <Text fontSize='15px'>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</Text>
      </Center>
    </>
  )
}

export default Footer