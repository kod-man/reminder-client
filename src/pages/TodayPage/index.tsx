import { Flex } from "@chakra-ui/react";
import Center from "./Components/Center";
import Footer from "./Components/Footer";

import Header from "./Components/Header";
import Menu from "./Components/Menu";

function TodayPage() {
  return (
    <Flex direction="column" alignItems="center" w="100%">
      <Header />
      <Menu />
      <Center />
      <Footer />
    </Flex>
  );
}

export default TodayPage;
