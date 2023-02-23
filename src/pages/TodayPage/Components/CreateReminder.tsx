import { Box, Button, Flex, Input, Text, useMediaQuery, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner";
import PlusIcon from "../../../icons/PlusIcon";
import { Axios } from "../../../utils/axios";
import { defaultToastProps, genericErrorToast } from "../../../utils/genericToast";
import { API } from "../../../utils/usedApi";
import MenuPriority from "./MenuPriority";
import MenuReminder from "./MenuReminder";
import MenuThreeDote from "./MenuThreeDote";
import MenuToday from "./MenuToday";
import ReminderCard from "./ReminderCard";
import { Reminder } from "./types";
import Welcome from "./Welcome";

function CreateReminder() {
  const toast = useToast();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [refreshGet, setRefreshGet] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [toDoData, setToDoData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
    label: "",
  });
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");
  const newUserData = {
    userId,
    ...toDoData,
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setToDoData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    Axios.post(API.addReminder, newUserData)
      .then((res) => {
        console.log(res);
        toast({
          ...defaultToastProps,
          title: "Reminder added succesfully.",
          status: "success",
        });
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });
    setRefreshGet(!refreshGet);
    setToDoData({
      title: "",
      description: "",
      date: "",
      priority: "",
      label: "",
    });
  };

  useEffect(() => {
    Axios.get(`${API.allReminder}/${userId}`)
      .then((res) => {
        setLoading(false);
        setReminders(res.data);
      })
      .catch((err) => {
        genericErrorToast(err, toast);
        setLoading(false);
      });
  }, [userId, refreshGet, toast]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        reminders.map((reminder: Reminder) => (
          <ReminderCard
            key={reminder._id}
            title={reminder.title}
            description={reminder.description}
            id={reminder._id}
            refreshGet={refreshGet}
            setRefreshGet={setRefreshGet}
          />
        ))
      )}

      {isAddTaskOpen ? (
        <Flex direction="column" w={isLargerThan800 ? "55%" : "80%"} mt="4">
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
                value={toDoData.title}
                onChange={handleOnChange}
                mt="3"
                variant="unstyled"
                placeholder="Task name"
                _placeholder={{ opacity: 1, color: "gray.500" }}
                name="title"
              />
              <Input
                name="description"
                mt="2"
                variant="unstyled"
                placeholder="Description"
                _placeholder={{ opacity: 1, color: "gray.500" }}
                value={toDoData.description}
                onChange={handleOnChange}
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
                setShowWelcome(true);
              }}
            >
              Cancel
            </Button>
            <Button
              color="white"
              bg={!toDoData.title.trim() ? "red.300" : "red.500"}
              disabled={!toDoData.title.trim()}
              _hover={!toDoData.title ? { bg: "" } : { bg: "red.700" }}
              onClick={submitHandler}
            >
              Add task
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex w={isLargerThan800 ? "55%" : "80%"} mt="2" alignItems="center" cursor="pointer">
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
              setShowWelcome(false);
            }}
          >
            New task
          </Flex>
        </Flex>
      )}
      {!loading && reminders.length === 0 && showWelcome && <Welcome />}
    </>
  );
}

export default CreateReminder;
