import { Button, Flex } from "@chakra-ui/react";
import Center3 from "./Components/Center-3";
import Header3 from "./Components/Header-3";
import Profil from "./Components/Profil";
function Onboard3() {
  return (
    <Flex flexDirection="column" w="%100" h="100vh">
      <Header3 />
      <Center3 />
      <Flex justifyContent="center" alignItems="center" h="100vh">
        <Profil />
      </Flex>
      <Flex justifyContent="center" alignItems="center" h="100px">
        <Button
          fontSize="sm"
          _hover={{ cursor: "not-allowed" }}
          color="white"
          backgroundColor="red.200"
          mt="8"
          mb="4"
        >
          Todoist'i başlat
        </Button>
      </Flex>
    </Flex>
  );
}

export default Onboard3;
