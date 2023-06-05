import { Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import LabelIcon from "../../../../../icons/LabelIcon";

function AddLabelsMenu() {
  return (
    <Tooltip label="Change labels" placement="top">
      <Flex
        alignItems="center"
        p="12px 5px"
        _hover={{ bgColor: "#eee" }}
        cursor="pointer"
        borderRadius="5px"
      >
        <LabelIcon color="#898989" />
        <Text ml="10px" color="#919191">
          Add Labels
        </Text>
      </Flex>
    </Tooltip>
  );
}

export default AddLabelsMenu;
