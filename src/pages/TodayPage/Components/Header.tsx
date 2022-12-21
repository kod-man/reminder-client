import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";

function Header() {
  return (
    <Flex border="1px" borderColor="red" w="100%">
      <Box mt="12" ml="32" p="4" bg="red.400">
        <Flex>
          <Text as="b" fontSize="xl" mr="2">
            Bugün
          </Text>
          <Text mt="2" fontSize="sm" color="gray">
            Çar 21 Dec
          </Text>
        </Flex>
        <Flex mt="4">
          <Text mt="1">
            <AiOutlinePlus color="red" />
          </Text>

          <Text color="gray" ml="2">
            Görev Ekle
          </Text>
        </Flex>
      </Box>
      <Spacer />
      <Box m="4" p="4" bg="green.400" mt="12" mr="32">
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
  );
}

export default Header;
