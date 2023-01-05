import { Flex } from "@chakra-ui/react";

import CreateReminder from "./Components/CreateReminder";
import Header from "./Components/Header";
import NewCard from "./Components/NewCard";
function TodayPage() {
  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='center'>
      <Header />
      <CreateReminder />
      <NewCard />
    </Flex>
  );
}

export default TodayPage;
