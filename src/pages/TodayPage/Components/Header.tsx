import { Box, Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import ViewIcon from "../../../icons/ViewIcon";

function Header() {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short"
  };
  const today = date.toLocaleDateString("en-US", options);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex w="100%" mb="2">
      <Box mt="12">
        <Flex>
          <Text as="b" fontSize="xl" mr="2">
            Today
          </Text>
          <Text mt="2" fontSize="sm" color="gray">
            {today}
          </Text>
        </Flex>
      </Box>
      <Spacer />
      <Box mt="12" _hover={{ bg: "gray.100" }} cursor="pointer">
        <Flex>
          <ViewIcon color="gray" />
          {isLargerThan800 ? (
            <Text fontSize="sm" ml="1" color="gray">
              View
            </Text>
          ) : null}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Header;
