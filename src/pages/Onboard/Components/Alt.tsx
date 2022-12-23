import { Button, Flex } from "@chakra-ui/react";

function Alt() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt="10"
    >
      <Button
        size="inherit"
        height="36px"
        width="90px"
        border="2px"
        color="white"
        backgroundColor="red.500"
        mb="4"
      >
        Devam Et
      </Button>
    </Flex>
  );
}

export default Alt;
