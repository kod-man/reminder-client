import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { RefObject, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../..";
import HamburgerIcon from "../../../icons/HamburgerIcon";
import HomeIcon from "../../../icons/HomeIcon";
import SearchIcon from "../../../icons/SearchIcon";
import { toggleDrawer } from "../../../store/Drawer/drawerSlice";
import { PATHS } from "../../../utils/paths";

function LeftNavBar() {
  const navigate = useNavigate();
  const btnRef = useRef() as RefObject<HTMLDivElement>;
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.value);

  const onClickHandler = () => {
    dispatch(toggleDrawer(!isDrawerOpen));
  };

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
        _hover={{ bg: "#e27065", cursor: "pointer" }}
        cursor="pointer"
        borderRadius="20%"
        padding={1}
        ref={btnRef}
        onClick={onClickHandler}
      >
        <HamburgerIcon color="white" />
      </Flex>
      <Flex
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="20%"
        padding={1}
        ml="0px !important"
      >
        <HomeIcon color="white" onClick={() => navigate(PATHS.TODAY)} />
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
    </HStack>
  );
}
export default LeftNavBar;
