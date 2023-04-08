import { Flex } from "@chakra-ui/react";
import AddToFavoritesIcon from "../../../icons/AddToFavoritesIcon";
import PenIcon from "../../../icons/PenIcon";

const icons = [<AddToFavoritesIcon />, <PenIcon />];
function IconsBar() {
  return (
    <Flex justifyContent="center" alignItems="center">
      {icons.map((iconItem, index) => (
        <Flex
          key={index}
          color="gray"
          _hover={{ color: "#202020", bg: "#eee" }}
          borderRadius="20%"
          fontSize="2xl"
          ml="1"
        >
          {iconItem}
        </Flex>
      ))}
    </Flex>
  );
}

export default IconsBar;
