import { Center, Flex, Spinner as Spin } from "@chakra-ui/react";
import TodoistIcon from "../icons/TodoistIcon";

function Spinner() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignContent="center"
      justifyContent="center"
    >
      <Center display="flex" flexDirection="column">
        <TodoistIcon width="64" height="64" />
        <Spin mt="6" color="red.500" />
      </Center>
    </Flex>
  );
}

export default Spinner;
