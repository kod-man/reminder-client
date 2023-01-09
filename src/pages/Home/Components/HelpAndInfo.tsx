import { Button, Flex } from "@chakra-ui/react";
import QuestionIcon from "../../../icons/QuestionIcon";

const HelpAndInfo = () => {
  return (
    <Flex
      as={Button}
      p="1"
      h={8}
      background="#db4c3f"
      _hover={{ bg: "#e27065" }}
    >
      <QuestionIcon color="white" />
    </Flex>
  );
};

export default HelpAndInfo;
