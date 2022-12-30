import {
  Box,
  Button,
  Flex,
  Input,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  AiFillFolderOpen,
  AiOutlineCalendar,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import Centere from "./Center";
function CreateReminder() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const iconLists = [" 🏷", "  🏳", "⏲", "🧩"];
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
              <Box
                display='flex'
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
              </Box>
            </Flex>
          </Box>
          <Flex justifyContent='flex-end' mt='3'>
            <Button mr='4' onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}>
              İptal
            </Button>
            <Button
              color='white'
              bg={!taskName ? "red.300" : "red.500"}
              disabled={!taskName.trim()}
              _hover={!taskName ? { bg: "" } : { bg: "red.700" }}
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
