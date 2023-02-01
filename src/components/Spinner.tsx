import { Center, Flex, Spinner as Spin } from "@chakra-ui/react";

function Spinner() {
  return (
    <Flex width="100vw" height="100vh" alignContent="center" justifyContent="center">
      <Center>
        <Spin color="red.500" />
      </Center>
    </Flex>
  );
}

export default Spinner;
