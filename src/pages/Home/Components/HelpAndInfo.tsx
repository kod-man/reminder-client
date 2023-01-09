import { Button, Flex } from "@chakra-ui/react";
import QuestionIcon from "../../../icons/QuestionIcon";

const HelpAndInfo = () => {
  return (
    <Flex
      as={Button}
      p="1"
      boxSize="30px"
      background="#db4c3f"
      _hover={{ bg: "#e27065" }}
    >
      <QuestionIcon color="white" />
    </Flex>
  );
};

export default HelpAndInfo;
