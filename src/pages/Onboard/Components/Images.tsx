import { Box, Flex, Image, HStack, Text } from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";
function Images() {
  return (
    <Flex justifyContent="center" h="100vh" alignItems="flex-start" mt="-260">
      <HStack spacing="24px">
        <Box
          w="280px"
          h="350px"
          borderWidth="1px"
          borderRadius="lg"
          _hover={{ borderColor: "black" }}
        >
          <Flex alignItems="end" justifyContent="end" p="5">
            <Box
              w="5"
              h="5"
              borderWidth="1px"
              borderRadius="lg"
              borderColor="gray"
            ></Box>
          </Flex>
          <Flex
            justifyContent="center"
            h="30vh"
            alignItems="center"
            flexDirection="column"
          >
            <Image
              boxSize="160px"
              objectFit="cover"
              src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/a44738d5f7fb0d68cfab25ac6ad6e17f.png"
              alt="1"
            />
            <Text>Kişisel</Text>
          </Flex>
        </Box>
        <Box
          w="280px"
          h="350px"
          borderWidth="1px"
          borderRadius="lg"
          _hover={{ borderColor: "black" }}
        >
          <Flex alignItems="end" justifyContent="end" p="5">
            <Box w="5" h="5" borderWidth="1px" borderRadius="lg">
              <AiOutlineCheck color="white" />
            </Box>
          </Flex>
          <Flex
            justifyContent="center"
            h="30vh"
            alignItems="center"
            flexDirection="column"
          >
            <Image
              boxSize="160px"
              objectFit="cover"
              src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/094e1b7ba10f2b0dac09050a43e74f4c.png"
              alt="2"
            />
            <Text>İş</Text>
          </Flex>
        </Box>
        <Box
          w="280px"
          h="350px"
          borderWidth="1px"
          borderRadius="lg"
          _hover={{ borderColor: "black" }}
        >
          <Flex alignItems="end" justifyContent="end" p="5">
            <Box w="5" h="5" borderWidth="1px" borderRadius="lg"></Box>
          </Flex>
          <Flex
            justifyContent="center"
            h="30vh"
            alignItems="center"
            flexDirection="column"
          >
            <Image
              boxSize="160px"
              objectFit="cover"
              src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/655e59f84581a3ee7ba6dd1b998a3a4b.png"
              alt="3"
            />
            <Text>Eğitim</Text>
          </Flex>
        </Box>
      </HStack>
    </Flex>
  );
}

export default Images;
