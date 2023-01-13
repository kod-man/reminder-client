import { Flex, Input, Spacer, useMediaQuery } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import IconsBar from "./IconsBar";

type ReminderCardProps = {
  title: string;
  description: string;
};

function ReminderCard({ title, description }: ReminderCardProps) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex
      w={isLargerThan800 ? "60%" : "80%"}
      justifyContent='center'
      mb='2'
      border='1px solid red'
    >
      <Flex
        borderBottom='1px solid'
        borderColor='gray.200'
        w='100%'
        h='80px'
        cursor='pointer'
      >
        <Flex>
          <Flex
            border='1px solid gray'
            borderRadius='100%'
            w='20px'
            h='20px'
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
      <Flex h='20px' mt='1' _hover={{ bg: "gray.200" }}>
        <BsThreeDots />
      </Flex>
    </Flex>
  );
}

export default ReminderCard;
