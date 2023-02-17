import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";

function Header() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex w={isLargerThan800 ? "55%" : "80%"} mb="2">
      <Box my="12">
        <Text as="b" fontSize="xl" mr="2">
          Filters & Labels
        </Text>
      </Box>
    </Flex>
  );
}

export default Header;
