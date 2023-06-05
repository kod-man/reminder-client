import { Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import FlagIcon from "../../../../../icons/FlagIcon";

function PriorityMenu() {
  return (
    <Tooltip label="Set prioroty..." placement="top">
      <Flex
        alignItems="center"
        _hover={{ bgColor: "#eee" }}
        cursor="pointer"
        p="12px 5px"
        borderRadius="5px"
        justifyContent="space-between"
      >
        <Flex>
          <FlagIcon color="#d7d7d7" /> <Text ml="10px">Priority 4</Text>
        </Flex>
      </Flex>
    </Tooltip>
  );
}

export default PriorityMenu;
