/* eslint-disable react/jsx-no-undef */
import { Text, Flex, HStack } from "@chakra-ui/react";
import ImageCard from "../../Onboard/Components/ImageCard";
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
          Verimlilik uygulamaları konusunda ne kadar tecrübelisin?
        </Text>
        <Text fontSize="md" color="gray.400" mt="4">
          En uygun olanları seç.
        </Text>
      </Flex>
      <HStack spacing="24px">
        <ImageCard
          src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/214886a3a829667af46a13301e1d42d0.png"
          text="Acemi"
        />
        <ImageCard
          src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/2302cf6b7cec9231d556b170ac2ff9c1.png"
          text="Tecrübe"
        />
        <ImageCard
          src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/674339c718fac6f9a7ee24c4de439e86.png"
          text="Verimlilik Uzmanı"
        />
      </HStack>
    </Flex>
  );
}

export default Center;
