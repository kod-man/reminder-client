import { Button, Menu, MenuButton, MenuItem, MenuList, Text, Tooltip } from "@chakra-ui/react";
import ColorFlagIcon from "../../../icons/ColorFlagIcon";
import SmallFlag from "../../../icons/SmallFlag";
import TickIcon from "../../../icons/TickIcon";
import WhiteFlagIcon from "../../../icons/WhiteFlagIcon";

const menuItemsPriority = [
  {
    icon: <ColorFlagIcon color="red" />,
    text: "Priority 1",
  },
  {
    icon: <ColorFlagIcon color="orange" />,
    text: "Priority 2",
  },
  {
    icon: <ColorFlagIcon color="blue" />,
    text: "Priority 3",
  },
  {
    icon: <WhiteFlagIcon />,
    text: "Priority 4",
    icon2: <TickIcon color="red" />,
  },
];

function MenuPriority() {
  return (
    <Menu>
      <Tooltip hasArrow label="Set priority p1, p2, p3, p4" placement="top">
        <MenuButton
          as={Button}
          bg="white"
          border="1px"
          borderColor="gray.300"
          borderRadius="md"
          cursor="pointer"
          h="32px"
          mr="2"
          color="gray"
          p="0 0 0 1"
          leftIcon={<SmallFlag fontSize="sm" />}
        >
          <Text mr="2" fontSize="sm">
            Priority
          </Text>
        </MenuButton>
      </Tooltip>
      <MenuList p="0" minWidth="150px" overflowY="scroll">
        {menuItemsPriority.map((item) => (
          <MenuItem key={item.text}>
            {item.icon}
            <Text ml="2" mr="2">
              {item.text}
            </Text>
            {item.icon2}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuPriority;
