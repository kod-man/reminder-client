import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SmallPlusIcon from '../icons/SmallPlusIcon'

const AddProjectModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Flex as={Button}  onClick={onOpen}>
        <SmallPlusIcon />
        </Flex>
        {/* <Button >
          Open Modal
        </Button> */}
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Lorem count={2} 
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default AddProjectModal