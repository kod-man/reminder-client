import { Flex, Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import RedDotIcon from "../../../icons/RedDotIcon";
import RedTickIcon from "../../../icons/RedTickIcon";

type CardProps = {
  text: string;
  hasPassed: boolean;
};

const PassSpecsCard: FC<CardProps> = ({ text, hasPassed }) => {
  const IconComponent = hasPassed ? RedTickIcon : RedDotIcon;
  return (
    <Flex>
      <Icon as={IconComponent} color={hasPassed ? "green" : "#E53E3E"} />
      <Text
        ml="5px"
        fontSize="sm"
        fontFamily="unset"
        color={hasPassed ? "green" : "#E53E3E"}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default PassSpecsCard;
