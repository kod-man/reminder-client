import { Flex, MenuItem, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

type CardProps = {
  Icon: IconType;
  text: string;
};
// 1
const ProfileCards: FC<CardProps> = ({ Icon, text }) => {
  return (
    <MenuItem
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
        p="1"
      >
        <Flex
          h={5}
          w={6}
          mr="1"
          justifyContent="center"
          alignItems="center"
          textAlign="left"
        >
          <Icon color="gray" />
        </Flex>
        <Text fontSize="13px" ml="2" mt={1}>
          {text}
        </Text>
      </Flex>
    </MenuItem>
  );
};

export default ProfileCards;
