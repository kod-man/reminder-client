import { Text, Flex } from "@chakra-ui/react";

function Center() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      mt="-300"
    >
      <Text as="b" fontSize="2xl">
        Todoist'i nasıl kullanmayı planlıyorsun?
      </Text>
      <Text fontSize="md" color="gray.400" mt="4">
        Uygun olanları seç
      </Text>
    </Flex>
  );
}

export default Center;
