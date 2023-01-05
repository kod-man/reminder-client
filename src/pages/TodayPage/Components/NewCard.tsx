import { Text, Flex, Spacer, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillFolderOpen, AiOutlineCalendar } from "react-icons/ai";
import { BiMessage, BiPencil } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaDiceSix } from "react-icons/fa";

function NewCard() {
  const [goster, setGoster] = useState(false);
  return (
    <Flex w='100%'>
      {!goster && (
        <Flex justifyContent='center' alignItems='center' mr='3' mt='-8'>
          <FaDiceSix color='gray' />
        </Flex>
      )}
      <Flex
        borderBottom='1px solid'
        borderColor='gray.200'
        w='100%'
        h='80px'
        mt='8'
        cursor='pointer'
        onMouseUp={() => setGoster(!goster)}
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
          {!goster && (
            <Flex>
              <Text fontSize='2xl' mr='3' _hover={{ bg: "gray.200" }}>
                <BiPencil />
              </Text>
              <Text fontSize='2xl' mr='3' _hover={{ bg: "gray.200" }}>
                <AiOutlineCalendar />
              </Text>
              <Text fontSize='2xl' _hover={{ bg: "gray.200" }}>
                <BiMessage />
              </Text>
            </Flex>
          )}
          <Flex h='30px' justifyContent='flex-end' alignItems='flex-end'>
            <Text color='blackAlpha.700' mr='1' fontSize='sm'>
              Klasör
            </Text>
            <AiFillFolderOpen />
          </Flex>
        </VStack>
      </Flex>

      <Flex
        h='30px'
        justifyContent='center'
        alignItems='center'
        ml='3'
        mt='6'
        _hover={{ bg: "gray.200" }}
        display='none'
      >
        <BsThreeDots />
      </Flex>
    </Flex>
  );
}

export default NewCard;
