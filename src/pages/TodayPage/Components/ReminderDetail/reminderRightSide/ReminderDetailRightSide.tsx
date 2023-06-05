import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import ProjectMenu from "./ProjectMenu";
import DueDateMenu from "./DueDateMenu";
import PriorityMenu from "./PriorityMenu";
import LabelsMenu from "./LabelsMenu";
import RemindersPro from "./RemindersPro";

function ReminderDetailRightSide() {
  return (
    <Box bg="#fafafa" flex="3" height="100%" px="20px" fontSize="12px">
      <ProjectMenu />
      <Divider my="10px" />
      <DueDateMenu />
      <Divider my="10px" />
      <PriorityMenu />
      <Divider mt="12px" />
      <LabelsMenu />
      <Divider mb="10px" />
      <RemindersPro />
      <Divider mt="10px" />
    </Box>
  );
}

export default ReminderDetailRightSide;
