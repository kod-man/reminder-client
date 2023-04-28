import { Divider, Flex, Icon, Text } from "@chakra-ui/react";

type ThreeDotsCardProps = {
  icon: any;
  text: string;
  hasDivider: boolean;
  onClick: () => void;
};

const ThreeDotsCard = ({
  icon,
  text,
  hasDivider,
  onClick
}: ThreeDotsCardProps) => {
  return (
    <>
      <Flex
        fontSize="sm"
        justifyContent="flex-start"
        alignItems="center"
        h="32px"
        borderRadius="5px"
        p="1px"
        mx="5px"
        _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
        onClick={() => onClick()}
      >
        <Icon as={icon} color="gray" />
        <Text fontSize="14px" ml="15px">
          {text}
        </Text>
      </Flex>
      {hasDivider ? <Divider /> : null}
    </>
  );
};

export default ThreeDotsCard;
