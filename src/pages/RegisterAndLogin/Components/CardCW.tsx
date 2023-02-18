import { Button, Text,Icon } from "@chakra-ui/react";
import { FC, ReactElement } from "react";


type CardProps = {
  text: string;
  Icon: ReactElement;
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
