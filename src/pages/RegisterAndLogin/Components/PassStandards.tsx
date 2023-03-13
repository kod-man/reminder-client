import { Flex, Icon, Text } from "@chakra-ui/react";
import RedDotIcon from "../../../icons/RedDotIcon";
import RedTickIcon from "../../../icons/RedTickIcon";

const PassStandards = ({
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
      h="130px"
      boxShadow="xs"
      p="1px"
      rounded="md"
      bg="white"
    >
      <Flex>
        <Icon
          as={hasPsValue ? RedTickIcon : RedDotIcon}
          color={hasPsValue ? "green" : "#E53E3E"}
        />
        <Text
          ml="5px"
          fontSize="sm"
          fontFamily="unset"
          color={hasPsValue ? "green" : "#e53e3e"}
        >
          Required!
        </Text>
      </Flex>
      <Flex>
        <Icon
          as={hasPsassword7chars ? RedTickIcon : RedDotIcon}
          color={hasPsassword7chars ? "green" : "#E53E3E"}
        />
        <Text
          ml="5px"
          fontSize="sm"
          fontFamily="unset"
          color={hasPsassword7chars ? "green" : "#e53e3e"}
        >
          At least seven characters
        </Text>
      </Flex>
      <Flex>
        <Icon
          as={hasPsNumber ? RedTickIcon : RedDotIcon}
          color={hasPsNumber ? "green" : "#E53E3E"}
        />
        <Text
          ml="5px"
          fontSize="sm"
          fontFamily="unset"
          color={hasPsNumber ? "green" : "#e53e3e"}
        >
          At least one number
        </Text>
      </Flex>
      <Flex>
        <Icon
          as={hasPsUpperCase ? RedTickIcon : RedDotIcon}
          color={hasPsUpperCase ? "green" : "#E53E3E"}
        />
        <Text
          ml="5px"
          fontSize="sm"
          fontFamily="unset"
          color={hasPsUpperCase ? "green" : "#e53e3e"}
        >
          At least one upperCase!
        </Text>
      </Flex>
      <Flex>
        <Icon
          as={hasPsSmallCase ? RedTickIcon : RedDotIcon}
          color={hasPsSmallCase ? "green" : "#E53E3E"}
        />
        <Text
          ml="5px"
          fontSize="sm"
          fontFamily="unset"
          color={hasPsSmallCase ? "green" : "#E53E3E"}
        >
          At least one lowerCase!
        </Text>
      </Flex>
      <Flex>
        <Icon
          as={hasPsSymbol ? RedTickIcon : RedDotIcon}
          color={hasPsSymbol ? "green" : "#E53E3E"}
        />
        <Text
          ml="5px"
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

export default PassStandards;
