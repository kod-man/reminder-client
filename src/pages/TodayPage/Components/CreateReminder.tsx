import {
  Box,
  Button,
  Flex,
  Input,
  Spacer,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Axios } from "../../../utils/axios";
import {
  defaultToastProps,
  genericValidationToast,
  genericServerToast,
} from "../../../utils/genericToast";
import { API } from "../../../utils/usedApi";
import Welcome from "./Center";
import IconsCard from "./IconsCard";
import ReminderCard from "./ReminderCard";
import TodayCard from "./TodayCard";
import { Reminder } from "./types";

function CreateReminder() {
  const toast = useToast();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [refreshGet, setRefreshGet] = useState(false);
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
  const submitHandler = (e: any) => {
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
        if (err.response) {
          console.log(err.response.data.message);
          genericValidationToast(toast, err);
        } else {
          console.log(err);
          genericServerToast(toast);
        }
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
        const data = res.data;
        setReminders(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
        } else {
          console.log(err);
        }
        setLoading(false);
      });
  }, [userId, refreshGet]);
  return (
    <>
      {!loading && reminders.length === 0 && <Welcome />}
      {reminders.map((reminder: Reminder) => (
        <ReminderCard
          key={reminder._id}
          title={reminder.title}
          description={reminder.description}
        />
      ))}

      {isAddTaskOpen ? (
        <Flex direction='column' w={isLargerThan800 ? "60%" : "80%"} mt='4'>
          <Box
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
          >
            <Flex
              border='1px'
              borderColor='gray.300'
              h='120px'
              w='100%'
              borderRadius='xl'
            >
              <Box w='200px'>
                <Input
                  value={toDoData.title}
                  onChange={handleOnChange}
                  ml='3'
                  mt='3'
                  variant='unstyled'
                  placeholder='Görev ismi'
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  name='title'
                />
                <Input
                  name='description'
                  mt='2'
                  ml='3'
                  variant='unstyled'
                  placeholder='Açıklama'
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  value={toDoData.description}
                  onChange={handleOnChange}
                />
                <TodayCard />
              </Box>
              <Spacer />
              <IconsCard />
            </Flex>
          </Box>
          <Flex justifyContent='flex-end' mt='3'>
            <Button mr='4' onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}>
              İptal
            </Button>
            <Button
              color='white'
              bg={!toDoData.title.trim() ? "red.300" : "red.500"}
              disabled={!toDoData.title.trim()}
              _hover={!toDoData.title ? { bg: "" } : { bg: "red.700" }}
              onClick={submitHandler}
            >
              Görev ekle
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex
          w={isLargerThan800 ? "60%" : "80%"}
          mt='2'
          alignItems='center'
          cursor='pointer'
        >
          <Text
            _hover={{ bg: "red", color: "white" }}
            onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}
            borderRadius='100%'
            color='red'
          >
            <AiOutlinePlusCircle />
          </Text>
          <Flex
            color='gray'
            ml='2'
            _hover={{ color: "red" }}
            onClick={() => setIsAddTaskOpen(true)}
          >
            Görev Ekle
          </Flex>
        </Flex>
      )}
    </>
  );
}

export default CreateReminder;
