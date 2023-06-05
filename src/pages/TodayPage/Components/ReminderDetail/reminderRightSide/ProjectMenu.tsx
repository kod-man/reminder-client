import { Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import InboxIcon from "../../../../../icons/InboxIcon";
import ToggleIcon from "../../../../../icons/ToggleIcon";

function ProjectMenu() {
  return (
    <>
      <Text mt="15px">Project</Text>
      <Tooltip label="Move to..." placement="top">
        <Flex
          alignItems="center"
          my="10px"
          _hover={{ bgColor: "#eee" }}
          cursor="pointer"
          p="5px 10px"
          borderRadius="5px"
          justifyContent="space-between"
        >
          <Flex>
            <InboxIcon fontSize="sm" color="#246fe0" />
            <Text ml="7px" fontWeight="400">
              Inbox
            </Text>
          </Flex>

          <ToggleIcon width="15" height="15" color="black" />
        </Flex>
      </Tooltip>
    </>
  );
}

export default ProjectMenu;
