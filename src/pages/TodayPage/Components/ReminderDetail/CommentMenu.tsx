import { Flex, Input } from "@chakra-ui/react";
import React from "react";

function CommentMenu() {
  return (
    <Flex mt="25px" alignItems="center">
      <Flex
        border="1px solid gray"
        borderRadius="50%"
        h="35px"
        w="35px"
        justifyContent="center"
        alignItems="center"
        bgColor="green.800"
        color="white"
      >
        h
      </Flex>
      <Input
        placeholder="Comment"
        ml="20px"
        borderRightRadius="full"
        borderLeftRadius="full"
        h="35px"
        fontSize="13px"
        cursor="pointer"
        _hover={{
          bgColor: "#fafafa",
          border: "1px solid #999",
          _placeholder: { color: "black" }
        }}
      />
    </Flex>
  );
}

export default CommentMenu;
