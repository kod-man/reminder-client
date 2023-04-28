import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import MiniLabelIcon from "../../../icons/MiniLabelIcon";
import FavoriteDotComponenet from "./FavoriteDotComponenet";
import MyTooltip from "./MyTooltip";
type ProjectItemCardProps = {
  name: string;
  color: string;
  id: string;
  isFavorite: boolean;
};
function FavoriteItemCard({
  name,
  color,
  id,
  isFavorite
}: ProjectItemCardProps) {
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
          <MyTooltip label={"More projects actions"}>
            <FavoriteDotComponenet
              id={id}
              name={name}
              isFavorite={isFavorite}
            />
          </MyTooltip>
        </Flex>
      </Flex>
    </div>
  );
}

export default FavoriteItemCard;
