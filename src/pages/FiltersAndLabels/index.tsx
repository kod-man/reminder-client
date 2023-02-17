import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../..";

import Filters from "./components/Filters";
import Header from "./components/Header";
import Labels from "./components/Labels";

function FiltersAndLabels() {
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
      <Filters />
      <Labels />
    </Flex>
  );
}

export default FiltersAndLabels;
