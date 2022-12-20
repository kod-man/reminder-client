import { Box, Button, Flex, Input } from "@chakra-ui/react";

function Profil() {
  return (
    <Box
      border="1px"
      borderColor="gray.300"
      h="400px"
      w="280px"
      borderRadius="lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Flex as="b" fontSize="2xl" justifyContent="flex-start" mt="8">
        Profilin
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        h="180px"
        w="180px"
        borderRadius="100"
        mt="4"
        background="gray.200"
      >
        <Box color="white" fontSize="7xl">
          N
        </Box>
      </Flex>
      <Button mt="4" fontSize="sm">
        Fotoğraf Yükle
      </Button>
      <Flex>
        <Input mt="4" mx="10" placeholder="           İsmini Ekle" />
      </Flex>
    </Box>
  );
}

export default Profil;
