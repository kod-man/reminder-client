import { Flex, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize="lg" color="gray.500">
        Congratulations on taking the first step towards becoming more
        organized.
      </Text>
      <Text fontSize="lg" color="gray.500">
        Your custom Todoist is ready to use.
      </Text>
    </Flex>
  );
}

export default Header;
