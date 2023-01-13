import { VStack, Flex, Text } from "@chakra-ui/react";
import { AiFillFolderOpen, AiOutlineCalendar } from "react-icons/ai";
import { BiMessage, BiPencil } from "react-icons/bi";
const icons = [<BiPencil />, <AiOutlineCalendar />, <BiMessage />];
function IconsBar() {
  return (
    <VStack spacing={4} align='stretch'>
      <Flex>
        {icons.map((icon2, index) => (
          <Text key={index} fontSize='2xl' mr='3' _hover={{ bg: "gray.200" }}>
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
