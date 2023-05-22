import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip
} from "@chakra-ui/react";
import ColorFlagIcon from "../../../icons/ColorFlagIcon";
import SmallFlag from "../../../icons/SmallFlag";
import TickIcon from "../../../icons/TickIcon";
import WhiteFlagIcon from "../../../icons/WhiteFlagIcon";
import { useState } from "react";
import DeleteIcon from "../../../icons/DeleteIcon";

const menuItemsPriority = [
  {
    number: "P1",
    color: "red"
  },
  {
    number: "P2",
    color: "orange"
  },
  {
    number: "P3",
    color: "blue"
  }
];

function MenuPriority() {
  const [selectedPriority, setSelectedPriority] = useState({
    number: "",
    color: ""
  });
  return (
    <Menu>
      <Tooltip hasArrow label="Set priority p1, p2, p3, p4" placement="top">
        <MenuButton
          _hover={{ bg: "#eee" }}
          as={Button}
          bg="white"
          border="1px"
          borderColor="gray.300"
          borderRadius="md"
          cursor="pointer"
          h="32px"
          mr="2"
          color="gray"
          pl="1"
          leftIcon={<SmallFlag color={selectedPriority.color} />}
          rightIcon={
            selectedPriority.number != "" ? (
              <Box
                onClick={(e) => {
                  e.stopPropagation(),
                    setSelectedPriority({
                      number: "",
                      color: ""
                    });
                }}
                bg="transparent"
                _hover={{ bg: "#d3d3d3" }}
                borderRadius="5px"
              >
                <DeleteIcon />
              </Box>
            ) : undefined
          }
        >
          <Text fontSize="sm" display="inline-block">
            {selectedPriority.number === ""
              ? "Priority"
              : selectedPriority.number}
          </Text>
        </MenuButton>
      </Tooltip>
      <MenuList p="0" minWidth="150px" overflowY="scroll">
        {menuItemsPriority.map((item) => (
          <MenuItem
            key={item.number}
            onClick={() =>
              setSelectedPriority({
                number: item.number,
                color: item.color
              })
            }
          >
            <ColorFlagIcon color={item.color} />
            <Text ml="2" mr="2">
              Priority {item.number.slice(-1)}
            </Text>
            {selectedPriority.number === item.number && (
              <TickIcon color="red" />
            )}
          </MenuItem>
        ))}
        <MenuItem
          onClick={() =>
            setSelectedPriority({
              number: "",
              color: ""
            })
          }
        >
          <WhiteFlagIcon />
          <Text ml="2" mr="2">
            {" "}
            Priority 4
          </Text>
          {selectedPriority.number === "" && <TickIcon color="red" />}
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MenuPriority;
