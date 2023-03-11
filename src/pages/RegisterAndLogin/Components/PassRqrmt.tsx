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
  const hasPsNumber = !/\d/.test(password);
  const hasPsUpperCase = !/[A-Z]/.test(password);
  const hasPsSmallCase = !/[a-z]/.test(password);
  const hasPsSymbol = !/\W|_/g.test(password);
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
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsValue ? "green" : "gray"}
        >
          Required!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsassword7chars ? "green" : "gray"}
        >
          At least seven characters
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsNumber ? "green" : "gray"}
        >
          At least one number
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsUpperCase ? "green" : "gray"}
        >
          At least one upperCase!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsSmallCase ? "green" : "gray"}
        >
          At least one lowerCase!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text
          fontSize="sm"
          fontFamily="unset"
          color={hasPsSymbol ? "green" : "gray"}
        >
          At least one special character(symbol)!
        </Text>
      </Flex>
    </Flex>
  );
  console.log("2");
};

export default PassRqrmt;

// import { Flex, Text } from "@chakra-ui/react";
// interface Props {
//   name: string;
//   value: string;
// }

// const PassRqrmt = ({ name, value }: Props) => {
//   if (name === "password") {
//     return (
//       <Flex wrap="wrap">
//         {!value && <Text color="black">Password is required! </Text>}
//         {value && value.length < 7 && (
//           <Text color="black">Password needs to be 7 characters or more! </Text>
//         )}
//         {value && !/\d/.test(value) && (
//           <Text color="black">Password must contain at least one number! </Text>
//         )}
//         {value && !/[A-Z]/.test(value) && (
//           <Text color="black">
//             Password must contain at least one upperCase!{" "}
//           </Text>
//         )}
//         {value && !/[a-z]/.test(value) && (
//           <Text color="black">
//             Password must contain at least one lowerCase!{" "}
//           </Text>
//         )}
//         {value && !/\W|_/g.test(value) && (
//           <Text color="black">
//             Password must contain at least one special character(symbol)!{" "}
//           </Text>
//         )}
//       </Flex>
//     );
//   }

// };

// export default PassRqrmt;
