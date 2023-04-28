import { Flex, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import RemoveFromFavoritesIcon from "../../../icons/RemoveFromFavoritesIcon";
type FavoriteDotComponentProps = {
  name: string;
  id: string;
  isFavorite: boolean;
};
function FavoriteDotComponenet({
  id,
  name,
  isFavorite
}: FavoriteDotComponentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <Menu>
        <Flex as={MenuButton}>
          <Text>...</Text>
        </Flex>
        <MenuList>
          <Flex
            fontSize="sm"
            justifyContent="flex-start"
            alignItems="center"
            h="32px"
            borderRadius="5px"
            p="1px"
            mx="5px"
            _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
            onClick={() => handleModalOpen()}
          >
            <RemoveFromFavoritesIcon color="gray" />
            <Text fontSize="14px" ml="15px">
              Remove from favorites
            </Text>
          </Flex>
        </MenuList>
      </Menu>
      {isModalOpen ? (isFavorite = false) : null}
    </div>
  );
}

export default FavoriteDotComponenet;
