import { Img } from "@chakra-ui/image";
import { Flex, Link, Text } from "@chakra-ui/layout";
import React from "react";
import QuestionMarkIcon from "../../../icons/QuestionMarkIcon";

function FavoritePage() {
  return (
    <Flex
      mt="4"
      w="100%"
      alignItems="center"
      justifyContent="center"
      h="100%"
      flexDirection="column"
    >
      <Flex h="432px" flexDirection="column" alignItems="center" w="380px">
        <Img src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/5912cb674b44ab3d789ea98c95d1cfe3.jpg" />
        <Text fontSize="lg" mb="2" textAlign="center">
          (Favorites), try adding this label to some tasks…
        </Text>
        <Text color="gray">Click the + to add a task and it’ll </Text>
        <Text color="gray">automatically get the (Favorites) label!</Text>
      </Flex>
      <Flex
        alignItems="flex-end"
        justifyContent="center"
        w="100%"
        h="100%"
        mt="10"
      >
        <QuestionMarkIcon color="red" cursor="pointer" />
        <Text as="ins" ml="2" color="red">
          <Link>Tips and tricks for using labels</Link>
        </Text>
      </Flex>
    </Flex>
  );
}

export default FavoritePage;