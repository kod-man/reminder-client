import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";

function Header() {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <Flex w="75%">
      <Box mt="12" ml="32" p="4">
        <Flex>
          <Text as="b" fontSize="xl" mr="2">
            Bugün
          </Text>
          <Text mt="2" fontSize="sm" color="gray">
            {formattedDate}
          </Text>
        </Flex>
        <Flex mt="4" cursor="pointer">
          <Text mt="1">
            <AiOutlinePlus color="red" />
          </Text>

          <Text color="gray" mt="-2" ml="2" _hover={{ color: "#E53E3E" }}>
            <Button variant="ghost">Görev Ekle</Button>
          </Text>
        </Flex>
      </Box>
      <Spacer />
      <Box m="4" p="4" mt="12" mr="32">
        <Flex
          _hover={{ bg: "#EDF2F7" }}
          cursor="pointer"
          p="1"
          borderRadius="6"
        >
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
