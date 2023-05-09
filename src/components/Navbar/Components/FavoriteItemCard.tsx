import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import MiniLabelIcon from "../../../icons/MiniLabelIcon";
import { PATHS } from "../../../utils/paths";
import FavoriteDotComponenet from "./FavoriteDotComponenet";
import MyTooltip from "./MyTooltip";
type ProjectItemCardProps = {
  name: string;
  color: string;
  id: string;
};
function FavoriteItemCard({ name, color, id }: ProjectItemCardProps) {
  const navigate = useNavigate();
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
      onClick={() =>
        navigate(PATHS.FILTERS_AND_LABELS + "/" + id, { state: { name: name } })
      }
    >
      <Flex>
        <MiniLabelIcon color={color} />
        <Text fontSize="16px">{name} </Text>
      </Flex>

      <MyTooltip label="More label actions">
        <Box>
          <FavoriteDotComponenet id={id} />
        </Box>
      </MyTooltip>
    </Flex>
  );
}

export default FavoriteItemCard;
