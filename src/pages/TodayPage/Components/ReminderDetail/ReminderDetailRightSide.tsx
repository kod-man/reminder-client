import { Box, Divider, Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import InboxIcon from "../../../../icons/InboxIcon";
import ToggleIcon from "../../../../icons/ToggleIcon";
import TodayIcon from "../../../../icons/TodayIcon";
import DeleteIcon from "../../../../icons/DeleteIcon";
import FlagIcon from "../../../../icons/FlagIcon";
import LockIcon from "../../../../icons/LockIcon";

function ReminderDetailRightSide() {
  return (
    <Box bg="#fafafa" flex="3" height="100%" px="20px" fontSize="12px">
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
      <Divider my="10px" />
      <Text my="10px">Due date</Text>
      <Flex
        _hover={{ bgColor: "#eee" }}
        cursor="pointer"
        p="5px 10px"
        alignItems="center"
        borderRadius="5px"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <TodayIcon color="#d1453b" />
          <Text ml="10px">24 May</Text>
        </Flex>
        <DeleteIcon />
      </Flex>
      <Divider my="10px" />
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
      <Divider mt="12px" />
      <Tooltip label="Change labels" placement="top">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          my="7px"
          px="10px"
          _hover={{ bgColor: "#eee" }}
          cursor="pointer"
          borderRadius="5px"
        >
          <Text>Labels</Text>
          <Text fontSize="20px" color="#b2b2b2" fontWeight="400">
            +
          </Text>
        </Flex>
      </Tooltip>
      <Divider mb="10px" />
      <Text
        display="flex"
        justifyContent="space-between"
        _hover={{ bgColor: "#eee" }}
        cursor="pointer"
        p="5px 10px"
        borderRadius="5px"
      >
        <Text display="flex" alignItems="center">
          Reminders
          <Text
            bgColor="#faead1"
            color="#8f4700"
            ml="2px"
            w="30px"
            h="17px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="3px"
            fontSize="11px"
            fontWeight="700"
          >
            PRO
          </Text>
        </Text>
        <LockIcon color="#666" />
      </Text>
      <Divider mt="10px" />
    </Box>
  );
}

export default ReminderDetailRightSide;
