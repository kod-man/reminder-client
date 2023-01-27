import { Divider, Flex, Text } from "@chakra-ui/react";

import ColorFlagIcon from "../../../icons/ColorFlagIcon";
import FlagIcon from "../../../icons/FlagIcon";
import TickIcon from "../../../icons/TickIcon";

function TodoFlag() {
  return (
    <Flex
      mr='9'
      mt='2'
      overflowY='scroll'
      direction='column'
      border='1px solid red'
      borderColor='gray.200'
      borderRadius='md'
      bg='white'
    >
      <Flex p='2' pt='1' cursor='pointer' _hover={{ bg: "gray.200" }}>
        <ColorFlagIcon color='red' />
        <Text ml='2' mr='4'>
          Priority 1
        </Text>
      </Flex>
      <Divider visibility='hidden' />
      <Flex p='2' pt='1' cursor='pointer' _hover={{ bg: "gray.200" }}>
        <ColorFlagIcon color='orange' />
        <Text ml='2' mr='4'>
          Priority 2
        </Text>
      </Flex>
      <Divider visibility='hidden' />
      <Flex p='2' pt='1' cursor='pointer' _hover={{ bg: "gray.200" }}>
        <ColorFlagIcon color='blue' />
        <Text ml='2' mr='4'>
          Priority 3
        </Text>
      </Flex>
      <Divider visibility='hidden' />
      <Flex p='2' pt='1' cursor='pointer' _hover={{ bg: "gray.200" }}>
        <FlagIcon />
        <Text ml='3' mr='4'>
          Priority 4
        </Text>
        <Flex mt='2'>
          <TickIcon color='red' />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TodoFlag;
