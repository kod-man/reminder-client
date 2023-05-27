import { Flex, Text } from "@chakra-ui/react";
import InboxIcon from "../../../../icons/InboxIcon";
import ThreeCircleIcon from "../../../../icons/ThreeCircleIcon";
import ToggleIcon from "../../../../icons/ToggleIcon";

function ReminderDetailHeader() {
  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="center">
        <InboxIcon fontSize="sm" color="#246fe0" />
        <Text ml="7px" fontSize="12px" fontWeight="400">
          Inbox
        </Text>
      </Flex>

      <Flex alignItems="center" mr="30px" gap="10px">
        <Flex transform="rotate(180deg)">
          <ToggleIcon width="25" height="25" color="#666" />
        </Flex>
        <ToggleIcon width="25" height="25" color="#b2b2b2" />
        <ThreeCircleIcon color="#666" />
      </Flex>
    </Flex>
  );
}

export default ReminderDetailHeader;
