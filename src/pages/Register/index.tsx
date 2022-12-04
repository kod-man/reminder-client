import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import BgPics from "./Components/BgPic";
import ContinueWiths from "./Components/ContinueWiths";
import Todoist from "./Components/Todoist";

function RegisterPage() {
  return (
    <Flex mx="40" flexDirection="column">
      <Todoist />
      <Flex justifyContent="center" alignItems="center">
        <Box>
          <VStack align="flex-start">
            <Text as="b" fontSize="3xl">
              Sign up
            </Text>
            <ContinueWiths />
            <Divider orientation="horizontal" />

            <Stack width="100%" spacing={3}>
              <Input
                size="lg"
                pr="4"
                type="email"
                placeholder="Enter your email..."
              />
              <InputGroup size="lg">
                <Input
                  pr="4.5rem"
                  type="password"
                  placeholder="Enter your password..."
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
