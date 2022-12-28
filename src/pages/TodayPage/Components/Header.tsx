import { Box, Button, Flex, Input, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  AiFillFolderOpen,
  AiOutlineCalendar,
  AiOutlineMenu,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import Center from "./Center";
import Footer from "./Footer";
function Header() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const date = new Date();
  const options = { weekday: "short", day: "numeric", month: "short" };
  const today = date.toLocaleDateString("en-US");
  return (
    <>
      <Flex w="100%">
        <Box mt="12" ml={isAddTaskOpen ? "320px" : "300px"} p="4">
          <Flex>
            <Text as="b" fontSize="xl" mr="2">
              Bugün
            </Text>
            <Text mt="2" fontSize="sm" color="gray">
              {today}
            </Text>
          </Flex>
          {!isAddTaskOpen && (
            <Flex
              mt="4"
              alignItems="center"
              _hover={{ color: "red" }}
              cursor="pointer"
            >
              <Text
                _hover={{ bg: "red", color: "white" }}
                onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}
                borderRadius="100%"
                bg="white"
                color="red"
              >
                <AiOutlinePlusCircle />
              </Text>
              {/* button a a her tikladiginda state i degistir, false ise true, true ise false yap */}

              <Text
                color="gray"
                ml="2"
                onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}
                // _hover={{ bg: "red" }}
              >
                Görev Ekle
              </Text>
            </Flex>
          )}
        </Box>
        <Spacer />
        <Box m="4" p="4" mr={isAddTaskOpen ? "320px" : "300px"} mt="12">
          <Flex>
            <Text mt="1">
              <AiOutlineMenu color="gray" />
            </Text>
            <Text fontSize="sm" ml="1" color="gray">
              Görüntüle
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex>
        {/* Burada Gorev eklemeyi koyucaz cunku state artik true, yani gorev ekleme menusu aktif  */}
        {isAddTaskOpen && (
          <Flex direction="column">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Flex
                border="1px"
                borderColor="gray.300"
                h="120px"
                w="850px"
                borderRadius="xl"
              >
                <Box w="200px">
                  <Input
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    ml="3"
                    mt="3"
                    variant="unstyled"
                    placeholder="Görev ismi"
                    _placeholder={{ opacity: 1, color: "gray.500" }}
                  />
                  <Input
                    mt="2"
                    ml="3"
                    variant="unstyled"
                    placeholder="Açıklama"
                    _placeholder={{ opacity: 1, color: "gray.500" }}
                  />
                  <Flex direction="row" ml="3" mt="2">
                    <Flex
                      border="1px"
                      borderColor="gray.300"
                      color="green"
                      p="2"
                      mr="2"
                      borderRadius="md"
                      w="80px"
                      h="30px"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      _hover={{ bg: "gray.200" }}
                    >
                      <AiOutlineCalendar />
                      <Text ml="1">Bugün</Text>
                    </Flex>
                    <Flex
                      color="blue.400"
                      flexDirection="row"
                      border="1px"
                      borderColor="gray.300"
                      borderRadius="md"
                      p="2"
                      w="80px"
                      h="30px"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      _hover={{ bg: "gray.200" }}
                    >
                      <AiFillFolderOpen />
                      <Text color="blackAlpha.700" ml="1">
                        Klasör
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
                <Spacer />
                <Box
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="flex-end"
                  w="200px"
                  mb="4"
                >
                  <Text fontSize="lg" mr="4">
                    🏷
                  </Text>
                  <Text fontSize="lg" mr="4">
                    🏳
                  </Text>
                  <Text fontSize="lg" mr="4">
                    ⏲
                  </Text>
                  <Text fontSize="lg" mr="4">
                    🧩
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Flex justifyContent="flex-end" mt="3">
              <Button mr="4" onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}>
                İptal
              </Button>
              <Button
                color="white"
                bg={!taskName ? "red.300" : "red"}
                disabled={!taskName.trim() || taskName.length < 1}
              >
                Görev ekle
              </Button>
            </Flex>
          </Flex>
        )}
        {/* Burada Center dedigimiz component sadece gorev ekleme menusu aktif degilken gozukecek  */}
        {!isAddTaskOpen && (
          <Flex alignItems="center" direction="column">
            <Center />
            <Footer />
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default Header;
