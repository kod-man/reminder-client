import { Flex, List, Text, UnorderedList, Icon } from "@chakra-ui/react";
import { FC } from "react";

type CardProps = {
  icon: React.ReactElement;
  text: string;
  iconColor: string;
};

const DrawerCards: FC<CardProps> = ({ icon, text, iconColor }) => {
  return (
    <List spacing="2px" mr="20px" cursor="pointer">
      <UnorderedList
        _hover={{
          backgroundColor: "transparent",
        }}
      >
        <Flex
          _hover={{
            color: "black",
            backgroundColor: "#eeeeee",
            borderRadius: "5px",
          }}
          w="100%"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Flex
            px={1}
            width="32px"
            height="32px"
            mr="1"
            justifyContent="center"
            alignItems="center"
            textAlign="left"
          >
            <Icon color={iconColor} />
          </Flex>
          <Text fontSize="15px" py="1px" fontFamily="inherit">
            {text}
          </Text>
        </Flex>
      </UnorderedList>
    </List>
  );
};

export default DrawerCards;
