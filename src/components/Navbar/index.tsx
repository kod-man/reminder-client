import { Flex } from "@chakra-ui/react";
import LeftSideBar from "./Components/LeftNavBar";
import RightNavBar from "./Components/RightNavBar";

function Navbar() {
  return (
    <Flex
      h="44px"
      bg="#db4c3f"
      alignItems="center"
      justifyContent="center"
      py={2}
    >
      <LeftSideBar />
      <RightNavBar />
    </Flex>
  );
}

export default Navbar;
