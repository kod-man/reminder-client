import { Box, Flex, Text } from "@chakra-ui/react";
import MiniLabelIcon from "../../../icons/MiniLabelIcon";
import FavoriteDotComponenet from "./FavoriteDotComponenet";
import MyTooltip from "./MyTooltip";
type ProjectItemCardProps = {
  name: string;
  color: string;
  id: string;
};
function FavoriteItemCard({ name, color, id }: ProjectItemCardProps) {
  return (
    <Flex
      m="-5px 10px 0 25px "
      fontSize="sm"
      justifyContent="space-between"
      alignItems="center"
      h="32px"
      borderRadius="5px"
      p="1px"
      _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
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
