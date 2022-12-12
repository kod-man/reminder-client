import { Button, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons/lib";

type CardProps = {
  text: string;
  Icon: IconType;
};

const CardCW: FC<CardProps> = ({ text, Icon }) => {
  return (
    <Button width="350px" colorScheme="gray" size="md" variant="outline">
      <Icon />
      <Text as="b" ml="2">
        Continue with {text}
      </Text>
    </Button>
  );
};
export default CardCW;
