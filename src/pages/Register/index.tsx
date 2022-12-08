import { Box, Divider, Flex, Link, Text, VStack } from "@chakra-ui/react";
import BgPics from "./Components/BgPic";
import ContinueWiths from "./Components/ContinueWiths";
import Inputs from "./Components/Inputs";
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
            <Inputs />
            <Text fontSize="xs" width="350px">
              By continuing with Google, Apple, or Email, you agree to Todoist’s
              <Link mr="1" ml="1" textDecoration="underline">
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
