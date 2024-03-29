import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text,
  useToast
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import InboxIcon from "../icons/InboxIcon";
import PlusIcon from "../icons/PlusIcon";
import MenuPriority from "../pages/TodayPage/Components/MenuPriority";
import MenuReminder from "../pages/TodayPage/Components/MenuReminder";
import MenuThreeDote from "../pages/TodayPage/Components/MenuThreeDote";
import MenuToday from "../pages/TodayPage/Components/MenuToday";
import { refreshTodos } from "../store/Reminder/ReminderSlice";
import { Axios } from "../utils/axios";
import { defaultToastProps, genericErrorToast } from "../utils/genericToast";
import { API } from "../utils/usedApi";
import InboxDropdown from "./Navbar/Components/InboxDropdown";
import MenuLabel from "../pages/TodayPage/Components/MenuLabel";

function CreateNewTask() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const userId = sessionStorage.getItem("userId");
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const [toDoData, setToDoData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
    label: ""
  });
  const [selectedProject, setSelectedProject] = useState({
    name: "Inbox",
    icon: <InboxIcon fontSize="sm" color="#246fe0" />
  });
  const [selectedPriority, setSelectedPriority] = useState({
    prio: "",
    color: ""
  });
  const [selectedLabel, setSelectedLabel] = useState({ name: "", color: "" });
  const toast = useToast();
  const dispatch = useDispatch();
  const submitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const newUserData = {
      userId,
      ...toDoData,
      label: selectedLabel.name,
      priority: selectedPriority.prio,
      title: titleRef.current?.value,
      description: descriptionRef.current?.value
    };
    if (titleRef.current?.value) {
      Axios.post(API.addReminder, newUserData)
        .then(() => {
          toast({
            ...defaultToastProps,
            title: "Reminder added succesfully.",
            status: "success"
          });
          dispatch(refreshTodos());
        })
        .catch((err) => {
          genericErrorToast(err, toast);
        });
      setToDoData({
        title: "",
        description: "",
        date: "",
        priority: "",
        label: ""
      });
    } else {
      toast({
        ...defaultToastProps,
        title: "Title is required",
        status: "error"
      });
    }
  };

  return (
    <>
      {isAddTaskOpen ? (
        <Flex
          direction="column"
          w="100%"
          mt="4"
          border="1px solid"
          borderColor="gray.300"
          borderRadius={10}
        >
          <Flex pl={3} alignItems="center" direction="column">
            <Box w="100%">
              <Input
                ref={titleRef}
                mt="3"
                variant="unstyled"
                placeholder="Task name"
                _placeholder={{ opacity: 1, color: "gray.500" }}
                name="title"
              />
              <Input
                ref={descriptionRef}
                name="description"
                mt="2"
                variant="unstyled"
                placeholder="Description"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
            </Box>
            <Flex w="100%" my="3" flexWrap="wrap">
              <MenuToday />
              <MenuPriority
                selectedPriority={selectedPriority}
                setSelectedPriority={setSelectedPriority}
              />
              <MenuReminder />
              <MenuLabel label={selectedLabel} setLabel={setSelectedLabel} />
              <MenuThreeDote setLabel={setSelectedLabel} />
            </Flex>
          </Flex>
          <Divider />
          <Flex justifyContent="space-between" alignItems="center" m="7px">
            <InboxDropdown
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
            <Flex>
              <Button
                mr="4"
                onClick={() => {
                  setIsAddTaskOpen(!isAddTaskOpen);
                }}
              >
                Cancel
              </Button>
              <Button
                color="white"
                bg="red.500"
                _hover={{ bg: "red.700" }}
                onClick={submitHandler}
              >
                Add task
              </Button>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex w="100%" mt="2" alignItems="center" cursor="pointer">
          <Text
            _hover={{ bg: "red", color: "white" }}
            onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}
            borderRadius="100%"
            color="red"
          >
            <PlusIcon />
          </Text>
          <Flex
            color="gray"
            ml="2"
            _hover={{ color: "red" }}
            onClick={() => {
              setIsAddTaskOpen(true);
            }}
          >
            New task
          </Flex>
        </Flex>
      )}
    </>
  );
}

export default CreateNewTask;
