import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../..";
import ColorDotIcon from "../../../icons/ColorDotIcon";

import InboxIcon from "../../../icons/InboxIcon";
import TickIcon from "../../../icons/TickIcon";

function InboxDropdown() {
  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <Menu>
      <Tooltip hasArrow label="Select a project #" placement="top">
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
          leftIcon={<InboxIcon fontSize="sm" color="#246fe0" />}
        >
          <Text mr="2" fontSize="sm">
            Inbox
          </Text>
        </MenuButton>
      </Tooltip>
      <MenuList p="0" minWidth="150px" overflowY="scroll">
        {projects.map((item) => (
          <MenuItem key={item._id}>
            <Flex justifyContent="space-between" alignItems="center" w="250px">
              <Flex alignItems="center">
                <ColorDotIcon color={item.color} />
                <Text fontSize="16px">{item.name} </Text>
              </Flex>
              <TickIcon />
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default InboxDropdown;
