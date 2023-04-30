import { Divider, Flex } from "@chakra-ui/react";
import NewTask from "../../components/Navbar/Components/NewTask";
import FavoritePage from "./components/FavoritePage";
import Header from "./components/Header";

function LabelFavorite() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      w="100%"
      h="100%"
    >
      <Header />
      <Divider w="100%" />
      <Flex w="100%" flexDirection="column">
        <NewTask />
        <FavoritePage />
      </Flex>
    </Flex>
  );
}

export default LabelFavorite;
