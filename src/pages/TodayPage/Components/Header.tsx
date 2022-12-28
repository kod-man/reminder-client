import { Box, Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const today = date.toLocaleDateString("en-US", options);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex w={isLargerThan800 ? "60%" : "80%"}>
      <Box mt='12'>
        <Flex>
          <Text as='b' fontSize='xl' mr='2'>
            Bugün
          </Text>
          <Text mt='2' fontSize='sm' color='gray'>
            {today}
          </Text>
        </Flex>
      </Box>
      <Spacer />
      <Box mt='12'>
        <Flex>
          <Text mt='1'>
            <AiOutlineMenu color='gray' />
          </Text>
          {isLargerThan800 ? (
            <Text fontSize='sm' ml='1' color='gray'>
              Görüntüle
            </Text>
          ) : null}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Header;
