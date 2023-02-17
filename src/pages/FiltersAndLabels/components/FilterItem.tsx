import { Flex, Text, Spacer, useMediaQuery } from "@chakra-ui/react";
import DropIcon from "../../../icons/DropIcon";
import TreeDoteIcon from "../../../icons/TreeDoteIcon";
import IconsBar from "./IconsBars";

const FilterItem: React.FC<{ filter: string }> = (props) => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex
      borderBottom="1px solid"
      borderColor="gray.200"
      w={isLargerThan800 ? "55%" : "80%"}
      justifyContent="center"
      mb="4"
      padding={1}
      cursor="pointer"
    >
      <Flex w="100%">
        <Flex>
          <Flex>
            <DropIcon />
          </Flex>
          <Flex ml="2" direction="column" color="#333" fontSize="14px">
            <Text>{props.filter}</Text>
          </Flex>
        </Flex>
        <Spacer />
        <IconsBar />
        <Flex
          w="24px"
          h="24px"
          alignItems="center"
          justifyContent="center"
          ml="1"
          color="gray"
          _hover={{ color: "#202020", bg: "#eee" }}
          borderRadius="20%"
          fontSize="2xl"
        >
          <TreeDoteIcon color="gray" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FilterItem;
