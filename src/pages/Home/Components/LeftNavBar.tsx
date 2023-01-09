import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import HamburgerIcon from "../../../icons/HamburgerIcon";
import HomeIcon from "../../../icons/HomeIcon";
import SearchIcon from "../../../icons/SearchIcon";
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
      spacing={2}
    >
      <Flex
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="20%"
        padding={1}
        
      >
        <HamburgerIcon color="white" onClick={onOpen} />
      </Flex>
      <Flex
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="20%"
        padding={1}
        ml="1px !important"
      >
        <HomeIcon color="white" onClick={() => navigate(PATHS.LOGIN)} />
      </Flex>
      <InputGroup
        alignItems="center"
        bgColor="#e27065"
        w={175}
        borderRadius="3"
        _hover={{ bg: "white", svg: { fill: "black" } }}
      >
        <InputLeftElement
          children={<SearchIcon color="white" />}
          height={7}
          boxSize={7}
          alignItems="center"
        />
        <Input
          border="none"
          type="text"
          placeholder="Search"
          _placeholder={{ color: "white" }}
          _hover={{ _placeholder: { color: "black" } }}
          height={7}
          borderRadius="4"
          _focusVisible={{ outline: "none" }}
        />
      </InputGroup>
      <LeftDrawer isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
}
export default LeftNavBar;
