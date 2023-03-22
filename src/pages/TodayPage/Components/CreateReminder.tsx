import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useMediaQuery,
  useToast
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../..";
import Spinner from "../../../components/Spinner";
import PlusIcon from "../../../icons/PlusIcon";
import { refreshTodos } from "../../../store/Reminder/ReminderSlice";
import { Axios } from "../../../utils/axios";
import {
  defaultToastProps,
  genericErrorToast
} from "../../../utils/genericToast";
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
  const dispatch = useDispatch();
  const refresh = useSelector((state: RootState) => state.reminder);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const [toDoData, setToDoData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
    label: ""
  });
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");

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

  useEffect(() => {
    Axios.get(`${API.getAllReminders}/${userId}`)
      .then((res) => {
        setLoading(false);
        setReminders(res.data);
      })
      .catch((err) => {
        genericErrorToast(err, toast);
        setLoading(false);
      });
  }, [userId, refresh, toast, dispatch]);
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
                setShowWelcome(true);
              }}
            >
              Cancel
            </Button>
            <Button
              color="white"
              bg={!titleRef.current?.value ? "red.300" : "red.500"}
              disabled={!titleRef.current?.value.trim()}
              _hover={!titleRef.current?.value ? { bg: "" } : { bg: "red.700" }}
              onClick={submitHandler}
            >
              Add task
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex
          w={isLargerThan800 ? "55%" : "80%"}
          mt="2"
          alignItems="center"
          cursor="pointer"
        >
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
