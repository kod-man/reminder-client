import { VStack, Flex, Text } from "@chakra-ui/react";
import { AiFillFolderOpen, AiOutlineCalendar } from "react-icons/ai";
import { BiMessage, BiPencil } from "react-icons/bi";

function IconsBar() {
  const icons = [<BiPencil />, <AiOutlineCalendar />, <BiMessage />];
  return (
    <VStack spacing={4} align='stretch'>
      <Flex>
        {icons.map((icon2) => (
          <Text fontSize='2xl' mr='3' _hover={{ bg: "gray.200" }}>
            {icon2}
          </Text>
        ))}
      </Flex>
      <Flex h='30px' justifyContent='flex-end' alignItems='flex-end'>
        <Text color='blackAlpha.700' mr='1' fontSize='sm'>
          Klasör
        </Text>
        <AiFillFolderOpen color='blue' />
      </Flex>
    </VStack>
  );
}

export default IconsBar;
