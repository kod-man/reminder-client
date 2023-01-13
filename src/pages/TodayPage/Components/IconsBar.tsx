import { VStack, Flex, Text } from "@chakra-ui/react";
import DateIcon from "../icons/DateIcon";
import FolderIcon from "../icons/FolderIcon";
import MessageIcon from "../icons/MessageIcon";
import PenIcon from "../icons/PenIcon";
const icons = [<PenIcon />, <DateIcon />, <MessageIcon />];
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
        <Flex mb='1'>
          <FolderIcon color='blue' />
        </Flex>
      </Flex>
    </VStack>
  );
}

export default IconsBar;
