import { useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Text, MenuItem, Box, IconButton, Flex, color } from "@chakra-ui/react"
import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { BsFillInboxFill } from "react-icons/bs"

function Drawerr() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button colorScheme="#db4c3f" onClick={onOpen} as={Button} bg="#db4c3f"
            color="white" >
      {<AiOutlineMenu />}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent >
            <Flex> </Flex>
          <DrawerCloseButton />
          <DrawerContent>
          <Box >
              Inbox
              {<BsFillInboxFill color="blue" />}
            </Box>
          </DrawerContent>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default Drawerr;
