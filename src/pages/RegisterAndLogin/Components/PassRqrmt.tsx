import { Flex, Icon, Text } from "@chakra-ui/react";
import RedTickIcon from "../../../icons/RedTickIcon";

const PassRqrmt = () => {
  return (
    <Flex
      flexDirection="column"
      w="350px"
      h="185px"
      boxShadow="dark-lg"
      p="1px"
      rounded="md"
      bg="white"
    >
      <Flex flexDirection="row" alignItems="flex-start">
        <Icon as={RedTickIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold" fontFamily="unset">
          Password is required!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold" fontFamily="unset">
          Password needs to be 7 characters or more!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold" fontFamily="unset">
          Password must contain at least one number!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold" fontFamily="unset">
          Password must contain at least one upperCase!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold" fontFamily="unset">
          Password must contain at least one lowerCase!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold" fontFamily="unset">
          Password must contain at least one special character(symbol)!
        </Text>
      </Flex>
    </Flex>
  );
};

export default PassRqrmt;
