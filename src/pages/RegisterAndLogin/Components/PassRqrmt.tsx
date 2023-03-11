import { Flex, Icon, Text } from "@chakra-ui/react";
import RedTickIcon from "../../../icons/RedTickIcon";

const PassRqrmt = ({
  formData
}: {
  formData: {
    email: string;
    password: string;
  };
}) => {
  const { password } = formData;
  const hasPsValue = password;
  const hasPsassword7chars = password.length > 6;
  const hasPsNumber = /\d/.test(password);
  const hasPsUpperCase = /[A-Z]/.test(password);
  const hasPsSmallCase = /[a-z]/.test(password);
  const hasPsSymbol = /\W|_/g.test(password);
  return (
    <Flex
      flexDirection="column"
      w="350px"
      h="185px"
      boxShadow="xs"
      p="1px"
      rounded="md"
      bg="white"
    >
      <Flex flexDirection="row" alignItems="flex-start">
        <Icon as={RedTickIcon} color={hasPsValue ? "green" : "#e53e3e"} />
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsValue ? "green" : "#e53e3e"}
        >
          Required!
        </Text>
      </Flex>
      <Flex>
        <Icon
          as={RedTickIcon}
          color={hasPsassword7chars ? "green" : "#e53e3e"}
        />
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsassword7chars ? "green" : "#e53e3e"}
        >
          At least seven characters
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color={hasPsNumber ? "green" : "#e53e3e"} />
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsNumber ? "green" : "#e53e3e"}
        >
          At least one number
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color={hasPsUpperCase ? "green" : "#e53e3e"} />
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsUpperCase ? "green" : "#e53e3e"}
        >
          At least one upperCase!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color={hasPsSmallCase ? "green" : "#E53E3E"} />
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsSmallCase ? "green" : "#E53E3E"}
        >
          At least one lowerCase!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color={hasPsSymbol ? "green" : "#E53E3E"} />
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsSymbol ? "green" : "#E53E3E"}
        >
          At least one special character(symbol)!
        </Text>
      </Flex>
    </Flex>
  );
};

export default PassRqrmt;
