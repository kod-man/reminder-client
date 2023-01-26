import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../..";

import CreateReminder from "./Components/CreateReminder";
import Header from "./Components/Header";

function TodayPage() {
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.value);
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w={isDrawerOpen ? "calc(100% - 20rem)" : "100%"}
      ml="auto"
    >
      <Header />
      <CreateReminder />
    </Flex>
  );
}

export default TodayPage;
