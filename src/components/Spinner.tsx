import { Center, Flex, Spinner as Spin } from "@chakra-ui/react";

function Spinner() {
  return (
    <Flex
      width="100%"
      height="100%"
      alignContent="center"
      justifyContent="center"
    >
      <Center>
        <Spin color="red.500" />
      </Center>
    </Flex>
  );
}

export default Spinner;
