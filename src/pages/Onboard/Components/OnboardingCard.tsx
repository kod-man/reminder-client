import { Button, Flex, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./Header";

function OnboardingCard() {
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
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <>
      <Header />
      <Flex flexDirection='column' justifyContent='center' alignItems='center'>
        <Flex
          border='1px'
          mt='10'
          maxW='300px'
          w='30%'
          minW='200px'
          h='400px'
          borderColor='gray.200'
          borderRadius='lg'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Text as='b' mt='8' fontSize='lg'>
            Profilin
          </Text>

          <Flex
            w='180px'
            h='180px'
            borderRadius='full'
            justifyContent='center'
            alignItems='center'
            mt='4'
            bg='gray.100'
            color='white'
            fontSize='100'
            typeof='button'
            flexDirection='column'
            cursor='pointer'
          >
            {preview ? (
              <Image
                w='180px'
                h='180px'
                objectFit='contain'
                borderRadius='full'
                src={preview}
              />
            ) : (
              "N"
            )}
          </Flex>
          <FormLabel
            display='flex'
            alignItems='center'
            htmlFor='upload_image'
            flexDirection='column'
            ml='3'
            mt='2'
            maxH='10%'
          >
            <Input
              visibility='hidden'
              type='file'
              id='upload_image'
              accept='image/png, image/jpg, image/jpeg'
              onChange={onSelectFile}
            />

            <Flex
              border='1px'
              borderColor='#EDF2F7'
              borderRadius='4'
              typeof='button'
              bg='#EDF2F7'
              justifyContent='center'
              alignItems='center'
              cursor='pointer'
              w='130px'
            >
              {preview ? "Fotoğraf değiştir" : "Fotoğraf yükle"}
            </Flex>
          </FormLabel>
          <Flex mt='6'>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              _focusVisible={{ boxShadow: "none", outline: "none" }}
              w='48'
              _placeholder={{
                opacity: 1,
                textAlign: "center",
              }}
              type='text'
              placeholder='İsmini ekle'
              mb='8'
            />
          </Flex>
        </Flex>
        <Button
          onClick={submitHandler}
          disabled={!name.trim()}
          justifyContent='center'
          alignItems='center'
          height='36px'
          width='140px'
          color='white'
          backgroundColor='red.400'
          mt='10'
          _hover={{ bg: "#C53030" }}
        >
          Todoist'i başlat
        </Button>
      </Flex>
    </>
  );
}

export default OnboardingCard;
