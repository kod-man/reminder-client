import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import MiniLabelIcon from "../../../icons/MiniLabelIcon";
import { refreshPage } from "../../../store/Refresh/RefreshSlice";
import { Axios } from "../../../utils/axios";
import {
  defaultToastProps,
  genericErrorToast
} from "../../../utils/genericToast";
import { PATHS } from "../../../utils/paths";
import { API } from "../../../utils/usedApi";
import FavoriteDotComponenet from "./FavoriteDotComponenet";
import MyTooltip from "./MyTooltip";
type ProjectItemCardProps = {
  name: string;
  color: string;
  id: string;
};
function FavoriteItemCard({ name, color, id }: ProjectItemCardProps) {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const itemData = {
    name,
    color,
    isFavorite: false
  };
  const removeHandler = (e: any) => {
    e.preventDefault();
    Axios.put(API.updateLabel + "/" + id, itemData)
      .then(() => {
        toast({
          ...defaultToastProps,
          title: "Label is not favorite anymore",
          status: "success"
        });
        dispatch(refreshPage("Labels"));
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });
  };

  return (
    <Flex
      m="0px 10px 0 25px "
      fontSize="sm"
      justifyContent="space-between"
      alignItems="center"
      h="32px"
      borderRadius="5px"
      p="1px"
      _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
    >
      <Flex
        onClick={() =>
          navigate(PATHS.FILTERS_AND_LABELS + "/" + id, {
            state: { name: name }
          })
        }
        w="100%"
      >
        <MiniLabelIcon color={color} />
        <Text fontSize="16px">{name} </Text>
      </Flex>

      <MyTooltip label="More label actions">
        <Box>
          <FavoriteDotComponenet removeHandler={removeHandler} />
        </Box>
      </MyTooltip>
    </Flex>
  );
}

export default FavoriteItemCard;
