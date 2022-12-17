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

{/* <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<AiOutlineMenu />}
            // variant="outline"
            bg="#db4c3f"
            color="white"
          />
          <MenuList>
            <MenuItem icon={<BsFillInboxFill color="blue" />}>
              Inbox
            </MenuItem>
            <MenuItem icon={<MdToday  color="green"/>} >
              today
            </MenuItem>
            <MenuItem icon={<GrCalculator color="#8d63cd"/>} >
              Upcoming
            </MenuItem>
            <MenuItem icon={<AiOutlineAppstore color="orange" />}>
              Filter & Labels
            </MenuItem>
            <MenuItem >
            <Flex direction="column"><Text>Projects</Text>
            <Text>Personal 🙂</Text></Flex>
             </MenuItem>
          </MenuList>
        </Menu> */}