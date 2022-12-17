import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { AiOutlineBulb } from "react-icons/ai";
function Footer() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt="10"
    >
      <Box
        w="950px"
        h="30"
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor="orange.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="10"
        mb="45"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          mr="2"
          bgColor="white"
          w="10"
          h="10"
          border="1px"
          borderColor="yellow.300"
          borderRadius="50%"
        >
          <AiOutlineBulb />
        </Flex>
        <Text>
          Todoist'e harika bir başlangıç yapmanı sağlayabilmemiz için bu iki
          basit soruyu cevapla.
        </Text>
        <Text ml="2">😊</Text>
      </Box>
      <Button
        size="inherit"
        height="36px"
        width="90px"
        border="2px"
        color="white"
        backgroundColor="red.200"
        _hover={{ cursor: "not-allowed" }}
      >
        Devam Et
      </Button>
    </Flex>
  );
}

export default Footer;
