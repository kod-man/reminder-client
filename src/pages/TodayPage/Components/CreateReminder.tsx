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
import { BiPencil, BiMessage } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaDiceSix } from "react-icons/fa";
import Centere from "./Center";

function CreateReminder() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [goster, setGoster] = useState(false);
  const [gosterFlex, setGosterFlex] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [explanation, setExplanation] = useState("");

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const iconLists = ["🏷", "🏳", "⏲", "🧩"];
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
          <Centere />
        </>
      )}
      {isAddTaskOpen && (
        <Flex direction='column' w={isLargerThan800 ? "60%" : "80%"} mt='4'>
          {gosterFlex && (
            <Flex w='100%'>
              {!goster && (
                <Flex
                  justifyContent='center'
                  alignItems='center'
                  mr='3'
                  mt='-8'
                >
                  <FaDiceSix color='gray' />
                </Flex>
              )}
              <Flex
                borderBottom='1px solid'
                borderColor='gray.200'
                w='100%'
                h='80px'
                mt='8'
                cursor='pointer'
                onMouseUp={() => setGoster(!goster)}
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
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                    />
                    <Input
                      variant='unstyled'
                      value={explanation}
                      onChange={(e) => e.target.value}
                    />
                  </Flex>
                </Flex>
                <Spacer />
                <VStack spacing={4} align='stretch'>
                  {!goster && (
                    <Flex>
                      <Text fontSize='2xl' mr='3' _hover={{ bg: "gray.200" }}>
                        <BiPencil />
                      </Text>
                      <Text fontSize='2xl' mr='3' _hover={{ bg: "gray.200" }}>
                        <AiOutlineCalendar />
                      </Text>
                      <Text fontSize='2xl' _hover={{ bg: "gray.200" }}>
                        <BiMessage />
                      </Text>
                    </Flex>
                  )}
                  <Flex
                    h='30px'
                    justifyContent='flex-end'
                    alignItems='flex-end'
                  >
                    <Text color='blackAlpha.700' mr='1' fontSize='sm'>
                      Klasör
                    </Text>
                    <AiFillFolderOpen />
                  </Flex>
                </VStack>
              </Flex>

              <Flex
                h='30px'
                justifyContent='center'
                alignItems='center'
                ml='3'
                mt='6'
                _hover={{ bg: "gray.200" }}
                display='none'
              >
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
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  ml='3'
                  mt='3'
                  variant='unstyled'
                  placeholder='Görev ismi'
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <Input
                  mt='2'
                  ml='3'
                  variant='unstyled'
                  placeholder='Açıklama'
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
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
              bg={!taskName.trim() ? "red.300" : "red.500"}
              disabled={!taskName.trim()}
              _hover={!taskName ? { bg: "" } : { bg: "red.700" }}
              onClick={() => setGosterFlex(!gosterFlex)}
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
