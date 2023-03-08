import {
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../utils/axios";
import {
  defaultToastProps,
  genericErrorToast
} from "../../../utils/genericToast";
import { PATHS } from "../../../utils/paths";
import { API } from "../../../utils/usedApi";
import Header from "./Header";

function OnboardingCard() {
  const [name, setName] = useState("");
  const [preview, setPreview] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");

  const submitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const newUserData = {
      userId,
      userName: name,
      imageSrc: preview
    };
    Axios.put(API.username, newUserData)
      .then(() => {
        toast({
          ...defaultToastProps,
          title: "Your data has been saved.",
          description: "You're ready to go!",
          status: "success"
        });
        navigate(PATHS.TODAY);
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setPreview(base64 as string);
  };

  return (
    <Flex flexDirection="column" justifyContent="center" mb="40">
      <Header />
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex
          border="1px"
          mt="10"
          maxW="300px"
          w="30%"
          minW="200px"
          h="400px"
          borderColor="gray.200"
          borderRadius="lg"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text as="b" mt="8" fontSize="lg">
            Your Profile
          </Text>

          <Flex
            w="180px"
            h="180px"
            borderRadius="full"
            justifyContent="center"
            alignItems="center"
            mt="4"
            bg="gray.100"
            color="white"
            fontSize="100"
            typeof="button"
            flexDirection="column"
            cursor="pointer"
          >
            {preview ? (
              <Image
                w="180px"
                h="180px"
                objectFit="contain"
                borderRadius="full"
                src={preview}
              />
            ) : (
              "N"
            )}
          </Flex>
          <FormLabel
            display="flex"
            alignItems="center"
            htmlFor="upload_image"
            flexDirection="column"
            ml="3"
            mt="2"
            maxH="10%"
          >
            <Input
              visibility="hidden"
              type="file"
              id="upload_image"
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => handleFileUpload(e)}
            />

            <Flex
              border="1px"
              borderColor="#EDF2F7"
              borderRadius="4"
              typeof="button"
              bg="#EDF2F7"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              w="130px"
            >
              {preview ? "Change photo" : "Upload photo"}
            </Flex>
          </FormLabel>
          <Flex mt="6">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              _focusVisible={{ boxShadow: "none", outline: "none" }}
              w="48"
              _placeholder={{
                opacity: 1,
                textAlign: "center"
              }}
              type="text"
              placeholder="Add name"
              mb="8"
            />
          </Flex>
        </Flex>
        <Button
          onClick={submitHandler}
          disabled={!name.trim()}
          justifyContent="center"
          alignItems="center"
          height="36px"
          width="140px"
          color="white"
          backgroundColor="red.400"
          mt="10"
          _hover={{ bg: "#C53030" }}
        >
          Start Todoist
        </Button>
      </Flex>
    </Flex>
  );
}

export default OnboardingCard;
