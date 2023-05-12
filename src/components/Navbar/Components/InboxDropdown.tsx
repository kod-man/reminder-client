import {
  Box,
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
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../..";
import ColorDotIcon from "../../../icons/ColorDotIcon";
import InboxIcon from "../../../icons/InboxIcon";
import TickIcon from "../../../icons/TickIcon";
import TypeProjectIcon from "../../../icons/TypeProjectIcon";
import PlusIcon from "../../../icons/PlusIcon";
import { API } from "../../../utils/usedApi";
import { Axios } from "../../../utils/axios";
import { refreshPage } from "../../../store/Refresh/RefreshSlice";

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
  const projectData = {
    name: "",
    color: "gray",
    userId: sessionStorage.getItem("userId"),
    isFavorite: false
  };
  const projects = useSelector((state: RootState) => state.projects.projects);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const inputReference = useRef<HTMLInputElement>(null);
  const doesInclude = (value: string) => {
    return value.toLowerCase().includes(searchTerm.toLowerCase());
  };
  const filterProjects = projects.filter((val) => {
    if (searchTerm == "" || doesInclude(val.name)) {
      return val;
    }
  });
  const submitHandler = () => {
    Axios.post(API.addProject, { ...projectData, name: searchTerm });

    dispatch(refreshPage("Projects"));
  };
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
        <Box>
          <Input
            type="text"
            ref={inputReference}
            px="8px"
            fontSize="13px"
            placeholder="Type a project"
            focusBorderColor="#eee"
            borderRadius="none"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </Box>

        {searchTerm == "" || doesInclude("Inbox") ? (
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
        ) : (
          false
        )}
        {filterProjects.map((item) => (
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
        {filterProjects.length == 0 &&
        !doesInclude("Inbox") &&
        searchTerm.length != 0 ? (
          <Box fontSize="13px">
            <Text p="7px 0" m="0 8px" color="#555">
              Project not found
            </Text>
            <Text
              onClick={() => submitHandler()}
              _hover={{ cursor: "pointer" }}
              p="4px 8px"
              display="flex"
              alignItems="center"
              fontWeight="600"
            >
              <Box display="inline-block" mr="10px">
                <PlusIcon />
              </Box>
              Create "{searchTerm}"
            </Text>
          </Box>
        ) : null}
      </MenuList>
    </Menu>
  );
}

export default InboxDropdown;
