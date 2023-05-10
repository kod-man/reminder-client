import { FC } from "react";
import AddToFavoritesIcon from "../../../icons/AddToFavoritesIcon";
import PenIcon from "../../../icons/PenIcon";
import DeleteItemModal from "../../../modals/DeleteItemModal";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/paths";
import IconsBar from "./IconsBars";

type ItemCardProps = {
  id: string;
  text: string;
  Icon: FC<any>;
  tooltipLabel: string;
  color: string;
  isFavorite: boolean;
};

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  text,
  Icon,
  tooltipLabel,
  color,
  isFavorite = false
}) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(PATHS.FILTERS_AND_LABELS + "/" + id, { state: { name: name } });
  };

  return (
    <Flex
      borderBottom="1px solid"
      borderColor="gray.200"
      w="100%"
      justifyContent="center"
      padding={1}
      cursor="pointer"
      paddingY="10px"
      onClick={() => handleItemClick()}
    >
      <Icon color={color} />
      <Flex ml="2" color="#333" fontSize="14px">
        <Text>{text}</Text>
      </Flex>
      <Spacer />
      {isFavorite ? <AddToFavoritesIcon /> : <PenIcon />}
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
