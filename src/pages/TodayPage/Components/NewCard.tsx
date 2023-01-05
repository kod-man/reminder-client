import { Text, Flex, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import { AiFillFolderOpen, AiOutlineCalendar } from "react-icons/ai";
import { BiMessage, BiPencil } from "react-icons/bi";

function NewCard() {
  return (
    <Flex
      borderBottom='1px solid'
      borderColor='gray.200'
      w='60%'
      h='80px'
      mt='8'
    >
      <Flex>
        <Flex
          border='1px solid gray'
          borderRadius='100%'
          w='20px'
          h='20px'
        ></Flex>
        <Flex ml='2' direction='column'>
          <Text>Random</Text>
          <Text fontSize='sm' color='gray'>
            abc
          </Text>
        </Flex>
      </Flex>
      <Spacer />
      <VStack spacing={4} align='stretch'>
        <Flex>
          <Text fontSize='2xl' mr='3'>
            <BiPencil />
          </Text>
          <Text fontSize='2xl' mr='3'>
            <AiOutlineCalendar />
          </Text>
          <Text fontSize='2xl'>
            <BiMessage />
          </Text>
        </Flex>
        <Flex h='30px' justifyContent='flex-end' alignItems='flex-end'>
          <Text color='blackAlpha.700' mr='1' fontSize='sm'>
            Klasör
          </Text>
          <AiFillFolderOpen />
        </Flex>
      </VStack>
    </Flex>
  );
}

export default NewCard;
