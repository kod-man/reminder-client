import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import SmallPlusIcon from "../../../../icons/SmallPlusIcon";

function AddSubTask() {
  return (
    <Flex
      mb="10px"
      color="#666"
      fontSize="13px"
      fontWeight="500"
      _hover={{ backgroundColor: "#eee", color: "black" }}
      cursor="pointer"
      p="5px 10px"
      borderRadius="5px"
      alignItems="center"
    >
      <SmallPlusIcon color="gray.800" />
      <Text display="inline" ml="8px">
        Add sub-task
      </Text>
    </Flex>
  );
}

export default AddSubTask;
