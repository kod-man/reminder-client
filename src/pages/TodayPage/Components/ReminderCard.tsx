import { Flex, Input, Spacer, useMediaQuery } from "@chakra-ui/react";

import TreeDoteIcon from "../icons/TreeDoteIcon";
import IconsBar from "./IconsBar";

type ReminderCardProps = {
  title: string;
  description: string;
};

function ReminderCard({ title, description }: ReminderCardProps) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex w={isLargerThan800 ? "60%" : "80%"} justifyContent='center' mb='2'>
      <Flex
        borderBottom='1px solid'
        borderColor='gray.200'
        w='100%'
        h='50px'
        cursor='pointer'
      >
        <Flex>
          <Flex
            border='1px solid gray'
            borderRadius='50%'
            h='20px'
            w='20px'
            mt='1'
          ></Flex>
          <Flex ml='2' direction='column'>
            <Input variant='unstyled' value={title} name='title' />
            <Input
              variant='unstyled'
              color='gray'
              value={description}
              fontSize='xs'
              name='description'
            />
          </Flex>
        </Flex>
        <Spacer />
        <IconsBar />
      </Flex>
      <Flex
        w='24px'
        h='24px'
        _hover={{ bg: "gray.200" }}
        alignItems='center'
        justifyContent='center'
        ml='2'
      >
        <TreeDoteIcon color='gray' />
      </Flex>
    </Flex>
  );
}

export default ReminderCard;
