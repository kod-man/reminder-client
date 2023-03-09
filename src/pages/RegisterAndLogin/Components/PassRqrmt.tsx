import { Flex, Icon, Text } from "@chakra-ui/react";
import RedTickIcon from "../../../icons/RedTickIcon";

const PassRqrmt = ({
  formErrors
}: {
  formErrors: {
    email: string;
    password: string;
  };
}) => {
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
          Required!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold" fontFamily="unset">
          At least seven characters
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold" fontFamily="unset" color="green">
          At least one number
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold" fontFamily="unset">
          At least one upperCase!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold" fontFamily="unset">
          At least one lowerCase!
        </Text>
      </Flex>
      <Flex>
        <Icon as={RedTickIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold" fontFamily="unset">
          At least one special character(symbol)!
        </Text>
      </Flex>
    </Flex>
  );
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
