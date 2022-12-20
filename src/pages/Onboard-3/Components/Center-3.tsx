import { Flex, Text } from "@chakra-ui/react";
import { GiPartyFlags } from "react-icons/gi";

function Center3() {
  return (
    <Flex alignItems="center" justifyContent="center" h="28" mt="10" mb="10">
      <Flex flexDirection="column">
        <Flex alignItems="center" justifyContent="center" mb="4">
          <Text as="b" mr="4" fontSize="2xl">
            Cevapların için teşekkür ederiz{" "}
          </Text>
          <GiPartyFlags />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="lg" color="gray.500">
            Daha düzenli olma yolunda ilk adımı attığın için tebrik ederiz.
          </Text>
          <Text fontSize="lg" color="gray.500">
            Sana özel Todoist'in kullanıma hazır.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Center3;
