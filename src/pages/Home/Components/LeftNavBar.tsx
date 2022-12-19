import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BsFillInboxFill } from "react-icons/bs";

function LeftNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      justifyContent="start"
      alignItems="center"
      ml={5}
      height="100%"
      flexBasis="200px"
      spacing={4}
    >
      <AiOutlineMenu onClick={onOpen} color="white" size="25px" />
      <AiOutlineHome
        onClick={() => console.log("home page")}
        size="25px"
        color="white"
      />
      <Input bgColor="white" />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerContent>
            <Box>
              <BsFillInboxFill color="blue" />
            </Box>
          </DrawerContent>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
}
export default LeftNavBar;
