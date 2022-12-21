import { Flex, Img } from "@chakra-ui/react";

import Header from "./Components/Header";

function TodayPage() {
  return (
    <Flex
      border="1px"
      borderColor="black"
      h="100vh"
      direction="column"
      alignItems="center"
    >
      <Header />
    </Flex>
  );
}

export default TodayPage;
