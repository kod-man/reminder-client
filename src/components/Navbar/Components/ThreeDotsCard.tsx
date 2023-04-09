import { Divider, Flex, Text } from "@chakra-ui/react";

type ThreeDotsCardProps = {
  Icon: any;
  text: string;
  hasDivider: boolean;
  onClick: () => void;
};

const ThreeDotsCard = ({
  Icon,
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
        // border="1px solid red"
        _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
        onClick={() => onClick()}
      >
        <Icon Icon={Icon} color="gray" />
        <Text fontSize="14px" ml="15px">
          {text}
        </Text>
      </Flex>
      {hasDivider ? <Divider /> : null}
    </>
  );
};

export default ThreeDotsCard;
