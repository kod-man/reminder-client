import {
  Flex,
  HStack,
  Text,
  Box,
  Spacer,
  Button,
  Icon,
} from "@chakra-ui/react";
import { SiTodoist } from "react-icons/si";

function Header() {
  return (
    <Flex>
      <Box p="4" mt="13" ml="83">
        <HStack h="40" align="flex-start" justify="center" padding="0.5rem">
          <SiTodoist size="35px" color="#e44232" />
          <Text as="b" color="#e44232" fontSize="2xl">
            todoist
          </Text>
        </HStack>
      </Box>
      <Spacer />
      <Box p="2" mt="30" mr="83">
        <Icon viewBox="0 0 200 200" color="red.500" mr="4">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Icon viewBox="0 0 200 200" color="red.100" mr="4">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Icon viewBox="0 0 200 200" color="red.100">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Button ml="5" variant="ghost" color="red">
          Atla
        </Button>
      </Box>
    </Flex>
  );
}

export default Header;
