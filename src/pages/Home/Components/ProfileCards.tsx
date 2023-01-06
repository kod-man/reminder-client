import { Box, Flex, MenuItem, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

type CardProps = {
  Icon: IconType;
  text: string;
};

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
        h="30px"
        w="100%"
        justifyContent="flex-start"
        alignItems="center"
        mb={1}
      >
        <Box h={4} w={4} mr="1" justifyContent="flex-start">
          <Icon color="gray" />
        </Box>
        <Text fontSize="small" ml="2">
          {text}
        </Text>
      </Flex>
    </MenuItem>
  );
};

export default ProfileCards;
