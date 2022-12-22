import { Flex, Link, Text } from "@chakra-ui/react";
import { BsQuestionCircle } from "react-icons/bs";

function Footer() {
  return (
    <Flex alignItems="center" justifyContent="center" w="300px" h="80px">
      <BsQuestionCircle color="red" />
      <Text as="ins" ml="2" color="red">
        <Link>Gününü nasıl planlarsın</Link>
      </Text>
    </Flex>
  );
}

export default Footer;
