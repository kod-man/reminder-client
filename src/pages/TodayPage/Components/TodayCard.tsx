import { Flex, Text } from "@chakra-ui/react";

import { AiOutlineCalendar, AiFillFolderOpen } from "react-icons/ai";

function TodayCard() {
  return (
    <Flex ml='3' mt='2'>
      <Flex
        border='1px'
        borderColor='gray.300'
        color='green'
        p='2'
        mr='2'
        borderRadius='md'
        w='80px'
        h='30px'
        alignItems='center'
        justifyContent='center'
        cursor='pointer'
        _hover={{ bg: "gray.200" }}
      >
        <AiOutlineCalendar />
        <Text ml='1'>Bugün</Text>
      </Flex>
      <Flex
        color='blue.400'
        border='1px'
        borderColor='gray.300'
        borderRadius='md'
        p='2'
        w='80px'
        h='30px'
        alignItems='center'
        justifyContent='center'
        cursor='pointer'
        _hover={{ bg: "gray.200" }}
      >
        <AiFillFolderOpen />
        <Text color='blackAlpha.700' ml='1'>
          Klasör
        </Text>
      </Flex>
    </Flex>
  );
}

export default TodayCard;
