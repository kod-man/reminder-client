import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import ClockIcon from "../../../icons/ClockIcon";
import Flag2Icon from "../../../icons/Flag2Icon";
import TodayIcon from "../../../icons/TodayIcon";
import TreeDoteIcon from "../../../icons/TreeDoteIcon";
import TodoCalendar from "./TodoCalendar ";
import TodoFlag from "./TodoFlag";

function TodayCard() {
  const [showTodayCard, setShowTodayCard] = useState(false);
  const [showPriorityCard, setShowPriorityCard] = useState(false);
  return (
    <>
      <Flex w='100vh' ml='3' mt='2'>
        <Flex
          onClick={() => {
            setShowTodayCard(!showTodayCard);
          }}
          border='1px'
          borderColor='gray.300'
          color='green'
          p='2'
          mr='2'
          borderRadius='md'
          h='30px'
          alignItems='center'
          justifyContent='center'
          cursor='pointer'
          _hover={{ bg: "gray.200" }}
        >
          <TodayIcon />
          <Text ml='1'>Today</Text>
        </Flex>
        <Flex
          onClick={() => {
            setShowPriorityCard(!showPriorityCard);
          }}
          mr='2'
          border='1px'
          borderColor='gray.300'
          borderRadius='md'
          p='2'
          h='30px'
          alignItems='center'
          justifyContent='center'
          cursor='pointer'
          _hover={{ bg: "gray.200" }}
        >
          <Flag2Icon />
          <Text color='gray' ml='1'>
            Priority
          </Text>
        </Flex>
        <Flex
          cursor='pointer'
          mr='2'
          border='1px'
          borderColor='gray.300'
          borderRadius='md'
          p='2'
          h='30px'
          alignItems='center'
          justifyContent='center'
          _hover={{ bg: "gray.200" }}
        >
          <ClockIcon />
          <Text color='gray' ml='1'>
            Reminders
          </Text>
        </Flex>
        <Flex
          border='1px'
          borderColor='gray.300'
          borderRadius='md'
          p='2'
          h='30px'
          alignItems='center'
          justifyContent='center'
          cursor='pointer'
          _hover={{ bg: "gray.200" }}
        >
          <TreeDoteIcon />
        </Flex>
      </Flex>
      {showTodayCard ? <TodoCalendar /> : null}
      {showPriorityCard ? <TodoFlag /> : null}
    </>
  );
}

export default TodayCard;
