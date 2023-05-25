import { Box, Button, Text } from "@chakra-ui/react";
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
    <Button
      bg="white"
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      cursor="pointer"
      h="32px"
      mr="2"
      px="0"
      color="gray"
      _hover={{ bg: "#eee" }}
      leftIcon={<MiniLabelIcon color={label.color} />}
      rightIcon={
        <Box
          bg="transparent"
          _hover={{ bg: "#d3d3d3" }}
          borderRadius="5px"
          onClick={() => setLabel({ name: "", color: "" })}
        >
          <DeleteIcon />
        </Box>
      }
    >
      <Text px="0" fontSize="sm">
        {label.name}
      </Text>
    </Button>
  );
}

export default MenuLabel;
