import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import FolderIcon from "../../../icons/FolderIcon";
import TodayIcon from "../../../icons/TodayIcon";
import TodoCalendar from "./TodoCalendar ";

function TodayCard() {
  const [showCard, setShowCard] = useState(false);
  return (
    <>
      <Flex ml="3" mt="2">
        <Flex
          onClick={() => {
            setShowCard(!showCard);
          }}
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
          <TodayIcon />
          <Text ml="1">Today</Text>
        </Flex>
        <Flex
          color="blue.400"
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
          <FolderIcon color="blue.500" />
          <Text color="blackAlpha.700" ml="1">
            Inbox
          </Text>
        </Flex>
      </Flex>
      {showCard ? <TodoCalendar /> : null}
    </>
  );
}

export default TodayCard;
