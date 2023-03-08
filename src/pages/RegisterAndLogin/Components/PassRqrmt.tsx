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
