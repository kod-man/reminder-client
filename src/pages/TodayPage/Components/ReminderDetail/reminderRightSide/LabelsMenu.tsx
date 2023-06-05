import { Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";

function LabelsMenu() {
  return (
    <>
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
    </>
  );
}

export default LabelsMenu;
