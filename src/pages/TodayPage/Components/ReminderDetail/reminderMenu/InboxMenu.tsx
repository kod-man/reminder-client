import { Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import InboxDrawerIcon from "../../../../../icons/InboxDrawerIcon";

function InboxMenu() {
  return (
    <Tooltip label="Move to..." placement="top">
      <Flex
        alignItems="center"
        _hover={{ bgColor: "#eee" }}
        cursor="pointer"
        p="12px 5px"
        borderRadius="5px"
      >
        <InboxDrawerIcon color="#246fe0" />
        <Text ml="10px" fontWeight="400">
          Inbox
        </Text>
      </Flex>
    </Tooltip>
  );
}

export default InboxMenu;
