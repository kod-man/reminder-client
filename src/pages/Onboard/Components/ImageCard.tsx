import { Flex, Image, Text, Box, useMediaQuery } from "@chakra-ui/react";

type ImageCardProps = {
  src: string;
  text: string;
};

function ImageCard({ src, text }: ImageCardProps) {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  return (
    <Flex
      w={isLargerThan700 ? "180px" : "400px"}
      h={isLargerThan700 ? "300px" : "100px"}
      border="1px"
      borderColor="gray.300"
      borderRadius="lg"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      _hover={{ borderColor: "black" }}
      mr="24px"
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
