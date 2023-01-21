import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

type CardProps = {
  Icon: IconType;
  text: string;
  iconColor: string;
};

const DrawerCards: FC<CardProps> = ({ Icon, text, iconColor }) => {
  return (
    <Flex
      _hover={{
        backgroundColor: "transparent",
      }}
    >
      <Flex
        _hover={{
          color: "black",
          backgroundColor: "#f3f3f3",
          borderRadius: "5px",
        }}
        px={2}
        w="100%"
        justifyContent="flex-start"
        alignItems="center"
        mb={1}
        margin-block-start="1em"
        padding-inline-start="20px"
        margin-block-end="1em"
      >
        <Flex
          width="32px"
          height="32px"
          mr="1"
          justifyContent="center"
          alignItems="center"
          textAlign="left"
        >
          <Icon color={iconColor} />
        </Flex>
        <Text fontSize="13px" ml="2" mt={1}>
          {text}
        </Text>
      </Flex>
    </Flex>
  );
};

export default DrawerCards;
