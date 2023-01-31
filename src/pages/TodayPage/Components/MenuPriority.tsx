import {
  Menu,
  Tooltip,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import ColorFlagIcon from "../../../icons/ColorFlagIcon";
import Flag2Icon from "../../../icons/Flag2Icon";
import TickIcon from "../../../icons/TickIcon";
import WhiteFlagIcon from "../../../icons/WhiteFlagIcon";

const menuItemsPriority = [
  {
    icon: <ColorFlagIcon color='red' />,
    text: "Priority 1",
  },
  {
    icon: <ColorFlagIcon color='orange' />,
    text: "Priority 2",
  },
  {
    icon: <ColorFlagIcon color='blue' />,
    text: "Priority 3",
  },
  {
    icon: <WhiteFlagIcon />,
    text: "Priority 4",
    icon2: <TickIcon color='red' />,
  },
];

function MenuPriority() {
  return (
    <Menu>
      <Tooltip hasArrow label='Set priority p1, p2, p3, p4' placement='top'>
        <MenuButton
          as={Button}
          bg='white'
          border='1px'
          borderColor='gray.300'
          borderRadius='md'
          alignItems='center'
          justifyContent='center'
          cursor='pointer'
          h='32px'
          mr='2'
          color='gray'
          p='0'
          pl='1'
          leftIcon={<Flag2Icon fontSize='sm' />}
        >
          <Text ml='-1' mr='2' fontSize='sm' fontFamily='inherit'>
            Priority
          </Text>
        </MenuButton>
      </Tooltip>
      <MenuList p='0' minWidth='150px' overflowY='scroll'>
        {menuItemsPriority.map((item) => (
          <MenuItem key={item.text}>
            {item.icon}
            <Text ml='2' mr='2'>
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
