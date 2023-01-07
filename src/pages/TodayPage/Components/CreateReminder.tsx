import {
  Box,
  Button,
  Flex,
  Input,
  Spacer,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

import { useState } from "react";
import {
  AiFillFolderOpen,
  AiOutlineCalendar,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BiMessage, BiPencil } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

import Welcome from "./Center";

function CreateReminder() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [showTodoCard, setShowTodoCard] = useState(false);
  const [toDoData, setToDoData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
    label: "",
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setToDoData((prev) => ({ ...prev, [name]: value }));
  };
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const iconLists = ["🏷", "🏳", "⏲", "🧩"];
  const icons = [<BiPencil />, <AiOutlineCalendar />, <BiMessage />];

  const submitHandler = (e: any) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    const newUserData = {
      userId,
      ...toDoData,
    };
    console.log(newUserData);
    setShowTodoCard(!showTodoCard);
  };

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
          <Welcome />
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
                    />
                    <Input
                      variant='unstyled'
                      color='gray'
                      value={toDoData.description}
                      onChange={handleOnChange}
                      fontSize='xs'
                    />
                  </Flex>
                </Flex>
                <Spacer />
                <VStack spacing={4} align='stretch'>
                  <Flex>
                    {icons.map((icon2) => (
                      <Text fontSize='2xl' mr='3' _hover={{ bg: "gray.200" }}>
                        {icon2}
                      </Text>
                    ))}
                  </Flex>
                  <Flex
                    h='30px'
                    justifyContent='flex-end'
                    alignItems='flex-end'
                  >
                    <Text color='blackAlpha.700' mr='1' fontSize='sm'>
                      Klasör
                    </Text>
                    <AiFillFolderOpen color='blue' />
                  </Flex>
                </VStack>
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
                <Flex ml='3' mt='2'>
                  <Flex
                    border='1px'
                    borderColor='gray.300'
                    color='green'
                    p='2'
                    mr='2'
                    borderRadius='md'
                    w='80px'
                    h='30px'
                    alignItems='center'
                    justifyContent='center'
                    cursor='pointer'
                    _hover={{ bg: "gray.200" }}
                  >
                    <AiOutlineCalendar />
                    <Text ml='1'>Bugün</Text>
                  </Flex>
                  <Flex
                    color='blue.400'
                    border='1px'
                    borderColor='gray.300'
                    borderRadius='md'
                    p='2'
                    w='80px'
                    h='30px'
                    alignItems='center'
                    justifyContent='center'
                    cursor='pointer'
                    _hover={{ bg: "gray.200" }}
                  >
                    <AiFillFolderOpen />
                    <Text color='blackAlpha.700' ml='1'>
                      Klasör
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Spacer />
              <Flex
                alignItems='flex-end'
                justifyContent='flex-end'
                w='200px'
                mb='4'
              >
                {iconLists.map((icon) => (
                  <Text
                    fontSize='lg'
                    mr='4'
                    cursor='pointer'
                    _hover={{ bg: "gray.200" }}
                  >
                    {icon}
                  </Text>
                ))}
              </Flex>
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
      )}
    </>
  );
}

export default CreateReminder;
