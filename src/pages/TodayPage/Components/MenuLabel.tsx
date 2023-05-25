import { Box, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import MiniLabelIcon from "../../../icons/MiniLabelIcon";
import DeleteIcon from "../../../icons/DeleteIcon";

type LABEL_PROPS = {
  label: {
    name: string;
    color: string;
  };
  setLabel: React.Dispatch<
    React.SetStateAction<{
      name: string;
      color: string;
    }>
  >;
};

function MenuLabel({ label, setLabel }: LABEL_PROPS) {
  return (
    <Tooltip hasArrow label="Add label @ " placement="top">
      <Box
        fontWeight="500"
        display={label.name ? "flex" : "none"}
        bg="white"
        border="1px"
        borderColor="gray.300"
        borderRadius="md"
        cursor="pointer"
        h="32px"
        mr="2"
        px="1"
        color="gray"
        _hover={{ bg: "#eee" }}
        alignItems="center"
      >
        <MiniLabelIcon color={label.color} />
        <Text pl="1px" pr="6px" fontSize="sm">
          {label.name}
        </Text>
        <Tooltip hasArrow label="Remove label" placement="top">
          <Box
            bg="transparent"
            _hover={{ bg: "#d3d3d3" }}
            borderRadius="5px"
            onClick={() => setLabel({ name: "", color: "" })}
          >
            <DeleteIcon />
          </Box>
        </Tooltip>
      </Box>
    </Tooltip>
  );
}

export default MenuLabel;
