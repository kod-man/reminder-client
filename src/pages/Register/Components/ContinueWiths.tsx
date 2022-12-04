import { Button, Text, VStack } from "@chakra-ui/react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ContinueWiths = () => {
  return (
    <VStack spacing={4} direction="row" align="center">
      <Button width="350px" colorScheme="gray" size="md" variant="outline">
        <FcGoogle />
        <Text as="b" ml="2">
          Continue with Google
        </Text>
      </Button>

      <Button width="350px" colorScheme="gray" size="md" variant="outline">
        <FaFacebook color="#1877f2" margin-right="1em" />
        <Text as="b" ml="2">
          Continue with Facebook
        </Text>
      </Button>

      <Button width="350px" colorScheme="gray" size="md" variant="outline">
        <FaApple />
        <Text as="b" ml="2" color="black">
          Continue with Apple
        </Text>
      </Button>
    </VStack>
  );
};

export default ContinueWiths;
