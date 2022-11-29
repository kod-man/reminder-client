import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
type CardProps = {
  src: string;
  text1: string;
  text2: string;
};

const Card: FC<CardProps> = ({ src, text1, text2 }) => {
  return (
    <Box padding="1">
      <Image src={src} />
      <Box mt="5" ml="10">
        <Text as="b" fontSize="sm">
          {text1}
        </Text>
        <Text fontSize="sm">{text2} </Text>
      </Box>
    </Box>
  );
};
export default Card;
