import { Modal, Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import house from "../../assets/images/houses/house7lg.png";

function PopupModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, [])
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size={'2xl'} motionPreset='slideInTop'  >
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='5%'
          backdropBlur='2px' />
        <ModalContent bg={'#fff5f7ab'} mt={'20'} >
          {/* <ModalHeader textAlign={'center'}>UMA  Developers.</ModalHeader> */}
          <ModalCloseButton className='closeBtn' />
          <ModalBody p={30}>
            <Image
              borderRadius={20}
              src={house}
              alt="house"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
            <Button bg="pink.900" mt={5} float={'right'} _hover={{ bg: "#8f4267" }} onClick={onClose}>
              Skip
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PopupModal
