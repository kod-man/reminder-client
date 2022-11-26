import {
  Box,
  Divider,
  HStack,
  Link,
  VStack,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Flex,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import BgPics from "./Components/BgPic";
import ContinueWiths from "./Components/ContinueWiths";
import Todoist from "./Components/Todoist";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function RegisterPage() {
  return (
    <Flex mr="40" ml="40" flexDirection="column">
      <Todoist />
      <Flex gap="28" justifyContent="center" alignItems="center">
        <Box>
          <VStack align="flex-start">
            <Text as="b" fontSize="3xl">
              Sign up
            </Text>
            <ContinueWiths />
            <Divider orientation="horizontal" />

            <Stack width="100%" spacing={3}>
              <Input
                pr="4.5rem"
                type="email"
                placeholder="Enter your email..."
                height="55"
              />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type="password"
                  placeholder="Enter your password..."
                  height="55"
                />
                <InputRightElement
                  children={<AiOutlineEyeInvisible color="gray" />}
                />
              </InputGroup>
            </Stack>

            <Button
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt="4"
              variant="solid"
              width="350px"
              size="lg"
              height="52px"
              border="2px"
              color="white"
              colorScheme="red"
              borderRadius="9"
            >
              <Text>Sign up with Email</Text>
            </Button>

            <Text fontSize="xs" width="350px">
              By continuing with Google, Apple, or Email, you agree to Todoist’s
              <Link mr="1" textDecoration="underline">
                Terms of Service
              </Link>
              and
              <Link ml="1" textDecoration="underline">
                Privacy Policy
              </Link>
              .
            </Text>
            <Divider orientation="horizontal" />
            <Text textAlign="center" fontSize="xs" width="350px" ml="25">
              Already signed up?
              <Link ml="1" textDecoration="underline">
                Go to login
              </Link>
            </Text>
          </VStack>
        </Box>

        {/* 
background image part
 */}

        <Box>
          <BgPics />
        </Box>
      </Flex>
    </Flex>
  );
}

export default RegisterPage;
