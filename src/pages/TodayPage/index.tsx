import { Flex } from "@chakra-ui/react";

import CreateReminder from "./Components/CreateReminder";
import Header from "./Components/Header";
function TodayPage() {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Header />
      <CreateReminder />
    </Flex>
  );
}

export default TodayPage;
