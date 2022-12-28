import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

function Header() {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  };
  const today = date.toLocaleDateString('en-US', options);
  return (
    <Flex border="1px solid green" w="60%" minW="600px">
      <Box mt="12" p="4">
        <Flex>
          <Text as="b" fontSize="xl" mr="2">
            Bugün
          </Text>
          <Text mt="2" fontSize="sm" color="gray">
            {today}
          </Text>
        </Flex>
      </Box>
      <Spacer />
      <Box m="4" p="4" mt="12">
        <Flex>
          <Text mt="1">
            <AiOutlineMenu color="gray" />
          </Text>
          <Text fontSize="sm" ml="1" color="gray">
            Görüntüle
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Header;
