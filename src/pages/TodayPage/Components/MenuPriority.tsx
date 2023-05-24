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
import DeleteIcon from "../../../icons/DeleteIcon";

const menuItemsPriority = [
  {
    prio: "P1",
    color: "red"
  },
  {
    prio: "P2",
    color: "orange"
  },
  {
    prio: "P3",
    color: "blue"
  }
];
type PRIORİTY_PROPS = {
  selectedPriority: {
    prio: string;
    color: string;
  };
  setSelectedPriority: React.Dispatch<
    React.SetStateAction<{
      prio: string;
      color: string;
    }>
  >;
};

function MenuPriority({
  selectedPriority,
  setSelectedPriority
}: PRIORİTY_PROPS) {
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
            selectedPriority.prio ? (
              <Box
                onClick={(e) => {
                  e.stopPropagation(),
                    setSelectedPriority({
                      prio: "",
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
          <Text fontSize="sm">
            {selectedPriority.prio ? selectedPriority.prio : "Priority"}
          </Text>
        </MenuButton>
      </Tooltip>
      <MenuList p="0" minWidth="150px" overflowY="scroll">
        {menuItemsPriority.map(({ prio, color }) => (
          <MenuItem
            key={prio}
            onClick={() =>
              setSelectedPriority({
                prio,
                color
              })
            }
          >
            <ColorFlagIcon color={color} />
            <Text ml="2" mr="2">
              Priority {prio.slice(-1)}
            </Text>
            {selectedPriority.prio === prio && <TickIcon color="red" />}
          </MenuItem>
        ))}
        <MenuItem
          onClick={() =>
            setSelectedPriority({
              prio: "",
              color: ""
            })
          }
        >
          <WhiteFlagIcon />
          <Text ml="2" mr="2">
            Priority 4
          </Text>
          {!selectedPriority.prio && <TickIcon color="red" />}
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MenuPriority;
