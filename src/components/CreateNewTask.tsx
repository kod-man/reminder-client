import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PlusIcon from "../icons/PlusIcon";
import MenuPriority from "../pages/TodayPage/Components/MenuPriority";
import MenuReminder from "../pages/TodayPage/Components/MenuReminder";
import MenuThreeDote from "../pages/TodayPage/Components/MenuThreeDote";
import MenuToday from "../pages/TodayPage/Components/MenuToday";
import { refreshTodos } from "../store/Reminder/ReminderSlice";
import { Axios } from "../utils/axios";
import { defaultToastProps, genericErrorToast } from "../utils/genericToast";
import { API } from "../utils/usedApi";

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
  const toast = useToast();
  const dispatch = useDispatch();
  const submitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const newUserData = {
      userId,
      ...toDoData,
      title: titleRef.current?.value,
      description: descriptionRef.current?.value
    };

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
  };

  return (
    <>
      {isAddTaskOpen ? (
        <Flex direction="column" w="100%" mt="4">
          <Flex
            pl={3}
            alignItems="center"
            direction="column"
            border="1px solid"
            borderColor="gray.300"
            borderRadius={10}
          >
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
            <Flex w="100%" my="3">
              <MenuToday />
              <MenuPriority />
              <MenuReminder />
              <MenuThreeDote />
            </Flex>
          </Flex>
          <Flex justifyContent="flex-end" mt="3">
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
              bg={!titleRef.current?.value ? "red.300" : "red.500"}
              _hover={!titleRef.current?.value ? { bg: "" } : { bg: "red.700" }}
              onClick={submitHandler}
            >
              Add task
            </Button>
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
