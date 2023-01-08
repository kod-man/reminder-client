import { Flex } from "@chakra-ui/react";
import LeftSideBar from "./Components/LeftNavBar";
import RightNavBar from "./Components/RightNavBar";

function HomePage() {
  return (
    <Flex
      h={9}
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

export default HomePage;
