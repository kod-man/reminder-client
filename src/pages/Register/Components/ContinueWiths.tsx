import { VStack, Button, Box, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const ContinueWiths = () => {
  return (
    <VStack spacing={4} direction="row" align="center">
      <Button width="350px" colorScheme="gray" size="md">
        <FcGoogle />
        <Text ml="2">Continue with Google</Text>
      </Button>

      <Button width="350px" colorScheme="gray" size="md">
        <FaFacebook color="#1877f2" margin-right="1em" />
        <Text ml="2">Continue with Facebook</Text>
      </Button>

      <Button width="350px" colorScheme="gray" size="md">
        <FaApple />
        <Text ml="2" color="black">
          Continue with Apple
        </Text>
      </Button>
    </VStack>
  );
};

export default ContinueWiths;
