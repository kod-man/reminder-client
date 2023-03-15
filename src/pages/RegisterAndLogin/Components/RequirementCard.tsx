import { Flex, Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import RedDotIcon from "../../../icons/RedDotIcon";
import RedTickIcon from "../../../icons/RedTickIcon";

type CardProps = {
  text: string;
  hasPassed: boolean;
};

const RequirementCard: FC<CardProps> = ({ text, hasPassed }) => {
  const color = hasPassed ? "green" : "#E53E3E";
  const IconComponent = hasPassed ? RedTickIcon : RedDotIcon;
  return (
    <Flex>
      <Icon as={IconComponent} color={color} />
      <Text ml="5px" fontSize="sm" color={color}>
        {text}
      </Text>
    </Flex>
  );
};

export default RequirementCard;
