import { Flex, Text } from "@chakra-ui/react";
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
    <div>
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
        <Flex>
          <MyTooltip label="More label actions">
            <FavoriteDotComponenet id={id} />
          </MyTooltip>
        </Flex>
      </Flex>
    </div>
  );
}

export default FavoriteItemCard;
