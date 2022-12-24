/* eslint-disable react/jsx-no-undef */
import { Text, Flex, useMediaQuery, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { StepContext } from "../../../context/StepContext";
import Card3 from "./Card3";
import ImageCard from "./ImageCard";

const TextData = [
  {
    text1: "Todoist'i nasıl kullanmayı planlıyorsun?",
    text2: "Uygun olanları seç",
    imagesData: [
      {
        src: "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/a44738d5f7fb0d68cfab25ac6ad6e17f.png",
        imageText: "Kişisel",
      },
      {
        src: "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/094e1b7ba10f2b0dac09050a43e74f4c.png",
        imageText: "İş",
      },
      {
        src: "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/655e59f84581a3ee7ba6dd1b998a3a4b.png",
        imageText: "Eğitim",
      },
    ],
  },
  {
    text1: "Verimlilik uygulamaları konusunda ne kadar tecrübelisin?",
    text2: "En uygun olanları seç.",
    imagesData: [
      {
        src: "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/214886a3a829667af46a13301e1d42d0.png",
        imageText: "Acemi",
      },
      {
        src: "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/2302cf6b7cec9231d556b170ac2ff9c1.png",
        imageText: "Tecrübeli",
      },
      {
        src: "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/674339c718fac6f9a7ee24c4de439e86.png",
        imageText: "Verimlilik uzmanı",
      },
    ],
  },
];

function Center() {
  const { step } = useContext(StepContext);
  const renderedData = TextData[step - 1];
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems={isLargerThan700 ? "center" : "start"}
      ml={isLargerThan700 ? "20px" : "20px"}
      mr={isLargerThan700 ? "20px" : "20px"}
      h="100%"
      mb="40"
    >
      {step === 1 || step === 2 ? (
        <>
          <Flex
            h="100"
            alignItems="center"
            flexDirection="column"
            mb="8"
            mt="8"
          >
            <Text as="b" fontSize="22">
              {renderedData.text1}
            </Text>
            <Text fontSize="18" color="gray.500" mt="4">
              {renderedData.text2}
            </Text>
          </Flex>
          <Flex
            w={isLargerThan700 ? "100%" : "100%"}
            flexDirection={isLargerThan700 ? "row" : "column"}
            justifyContent={isLargerThan700 ? "center" : "start"}
          >
            {renderedData.imagesData.map((item) => (
              <ImageCard key={item.src} src={item.src} text={item.imageText} />
            ))}
          </Flex>
        </>
      ) : (
        <Card3 />
      )}
      {step === 1 ? (
        <Flex
          w="860px"
          mr="34px"
          mt="8"
          h="72px"
          borderRadius="10"
          alignItems="center"
          justifyContent="center"
          bg="#fbeddf"
        >
          <Flex
            h="40px"
            w="40px"
            borderRadius="50"
            mr="6"
            alignItems="center"
            justifyContent="center"
            bg="white"
          >
            💡
          </Flex>
          Todoist'e harika bir başlangıç yapmanı sağlayabilmemiz için bu iki
          basit soruyu cevapla. 😀
        </Flex>
      ) : null}
      {step === 1 || step === 2 ? (
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          mt={step === 1 ? "10" : "14"}
        >
          <Button
            size="inherit"
            height="36px"
            width="90px"
            border="2px"
            color="white"
            backgroundColor="red.500"
            mb="4"
          >
            Devam Et
          </Button>
        </Flex>
      ) : null}
    </Flex>
  );
}

export default Center;
