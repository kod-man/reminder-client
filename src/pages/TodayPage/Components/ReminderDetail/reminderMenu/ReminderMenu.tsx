import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import InboxMenu from "./InboxMenu";
import DateMenu from "./DateMenu";
import PriorityMenu from "./PriorityMenu";
import AddLabelsMenu from "./AddLabelsMenu";
import AddRemindersMenu from "./AddRemindersMenu";

export default function ReminderMenu() {
  return (
    <Box flex="3" height="100%" fontSize="14px">
      <InboxMenu />
      <Divider />

      <DateMenu />
      <Divider />

      <PriorityMenu />
      <Divider />
      <AddLabelsMenu />
      <Divider />

      <AddRemindersMenu />
      <Divider borderWidth="3px" my="20px" />
    </Box>
  );
}
