import { Flex } from "@chakra-ui/react";
import Center from "./Components/Center";
import Footer from "./Components/Footer";

import Header from "./Components/Header";

function TodayPage() {
  return (
    <Flex h="100vh" direction="column" alignItems="center">
      <Header />
      <Center />
      <Footer />
    </Flex>
  );
}

export default TodayPage;
