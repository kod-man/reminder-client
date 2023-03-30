import { Flex, Text } from "@chakra-ui/react";

type ThreeDotsCardProps = {
  Icon: string;
  text: string;
};
const ThreeDotsCard = ({ Icon, text }: ThreeDotsCardProps) => {
  return (
    <Flex
      fontSize="sm"
      justifyContent="flex-start"
      alignItems="center"
      h="32px"
      borderRadius="5px"
      p="1px"
      _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
    >
      <Icon Icon={Icon} color="gray" />
      <Text fontSize="16px" ml="15px">
        {text}{" "}
      </Text>
    </Flex>
  );
};

export default ThreeDotsCard;
