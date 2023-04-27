import { Flex } from "@chakra-ui/react";
import CreateReminder from "./Components/CreateReminder";
import Header from "./Components/Header";

function TodayPage() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      w="100%"
      h="100%"
    >
      <Header />
      <CreateReminder />
    </Flex>
  );
}

export default TodayPage;
