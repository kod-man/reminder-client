import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import BgPics from "./Components/BgPic";
import ContinueWiths from "./Components/ContinueWiths";
import Footer from "./Components/Footer";
import Inputs from "./Components/Inputs";
import Todoist from "./Components/Todoist";

function RegisterAndLogin({ page }: { page: string }) {
  return (
    <Flex mx="40" flexDirection="column">
      <Todoist />
      <Flex justifyContent="center" alignItems="center">
        <Box>
          <VStack align="flex-start">
            <Text as="b" fontSize="3xl">
              {page === "register" ? "Sign up" : "Log in"}
            </Text>
            <ContinueWiths />
            <Divider orientation="horizontal" />
            <Inputs page={page} />
            <Footer page={page} />
          </VStack>
        </Box>
        <Box>
          <BgPics />
        </Box>
      </Flex>
    </Flex>
  );
}

export default RegisterAndLogin;
