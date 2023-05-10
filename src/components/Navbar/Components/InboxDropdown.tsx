import {
  Button,
  Flex,
  Input,
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
import TypeProjectIcon from "../../../icons/TypeProjectIcon";

type SELECTED_PROPS = {
  selectedProject: {
    name: string;
    icon: JSX.Element;
  };
  setSelectedProject: React.Dispatch<
    React.SetStateAction<{
      name: string;
      icon: JSX.Element;
    }>
  >;
};

function InboxDropdown({
  selectedProject,
  setSelectedProject
}: SELECTED_PROPS) {
  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <Menu>
      <Tooltip hasArrow label="Select a project #" placement="top">
        <MenuButton
          as={Button}
          bg="white"
          border="1px solid gray.300"
          borderRadius="md"
          h="32px"
          px="1"
          color="gray"
          leftIcon={selectedProject.icon}
          rightIcon={<TypeProjectIcon />}
        >
          <Text fontSize="sm">{selectedProject.name}</Text>
        </MenuButton>
      </Tooltip>
      <MenuList p="0" minWidth="250px">
        <Input
          px="8px"
          fontSize="13px"
          placeholder="Type a project"
          focusBorderColor="#eee"
          borderRadius="none"
        />
        <MenuItem
          onClick={() =>
            setSelectedProject({
              name: "Inbox",
              icon: <InboxIcon fontSize="sm" color="#246fe0" />
            })
          }
        >
          <Flex justifyContent="space-between" alignItems="center" w="100%">
            <Flex alignItems="center">
              <InboxIcon fontSize="sm" color="#246fe0" />
              <Text ml="16px" fontSize="16px">
                Inbox
              </Text>
            </Flex>
            {selectedProject.name === "Inbox" && <TickIcon />}
          </Flex>
        </MenuItem>
        {projects.map((item) => (
          <MenuItem
            pl="16px"
            value={item.name}
            key={item._id}
            onClick={() =>
              setSelectedProject({
                name: item.name,
                icon: <ColorDotIcon color={item.color} />
              })
            }
          >
            <Flex justifyContent="space-between" alignItems="center" w="100%">
              <Flex alignItems="center">
                <ColorDotIcon color={item.color} />
                <Text fontSize="16px" ml="16px">
                  {item.name}
                </Text>
              </Flex>
              {selectedProject.name === item.name && <TickIcon />}
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default InboxDropdown;
