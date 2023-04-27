import { Box, Flex, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex w="100%" mb="2">
      <Box my="12">
        <Text as="b" fontSize="xl" mr="2">
          Filters & Labels
        </Text>
      </Box>
    </Flex>
  );
}

export default Header;
