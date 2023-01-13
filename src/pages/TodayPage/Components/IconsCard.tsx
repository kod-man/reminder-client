import { Flex, Text } from "@chakra-ui/react";
const iconLists = ["🏷", "🏳", "⏲", "🧩"];
function IconsCard() {
  return (
    <Flex alignItems='flex-end' justifyContent='flex-end' w='200px' mb='4'>
      {iconLists.map((icon, index) => (
        <Text
          key={index}
          fontSize='lg'
          mr='4'
          cursor='pointer'
          _hover={{ bg: "gray.200" }}
        >
          {icon}
        </Text>
      ))}
    </Flex>
  );
}

export default IconsCard;
