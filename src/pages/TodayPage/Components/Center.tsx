import { Flex, Img, Text } from "@chakra-ui/react";

function Centere() {
  return (
    <Flex
      mt="4"
      w="100%"
      alignItems="flex-start"
      justifyContent="center"
      h="432px"
    >
      <Flex
        direction="column"
        h="432px"
        flexDirection="column"
        alignItems="center"
        w="380px"
      >
        <Img src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/d7c6fac19c896959feaaffd6472ca7a0.jpg" />
        <Text as="b" fontSize="lg" mb="2">
          Bugün neler yapman gerekiyor?
        </Text>
        <Text color="gray">Varsayılan olarak, buraya eklenen</Text>
        <Text color="gray">görevlerin bitiş tarihi bugündür. Görev</Text>
        <Text color="gray">eklemek için + işaretine tıkla.</Text>
      </Flex>
    </Flex>
  );
}

export default Centere;
