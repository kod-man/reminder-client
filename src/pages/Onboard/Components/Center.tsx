/* eslint-disable react/jsx-no-undef */
import { Text, Flex, useMediaQuery } from "@chakra-ui/react";
import { useContext } from "react";
import { StepContext } from "../../../context/StepContext";
import ImageCard from "./ImageCard";

const TextData = [
  {
    text1: "Todoist'i nasıl kullanmayı planlıyorsun?",
    text2: "Uygun olanları seç",
  },
  {
    text1: "Verimlilik uygulamaları konusunda ne kadar tecrübelisin?",
    text2: "En uygun olanları seç.",
  },
  {
    text1: "Cevapların için teşekkür ederiz 🎉",
    text2: "Daha düzenli olma yolunda ilk adımı attığın için tebrik ederiz.",
    text3: "Sana özel Todoist'in kullanıma hazır.",
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
      alignItems="center"
      h="600"
    >
      <Flex h="100" alignItems="center" flexDirection="column" mb="20">
        <Text as="b" fontSize="2xl">
          {renderedData.text1}
        </Text>
        <Text fontSize="md" color="gray.400" mt="4">
          {renderedData.text2}
        </Text>
        {step === 3 ? (
          <Text fontSize="md" color="gray.400">
            {renderedData.text3}
          </Text>
        ) : null}
      </Flex>
      {step === 3 ? (
        <Text>catd</Text>
      ) : (
        <Flex
          flexWrap="wrap"
          flexDirection={isLargerThan700 ? "row" : "column"}
        >
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
        </Flex>
      )}
    </Flex>
  );
}

export default Center;
