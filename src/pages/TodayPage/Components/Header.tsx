import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import Center from "./Center";
import Footer from "./Footer";
function Header() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const date = new Date();
  const options = { weekday: "short", day: "numeric", month: "short" };
  const today = date.toLocaleDateString("en-US");
  return (
    <>
      <Flex w="100%">
        <Box mt="12" ml="32" p="4">
          <Flex>
            <Text as="b" fontSize="xl" mr="2">
              Bugün
            </Text>
            <Text mt="2" fontSize="sm" color="gray">
              {today}
            </Text>
          </Flex>
          {!isAddTaskOpen && (
            <Flex mt="4">
              <Text mt="1">
                <AiOutlinePlus color="red" />
              </Text>
              {/* button a a her tikladiginda state i degistir, false ise true, true ise false yap */}

              <Text
                color="gray"
                ml="2"
                onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}
              >
                Görev Ekle
              </Text>
            </Flex>
          )}
        </Box>
        <Spacer />
        <Box m="4" p="4" mt="12" mr="32">
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
          <Box m="4" p="4" mt="12" mr="32">
            <Flex border="1px solid red" h="109px" w="800px">
              <Box p="4" bg="red.400">
                Box 1
              </Box>
              <Spacer />
              <Box p="4" bg="green.400">
                Box 2
              </Box>
            </Flex>
          </Box>
        )}
        {/* Burada Center dedigimiz component sadece gorev ekleme menusu aktif degilken gozukecek  */}
        {!isAddTaskOpen && (
          <Box m="4" p="4" mt="12" mr="32">
            <Center />
            <Footer />
          </Box>
        )}
      </Flex>
    </>
  );
}

export default Header;
