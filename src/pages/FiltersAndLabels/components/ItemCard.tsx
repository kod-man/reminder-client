import { Flex, Spacer, Text } from "@chakra-ui/react";
import { FC } from "react";
import DeleteItemModal from "../../../modals/DeleteItemModal";
import IconsBar from "./IconsBars";

type ItemCardProps = {
  id: string;
  text: string;
  Icon: FC<any>;
  tooltipLabel: string;
};

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  text,
  Icon,
  tooltipLabel
}) => {
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
        <DeleteItemModal tooltipLabel={tooltipLabel} text={text} id={id} />
      </Flex>
    </Flex>
  );
};

export default ItemCard;
