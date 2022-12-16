import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";

function Footer() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="100vh"
      mt="-570"
      flexDirection="column"
    >
      <Box
        maxW="1200"
        h="30"
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor="red.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="10"
        mb="45"
      >
        <Icon as={MdSettings} mr="5" />
        <Text>
          Todoist'e harika bir başlangıç yapmanı sağlayabilmemiz için bu iki
          basit soruyu cevapla.
        </Text>
        <Icon as={MdSettings} ml="5" />
      </Box>
      <Button
        size="inherit"
        height="36px"
        width="90px"
        border="2px"
        color="white"
        backgroundColor="red.200"
      >
        Devam Et
      </Button>
    </Flex>
  );
}

export default Footer;
