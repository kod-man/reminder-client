import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function OnboardingCard() {
  const [name, setName] = useState("");

  return (
    <>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Flex alignItems="center" justifyContent="center" h="28" my="10">
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
        <Flex
          maxW="300px"
          w="30%"
          minW="200px"
          h="404px"
          border="1px"
          borderColor="gray.200"
          borderRadius="lg"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
        >
          <Text as="b" fontSize="lg" mt="6">
            Profilin
          </Text>
          <Button
            w="180px"
            h="180px"
            borderRadius="100"
            justifyContent="center"
            alignItems="center"
            mt="4"
            bg="gray.100"
            color="white"
            fontSize="100"
          >
            N
          </Button>
          <Button bg="gray.100" size="sm" mt="4">
            Fotoğraf yükle
          </Button>
          <Flex mt="6">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              _focusVisible={{ boxShadow: "none", outline: "none" }}
              _placeholder={{
                opacity: 1,
                textAlign: "center",
              }}
              placeholder="İsmini ekle"
              size="md"
            />
          </Flex>
        </Flex>
        <Button
          disabled={!name.trim() || name.length < 1}
          justifyContent="center"
          alignItems="center"
          size="inherit"
          height="36px"
          width="140px"
          border="2px"
          color="white"
          backgroundColor="red"
          mt="10"
        >
          Todoist'i başlat
        </Button>
      </Flex>
    </>
  );
}

export default OnboardingCard;
