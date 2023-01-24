import { Divider, Flex, Input, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import CouchIcon from "../../../icons/CouchIcon";
import DeleteIcon from "../../../icons/DeleteIcon";
import NewTodayIcon from "../../../icons/NewTodayIcon";
import NextWeekIcon from "../../../icons/NextWeekIcon";
import SunIcon from "../../../icons/SunIcon";
import UpsentIcon from "../../../icons/UpsentIcon";

function TodoCalendar() {
  const date = new Date(Date.now());
  const weeksDate = new Date(Date.now() + 3600 * 1000 * 24);
  const nextWeeks = new Date(Date.now() + 3600 * 1000 * 24 * 7);
  const formatNextWeekOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const formatTomorrowOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
  };
  const formatTodayOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const today = date.toLocaleDateString("en-US", formatTodayOptions);
  const tomorrow = weeksDate.toLocaleDateString("en-US", formatTomorrowOptions);
  const nextWeek = nextWeeks.toLocaleDateString("en-US", formatNextWeekOptions);
  const [todays, setTodays] = useState(today);
  const onChangeHandler = (e: any) => {
    e.preventDefault();
    setTodays("");
  };

  return (
    <Flex
      borderRadius='2px'
      border='1px solid'
      borderColor='gray.200'
      direction='column'
      ml='3'
      w='280px'
      bg='white'
    >
      <Flex p='2'>
        <Input
          value={todays}
          variant='unstyled'
          placeholder='Type a due date'
          onChange={onChangeHandler}
        />
        <DeleteIcon
          cursor='pointer'
          visibility={!todays ? "visible" : "hidden"}
        />
      </Flex>
      <Divider />
      <Flex direction='column'>
        <Flex cursor='pointer' _hover={{ bg: "gray.200" }} p='2'>
          <SunIcon color='orange' />
          <Text as='b' ml='2'>
            Tomorrow
          </Text>
          <Spacer />
          <Text color='gray'>{tomorrow}</Text>
        </Flex>
        <Flex cursor='pointer' _hover={{ bg: "gray.200" }} p='2'>
          <NewTodayIcon color='purple' />
          <Text as='b' ml='2'>
            Later this week
          </Text>
          <Spacer />
          <Text color='gray'>{tomorrow}</Text>
        </Flex>
        <Flex cursor='pointer' _hover={{ bg: "gray.200" }} p='2'>
          <CouchIcon color='blue' />
          <Text as='b' ml='2'>
            This weekend
          </Text>
          <Spacer />
          <Text color='gray'>{tomorrow}</Text>
        </Flex>
        <Flex cursor='pointer' _hover={{ bg: "gray.200" }} p='2'>
          <NextWeekIcon color='purple' />
          <Text as='b' ml='2'>
            Next week
          </Text>
          <Spacer />
          <Text color='gray'>{nextWeek}</Text>
        </Flex>
        <Flex cursor='pointer' _hover={{ bg: "gray.200" }} p='2'>
          <UpsentIcon />
          <Text as='b' ml='2'>
            No Date
          </Text>
        </Flex>
      </Flex>
      <Divider />
      <Flex cursor='pointer' p='2'>
        <Input type='date'></Input>
      </Flex>
      <Divider />
      <Text cursor='pointer' p='2' color='red'>
        + Add time
      </Text>
    </Flex>
  );
}

export default TodoCalendar;
