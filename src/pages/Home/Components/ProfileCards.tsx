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
        color: "black",
        backgroundColor: "#f3f3f3",
        display: "flex",
        padding: "1 , 1",
        marginLeft: "1",
        marginTop: "1",
        marginBottom: "2",
        borderRadius: "5",
        maxW: "95%",
      }}
    >
      <Flex justifyContent="flex-start" alignItems="center" mb={1}>
        <Box h={4} w={4} mr="1" justifyContent="flex-start">
          <Icon color="gray" />
        </Box>
        <Box>
          <Text fontSize="small" ml="2">
            {text}
          </Text>
        </Box>
      </Flex>
    </MenuItem>
  );
};

export default ProfileCards;
