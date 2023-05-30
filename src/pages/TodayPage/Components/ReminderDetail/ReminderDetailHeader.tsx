import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import InboxIcon from "../../../../icons/InboxIcon";
import ThreeCircleIcon from "../../../../icons/ThreeCircleIcon";
import ToggleIcon from "../../../../icons/ToggleIcon";

function ReminderDetailHeader() {
  return (
    <Flex justifyContent="space-between">
      <Flex
        alignItems="center"
        _hover={{ textDecoration: "underline" }}
        cursor="pointer"
      >
        <InboxIcon fontSize="sm" color="#246fe0" />
        <Text ml="7px" fontSize="12px" fontWeight="400">
          Inbox
        </Text>
      </Flex>

      <Flex alignItems="center" mr="30px" gap="10px">
        <Tooltip label="Previous task" placement="top">
          <Flex
            transform="rotate(180deg)"
            _hover={{ bgColor: "#eee" }}
            cursor="pointer"
            p="3px"
            borderRadius="5px"
          >
            <ToggleIcon width="25" height="25" color="#666" />
          </Flex>
        </Tooltip>
        <Tooltip label="Next task" placement="top">
          <Box
            _hover={{ bgColor: "#eee" }}
            cursor="pointer"
            p="3px"
            borderRadius="5px"
          >
            <ToggleIcon width="25" height="25" color="#b2b2b2" />
          </Box>
        </Tooltip>
        <Tooltip label="More action" placement="top">
          <Box
            _hover={{ bgColor: "#eee" }}
            cursor="pointer"
            p="3px"
            borderRadius="5px"
          >
            <ThreeCircleIcon color="#666" />
          </Box>
        </Tooltip>
      </Flex>
    </Flex>
  );
}

export default ReminderDetailHeader;
