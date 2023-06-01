import { Box, Divider, Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";

import TodayIcon from "../../../../icons/TodayIcon";
import DeleteIcon from "../../../../icons/DeleteIcon";
import FlagIcon from "../../../../icons/FlagIcon";
import InboxDrawerIcon from "../../../../icons/InboxDrawerIcon";
import LabelIcon from "../../../../icons/LabelIcon";
import ClockIcon from "../../../../icons/ClockIcon";

export default function ReminderMenu() {
  return (
    <Box flex="3" height="100%" fontSize="14px">
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
      <Divider />

      <Flex
        _hover={{ bgColor: "#eee" }}
        cursor="pointer"
        p="12px 5px"
        alignItems="center"
        borderRadius="5px"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <TodayIcon width="20" height="20" color="#dd746c" />{" "}
          <Text ml="12px">24 May</Text>
        </Flex>
        <DeleteIcon />
      </Flex>
      <Divider />

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
      <Divider />
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
      <Divider />
      <Text
        display="flex"
        _hover={{ bgColor: "#eee" }}
        cursor="pointer"
        p="12px 5px"
        borderRadius="5px"
      >
        <ClockIcon color="#808080" />
        <Flex ml="10px" alignItems="center" color="#919191">
          Add reminders
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
        </Flex>
      </Text>
      <Divider borderWidth="3px" my="20px" />
    </Box>
  );
}
