import { Box, Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";

function Header() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex w={isLargerThan800 ? "55%" : "80%"} mb="2">
      <Box mt="12">
        <Flex>
          <Text as="b" fontSize="xl" mr="2">
            Filters & Labels
          </Text>
        </Flex>
      </Box>
      <Spacer />
    </Flex>
  );
}

export default Header;
