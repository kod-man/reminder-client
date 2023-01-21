import { Flex, List, Text, UnorderedList } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

type CardProps = {
  Icon: IconType;
  text: string;
  iconColor: string;
};

const DrawerCards: FC<CardProps> = ({ Icon, text, iconColor }) => {
  return (
    <List spacing="2px" mr="20px" cursor="pointer" >
      <UnorderedList
        _hover={{
          backgroundColor: "transparent",
        }}
        mt="2px"
        h="95*%"
      >
        <Flex
          _hover={{
            color: "black",
            backgroundColor: "#eeeeee",
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
          <Text fontSize="15px" ml="1" mt={1} fontFamily="inherit">
            {text}
          </Text>
        </Flex>
      </UnorderedList>
    </List>
  );
};

export default DrawerCards;
