import {
  Button,
  Flex,
  Input,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

function Card3() {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  return (
    <>
      <Flex
        border="1px solid blue"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          border="1px solid red"
          alignItems="center"
          justifyContent="center"
          h="28"
          mt="10"
          mb="10"
        >
          <Flex flexDirection="column">
            <Flex alignItems="center" justifyContent="center" mb="4">
              <Text as="b" mr="4" fontSize="2xl">
                Cevapların için teşekkür ederiz 🎉
              </Text>
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
        <Flex
          w={isLargerThan700 ? "264px" : "100%"}
          h="404px"
          border="1px"
          borderColor="gray.300"
          borderRadius="lg"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
        >
          <Flex as="b" fontSize="22px" mt="6">
            Profilin
          </Flex>
          <Button
            w="180px"
            h="180px"
            borderRadius="100"
            justifyContent="center"
            alignItems="center"
            mt="4"
            bg="#EDF2F7"
            color="white"
            fontSize="100"
          >
            N
          </Button>
          <Button bg="#EDF2F7" size="sm" mt="4">
            Fotoğraf yükle
          </Button>
          <Flex mt="6">
            <Input
              w="48"
              _placeholder={{
                opacity: 1,
                color: "gray.500",
                alignItems: "center",
                justifyContent: "center",
                ml: "20px",
              }}
              placeholder="         İsmini ekle"
              size="md"
            />
          </Flex>
        </Flex>
      </Flex>
      <Button
        size="inherit"
        height="36px"
        width="140px"
        border="2px"
        color="white"
        backgroundColor="red.200"
        mt="10"
      >
        Todoist'i başlat
      </Button>
    </>
  );
}

export default Card3;
