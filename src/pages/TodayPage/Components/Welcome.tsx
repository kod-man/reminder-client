import { Flex, Img, Link, Text } from "@chakra-ui/react";
import QuestionMarkIcon from "../../../icons/QuestionMarkIcon";

function Welcome() {
  return (
    <Flex
      mt="4"
      w="100%"
      alignItems="center"
      justifyContent="center"
      h="432px"
      direction="column"
    >
      <Flex
        direction="column"
        h="432px"
        flexDirection="column"
        alignItems="center"
        w="380px"
      >
        <Img src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/d7c6fac19c896959feaaffd6472ca7a0.jpg" />
        <Text as="b" fontSize="lg" mb="2">
          What do you need to do today?
        </Text>
        <Text color="gray">By default, tasks added here</Text>
        <Text color="gray">have due date of today. Click</Text>
        <Text color="gray">the + sign to add a task.</Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        w="300px"
        h="80px"
        mt="10"
      >
        <QuestionMarkIcon color="red" cursor="pointer" />
        <Text as="ins" ml="2" color="red">
          <Link>How do you plan your day?</Link>
        </Text>
      </Flex>
    </Flex>
  );
}

export default Welcome;
