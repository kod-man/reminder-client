import { Button, Text } from "@chakra-ui/react";
import { FC } from "react";

type CardProps = {
  text: string;
  Icon: FC<any>;
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
