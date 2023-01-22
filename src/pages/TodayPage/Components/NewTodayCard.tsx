import { Flex, Input } from "@chakra-ui/react";
import CouchIcon from "../../../icons/CouchIcon";
import SunIcon from "../../../icons/SunIcon";
import UpsentIcon from "../../../icons/UpsentIcon";

function NewTodayCard() {
  const date = new Date(Date.now());
  const weeksDate = new Date(Date.now() + 3600 * 1000 * 24);
  const options2: Intl.DateTimeFormatOptions = {
    weekday: "short",
  };
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const today = date.toLocaleDateString("en-US", options);
  const tomorrow = weeksDate.toLocaleDateString("en-US", options2);

  return (
    <Flex border='1px solid red' direction='column' ml='3'>
      <Flex>{today}</Flex>
      <hr />
      <Flex direction='column'>
        <Flex>
          <SunIcon color='orange' />
          yarın {tomorrow}
        </Flex>
        <Flex>
          <CouchIcon color='blue' />
        </Flex>
        <Flex>
          <UpsentIcon />
        </Flex>
      </Flex>
      <hr />
      <Flex>
        <Input type='date'></Input>
      </Flex>

      <hr />
      <Flex color='red'>+ Zaman ekle</Flex>
    </Flex>
  );
}

export default NewTodayCard;
