import { Button, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

type CardProps = {
  Icon: IconType;
  text: String;
};

const ModalCard: FC<CardProps> = ({ Icon, text }) => {
  return (
    <Tooltip
      hasArrow
      label={text}
      bg="black"
      color="white"
      borderRadius="5"
      placement="top-start"
    >
      <Button color="gray" size="sm" h="100%" width="100%" ml={2}>
        <Icon />
      </Button>
    </Tooltip>
  );
};

export default ModalCard;
