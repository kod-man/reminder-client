import { Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import FlagIcon from "../../../../../icons/FlagIcon";
import ToggleIcon from "../../../../../icons/ToggleIcon";

function PriorityMenu() {
  return (
    <>
      <Text>Priority</Text>
      <Tooltip label="Set prioroty..." placement="top">
        <Flex
          alignItems="center"
          mt="12px"
          _hover={{ bgColor: "#eee" }}
          cursor="pointer"
          p="5px 10px"
          borderRadius="5px"
          justifyContent="space-between"
        >
          <Flex>
            <FlagIcon /> <Text ml="10px">P4</Text>
          </Flex>

          <ToggleIcon width="15" height="15" color="black" />
        </Flex>
      </Tooltip>
    </>
  );
}

export default PriorityMenu;
