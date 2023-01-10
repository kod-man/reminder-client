import { Flex, Text } from "@chakra-ui/react";

function IconsCard() {
  const iconLists = ["🏷", "🏳", "⏲", "🧩"];
  return (
    <Flex alignItems='flex-end' justifyContent='flex-end' w='200px' mb='4'>
      {iconLists.map((icon) => (
        <Text fontSize='lg' mr='4' cursor='pointer' _hover={{ bg: "gray.200" }}>
          {icon}
        </Text>
      ))}
    </Flex>
  );
}

export default IconsCard;
