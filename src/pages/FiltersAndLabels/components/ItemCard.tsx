import { FC } from "react";
import AddToFavoritesIcon from "../../../icons/AddToFavoritesIcon";
import PenIcon from "../../../icons/PenIcon";
import DeleteItemModal from "../../../modals/DeleteItemModal";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Tooltip,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/paths";
import NotFavoriteIcon from "../../../icons/NotFavoriteIcon";
import TrashIcon from "../../../icons/TrashIcon";
import AddItemModal from "../../../modals/AddItemModal";
import { Axios } from "../../../utils/axios";
import { API } from "../../../utils/usedApi";
import { useDispatch } from "react-redux";
import { refreshPage } from "../../../store/Refresh/RefreshSlice";
import { genericErrorToast } from "../../../utils/genericToast";

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
  isFavorite
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleItemClick = () => {
    navigate(PATHS.FILTERS_AND_LABELS + "/" + id, { state: { name: name } });
  };
  const iconPen = () => {
    return (
      <Text color="gray" mx="1">
        <PenIcon />
      </Text>
    );
  };
  const favoriteData = {
    name: text,
    color,
    isFavorite: !isFavorite
  };

  const favoriteHandler = () => {
    Axios.put(API.updateLabel + "/" + id, favoriteData)
      .then(() => {
        dispatch(refreshPage("Labels"));
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });
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
      <Tooltip
        label={isFavorite ? "Remove From Favorites" : "Add to Favorites"}
        placement="top"
      >
        <Flex
          color="gray"
          onClick={(e) => {
            e.stopPropagation();
            favoriteHandler();
          }}
        >
          {isFavorite ? <AddToFavoritesIcon /> : <NotFavoriteIcon />}
        </Flex>
      </Tooltip>
      <AddItemModal
        ModalOpenComponent={iconPen}
        tooltipLabel={tooltipLabel}
        action="Edit"
        name={text}
        color={color}
        isFavorite={isFavorite}
        id={id}
      />

      <Flex
        w="24px"
        h="24px"
        alignItems="center"
        justifyContent="center"
        color="gray"
        _hover={{ color: "#202020", bg: "#eee" }}
        borderRadius="20%"
        fontSize="2xl"
      >
        <Box
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        >
          <TrashIcon />
        </Box>
        <DeleteItemModal
          tooltipLabel={tooltipLabel}
          text={text}
          id={id}
          isOpen={isOpen}
          onClose={onClose}
        />
      </Flex>
    </Flex>
  );
};

export default ItemCard;
