import {
  Box,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text
} from "@chakra-ui/react";
import ArrowIcon from "../../../icons/ArrowIcon";
import JigsawIcon from "../../../icons/JigsawIcon";
import TicketIcon from "../../../icons/TicketIcon";

const menuItemsThreeDote = [
  {
    icon: <TicketIcon />,
    text: "Labels",
    sign: "@",
    hasDivider: false
  },
  {
    icon: <ArrowIcon />,
    text: "Move to project",
    sign: "#",
    hasDivider: true
  },
  {
    icon: <JigsawIcon />,
    text: "Add extension...",
    hasDivider: true
  }
];

function MenuThreeDote() {
  return (
    <Menu>
      <MenuButton
        bg="white"
        border="1px"
        borderColor="gray.300"
        borderRadius="md"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        h="32px"
        p="0"
        minWidth="32px"
      >
        <Text
          display="flex"
          justifyContent="center"
          fontSize="2xl"
          mb="3"
          color="gray"
        >
          ...
        </Text>
      </MenuButton>
      <MenuList>
        {menuItemsThreeDote.map((item) => (
          <Box key={item.text}>
            <MenuItem>
              {item.icon}
              <Text ml="2">{item.text}</Text>
              <Spacer />
              {item.sign ? item.sign : null}
            </MenuItem>
            {item.hasDivider ? <Divider /> : null}
          </Box>
        ))}
        <MenuItem color="red">Edit task actions</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MenuThreeDote;
