import { Flex, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import RemoveFromFavoritesIcon from "../../../icons/RemoveFromFavoritesIcon";
import { removeFavorite } from "../../../store/Label/LabelsSlice";
type FavoriteDotComponentProps = {
  id: string;
};
function FavoriteDotComponenet({ id }: FavoriteDotComponentProps) {
  const dispatch = useDispatch();

  return (
    <Menu id={id}>
      <Flex h="32px" alignItems="flex-start" as={MenuButton}>
        <Text h="50%">...</Text>
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
          onClick={() => {
            dispatch(removeFavorite({ id: id }));
          }}
        >
          <RemoveFromFavoritesIcon color="gray" />
          <Text fontSize="14px" ml="15px">
            Remove from favorites
          </Text>
        </Flex>
      </MenuList>
    </Menu>
  );
}

export default FavoriteDotComponenet;
