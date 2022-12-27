import { Button, Flex, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Card3() {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
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

        <Flex
          border="1px"
          mt="10"
          maxW="300px"
          w="30%"
          minW="200px"
          h="404px"
          borderColor="blue"
          borderRadius="lg"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
        >
          <Flex
            border="1px solid red"
            fontSize="lg"
            mt="6"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
          >
            <Text as="b">Profilin</Text>
            <FormLabel htmlFor="upload_image">
              <Flex
                w="180px"
                h="180px"
                borderRadius="100"
                justifyContent="center"
                alignItems="center"
                mt="4"
                bg="gray.100"
                color="white"
                fontSize="100"
                typeof="button"
                flexDirection="column"
                // ml="3"
                cursor="pointer"
              >
                {preview ? (
                  <Image
                    w="180px"
                    h="180px"
                    objectFit="cover"
                    borderRadius="full"
                    src={preview}
                  />
                ) : (
                  "N"
                )}
              </Flex>
              <Input
                color="white"
                _focusVisible={{ boxShadow: "none", outline: "none" }}
                w="48"
                visibility="hidden"
                _placeholder={{
                  opacity: 0.0999,
                  textAlign: "center",
                }}
                type="file"
                placeholder="İsmini ekle"
                size="xs"
                id="upload_image"
                accept="image/png, image/jpg, image/jpeg"
                onChange={onSelectFile}
              />

              <Flex
                border="1px"
                borderColor="#EDF2F7"
                borderRadius="4"
                typeof="button"
                bg="#EDF2F7"
                justifyContent="center"
                w="130px"
                h="32px"
                alignItems="center"
                // ml="10"
                cursor="pointer"
              >
                {preview ? "Fotoğraf değiştir" : "Fotoğraf yükle"}
              </Flex>

              <Flex mt="6">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  _focusVisible={{ boxShadow: "none", outline: "none" }}
                  w="48"
                  _placeholder={{
                    opacity: 1,
                    textAlign: "center",
                  }}
                  type="text"
                  placeholder="İsmini ekle"
                  size="md"
                />
              </Flex>
            </FormLabel>
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

export default Card3;
