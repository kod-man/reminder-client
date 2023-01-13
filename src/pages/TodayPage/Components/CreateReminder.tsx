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
import { BsThreeDots } from "react-icons/bs";
import { Axios } from "../../../utils/axios";
import {
  defaultToastProps,
  genericValidationToast,
  genericServerToast,
} from "../../../utils/genericToast";
import { API } from "../../../utils/usedApi";
import Welcome from "./Center";
import IconsBar from "./IconsBar";
import IconsCard from "./IconsCard";
import TodayCard from "./TodayCard";

function CreateReminder() {
  const toast = useToast();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [showTodoCard, setShowTodoCard] = useState(false);
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

    setShowTodoCard(!showTodoCard);
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
  }, [userId]);
  return (
    <>
      {!isAddTaskOpen && (
        <>
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
              onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}
            >
              Görev Ekle
            </Flex>
          </Flex>
          {!loading && reminders.length === 0 && <Welcome />}
        </>
      )}
      {isAddTaskOpen && (
        <Flex direction='column' w={isLargerThan800 ? "60%" : "80%"} mt='4'>
          {showTodoCard && (
            <Flex w='100%' mb='2'>
              <Flex
                borderBottom='1px solid'
                borderColor='gray.200'
                w='100%'
                h='80px'
                cursor='pointer'
              >
                <Flex>
                  <Flex
                    border='1px solid gray'
                    borderRadius='100%'
                    w='20px'
                    h='20px'
                  ></Flex>
                  <Flex ml='2' direction='column'>
                    <Input
                      variant='unstyled'
                      value={toDoData.title}
                      onChange={handleOnChange}
                      name='title'
                    />
                    <Input
                      variant='unstyled'
                      color='gray'
                      value={toDoData.description}
                      onChange={handleOnChange}
                      fontSize='xs'
                      name='description'
                    />
                  </Flex>
                </Flex>
                <Spacer />
                <IconsBar />
              </Flex>

              <Flex h='20px' mt='1' _hover={{ bg: "gray.200" }}>
                <BsThreeDots />
              </Flex>
            </Flex>
          )}
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
            <Button mr='4'>
              {/* onClick={() => setIsAddTaskOpen(!isAddTaskOpen)} */}
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
      )}
    </>
  );
}

export default CreateReminder;
