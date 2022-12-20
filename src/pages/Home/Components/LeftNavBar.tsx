import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/paths";
import LeftDrawer from "./LeftDrawer";

function LeftNavBar() {
  const navigate = useNavigate();
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
      <Flex
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="20%"
        padding={1}
      >
        <AiOutlineMenu
          onClick={onOpen}
          color="white"
          size="20px"
          cursor="pointer"
        />
      </Flex>
      <Flex
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="20%"
        padding={1}
      >
        <AiOutlineHome
          cursor="pointer"
          onClick={() => navigate(PATHS.REGISTER)} //for now to check i am sending to login page
          size="20px"
          color="white"
        />
      </Flex>

      <InputGroup
        alignItems="center"
        bgColor="#e27065"
        _hover={{ bg: "white" }}
        w={200}
        margin="1"
      >
        <InputLeftElement children={<BsSearch color="white" />} />
        <Input type="text" placeholder="Search" textColor="black" />
      </InputGroup>

      <LeftDrawer isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
}
export default LeftNavBar;
