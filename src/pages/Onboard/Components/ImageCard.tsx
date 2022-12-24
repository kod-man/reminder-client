import { Flex, Image, Text, Box, useMediaQuery } from "@chakra-ui/react";

type ImageCardProps = {
  src: string;
  text: string;
};

function ImageCard({ src, text }: ImageCardProps) {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  return (
    <Flex
      w={isLargerThan700 ? "264px" : "100%"}
      h={isLargerThan700 ? "342px" : "140px"}
      border="1px"
      borderColor="gray.300"
      borderRadius="lg"
      flexDirection={isLargerThan700 ? "column" : "row"}
      justifyContent={isLargerThan700 ? "center" : "start"}
      alignItems={isLargerThan700 ? "center" : "center"}
      position="relative"
      _hover={{ borderColor: "black" }}
      mr={isLargerThan700 ? "32px" : "32px"}
      mb={isLargerThan700 ? "0px" : "24px"}
      p={isLargerThan700 ? "0" : "8"}
    >
      <Image
        src={src}
        boxSize={isLargerThan700 ? "120px" : "116px"}
        objectFit="cover"
        alt="1"
        display="flex"
        // ml={isLargerThan700 ? "0px" : "20px"}
      />

      <Text
        as="b"
        ml={isLargerThan700 ? "0px" : "50px"}
        mt={isLargerThan700 ? "10px" : "0px"}
      >
        {text}
      </Text>
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
