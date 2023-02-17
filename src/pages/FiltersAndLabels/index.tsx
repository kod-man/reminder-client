import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import DropIcon from "../../icons/DropIcon";
import MiniLabelIcon from "../../icons/MiniLabelIcon";
import FiltersAndLabels from "./components/FiltersAndLabels";

import Header from "./components/Header";

function FiltersAndLabelsPage() {
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.value);
  const filtersList = ["Learn React", "Learn TypeScript"];
  const labelsList = ["Read", "İmportant", "Bussiness"];
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w={isDrawerOpen ? "calc(100% - 20rem)" : "100%"}
      ml="auto"
    >
      <Header />
      <FiltersAndLabels cardTitle="Filters" data={filtersList} Icon={DropIcon} />
      <FiltersAndLabels cardTitle="Labels" data={labelsList} Icon={MiniLabelIcon} />
    </Flex>
  );
}

export default FiltersAndLabelsPage;
