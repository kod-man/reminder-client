import { Flex, Image, Text, Box } from "@chakra-ui/react";

type ImageCardProps = {
  src: string;
  text: string;
};

function ImageCard({ src, text }: ImageCardProps) {
  return (
    <Flex
      w="300px"
      h="400px"
      border="1px"
      borderColor="gray.300"
      borderRadius="lg"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      _hover={{ borderColor: "black" }}
    >
      <Image boxSize="160px" objectFit="cover" src={src} alt="1" />
      <Text>{text}</Text>
      <Box
        position="absolute"
        top="10px"
        right="10px"
        w="25px"
        h="25px"
        border="1px"
        borderColor="gray.300"
        borderRadius="20px"
      ></Box>
    </Flex>
  );
}

export default ImageCard;
