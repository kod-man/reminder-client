import { Flex, Input, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import CouchIcon from "../../../icons/CouchIcon";
import DeleteIcon from "../../../icons/DeleteIcon";
import NewTodayIcon from "../../../icons/NewTodayIcon";
import NextWeekIcon from "../../../icons/NextWeekIcon";
import SunIcon from "../../../icons/SunIcon";
import UpsentIcon from "../../../icons/UpsentIcon";

function NewTodayCard() {
  const date = new Date(Date.now());
  const weeksDate = new Date(Date.now() + 3600 * 1000 * 24);
  const nextWeeks = new Date(Date.now() + 3600 * 1000 * 24 * 7);
  const options3: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const options2: Intl.DateTimeFormatOptions = {
    weekday: "short",
  };
  const options1: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const today = date.toLocaleDateString("en-US", options1);
  const tomorrow = weeksDate.toLocaleDateString("en-US", options2);
  const nextWeek = nextWeeks.toLocaleDateString("en-US", options3);
  const [todays, setTodays] = useState(today);
  const deleteHandler = (e: any) => {
    e.preventDefault();
    setTodays("");
  };

  return (
    <Flex
      borderRadius='2%'
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
          placeholder='Bir bitiş tarihi gir'
          spellCheck='false'
          onChange={deleteHandler}
        />
        <DeleteIcon
          cursor='pointer'
          visibility={!todays ? "visible" : "hidden"}
        />
      </Flex>
      <hr />
      <Flex direction='column'>
        <Flex cursor='pointer' _hover={{ bg: "gray.200" }} p='2'>
          <SunIcon color='orange' />
          <Text as='b' ml='2'>
            Yarın
          </Text>
          <Spacer />
          <Flex color='gray'>{tomorrow}</Flex>
        </Flex>
        <Flex cursor='pointer' _hover={{ bg: "gray.200" }} p='2'>
          <NewTodayIcon color='purple' />
          <Text as='b' ml='2'>
            Bu hafta içinde
          </Text>
          <Spacer />
          <Flex color='gray'>{tomorrow}</Flex>
        </Flex>
        <Flex cursor='pointer' _hover={{ bg: "gray.200" }} p='2'>
          <CouchIcon color='blue' />
          <Text as='b' ml='2'>
            Bu hafta sonu
          </Text>
          <Spacer />
          <Flex color='gray'>{tomorrow}</Flex>
        </Flex>
        <Flex cursor='pointer' _hover={{ bg: "gray.200" }} p='2'>
          <NextWeekIcon color='purple' />
          <Text as='b' ml='2'>
            Gelecek hafta
          </Text>
          <Spacer />
          <Flex color='gray'>{nextWeek}</Flex>
        </Flex>
        <Flex cursor='pointer' _hover={{ bg: "gray.200" }} p='2'>
          <UpsentIcon />
          <Text as='b' ml='2'>
            Tarih yok
          </Text>
        </Flex>
      </Flex>
      <hr />
      <Flex cursor='pointer' p='2'>
        <Input type='date'></Input>
      </Flex>

      <hr />
      <Flex cursor='pointer' p='2' color='red'>
        + Zaman ekle
      </Flex>
    </Flex>
  );
}

export default NewTodayCard;
