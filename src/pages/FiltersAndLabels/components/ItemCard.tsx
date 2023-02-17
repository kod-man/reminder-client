import { Flex, Spacer, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import TreeDoteIcon from "../../../icons/TreeDoteIcon";
import IconsBar from "./IconsBars";

type ItemCardProps = {
  text: string;
  Icon: IconType;
};

const ItemCard: React.FC<ItemCardProps> = ({ text, Icon }) => {
  return (
    <Flex
      borderBottom="1px solid"
      borderColor="gray.200"
      w="100%"
      justifyContent="center"
      padding={1}
      cursor="pointer"
      paddingY="10px"
    >
      <Icon color="gray" />
      <Flex ml="2" color="#333" fontSize="14px">
        <Text>{text}</Text>
      </Flex>
      <Spacer />
      <IconsBar />
      <Flex
        w="24px"
        h="24px"
        alignItems="center"
        justifyContent="center"
        ml="1"
        color="gray"
        _hover={{ color: "#202020", bg: "#eee" }}
        borderRadius="20%"
        fontSize="2xl"
      >
        <TreeDoteIcon color="gray" />
      </Flex>
    </Flex>
  );
};

export default ItemCard;
