import { Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import LeftArrowIcon from "../../../icons/LeftArrowIcon";
import ViewIcon from "../../../icons/ViewIcon";

function Header() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex w="60%" mb="2">
      <Flex mt="12" alignItems="center">
        <LeftArrowIcon />
        <Flex>
          <Text as="b" fontSize="xl" mr="2">
            (Favorites)
          </Text>
        </Flex>
      </Flex>
      <Spacer />
      <Flex mt="12" alignItems="center">
        <Flex _hover={{ bg: "gray.100" }} cursor="pointer">
          <ViewIcon color="gray" />
          {isLargerThan800 ? (
            <Text fontSize="sm" ml="1" color="gray">
              View
            </Text>
          ) : null}
        </Flex>
        <Flex
          alignItems="center"
          ml="20px"
          _hover={{ bg: "gray.100" }}
          cursor="pointer"
          h="100%"
        >
          <Text border="2px solid gray" h="5px" w="5px" borderRadius="50%" />
          <Text
            border="2px solid gray"
            h="5px"
            w="5px"
            borderRadius="50%"
            mx="2px"
          />
          <Text border="2px solid gray" h="5px" w="5px" borderRadius="50%" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
