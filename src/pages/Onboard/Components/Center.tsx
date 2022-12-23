/* eslint-disable react/jsx-no-undef */
import { Text, Flex, HStack } from "@chakra-ui/react";
import ImageCard from "./ImageCard";
function Center() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h="600"
    >
      <Flex h="100" alignItems="center" flexDirection="column" mb="20">
        <Text as="b" fontSize="2xl">
          Todoist'i nasıl kullanmayı planlıyorsun?
        </Text>
        <Text fontSize="md" color="gray.400" mt="4">
          Uygun olanları seç
        </Text>
      </Flex>
      <HStack spacing="24px">
        <ImageCard
          src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/a44738d5f7fb0d68cfab25ac6ad6e17f.png"
          text="Kişisel"
        />
        <ImageCard
          src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/094e1b7ba10f2b0dac09050a43e74f4c.png"
          text="İş"
        />
        <ImageCard
          src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/655e59f84581a3ee7ba6dd1b998a3a4b.png"
          text="Eğitim"
        />
      </HStack>
    </Flex>
  );
}

export default Center;
