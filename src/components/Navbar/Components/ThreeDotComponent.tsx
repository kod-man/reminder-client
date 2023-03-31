import { Flex, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import AboveIcon from "../../../icons/AboveIcon";
import ArchiveIcon from "../../../icons/ArchiveIcon";
import BelowIcon from "../../../icons/BelowIcon";
import CalendarIcon from "../../../icons/CalendarIcon";
import { DeletProjectIcon } from "../../../icons/DeletProjectIcon";
import DuplicateIcon from "../../../icons/DuplicateIcon";
import EditIcon from "../../../icons/EditIcon";
import EmailIcon from "../../../icons/EmailIcon";
import FavoriteHeartIcon from "../../../icons/FavoriteHeartIcon";
import ShareIcon from "../../../icons/ShareIcon";
import ThreeDotsCard from "./ThreeDotsCard";

// eslint-disable-next-line no-empty-pattern
const ThreeDotComponent = () => {
  const ThreeDotData = [
    {
      Icon: AboveIcon,
      text: "Add project above"
    },
    {
      Icon: BelowIcon,
      text: "Add project below"
    },
    {
      Icon: EditIcon,
      text: "Edit project"
    },
    {
      Icon: ShareIcon,
      text: "Share project"
    },
    {
      Icon: FavoriteHeartIcon,
      text: "Add to favorites"
    },
    {
      Icon: DuplicateIcon,
      text: "Duplicate project"
    },
    {
      Icon: EmailIcon,
      text: "Email tasks to this project"
    },
    {
      Icon: CalendarIcon,
      text: "Project calendar feed"
    },
    {
      Icon: ArchiveIcon,
      text: "Archive project"
    },
    {
      Icon: DeletProjectIcon,
      text: "Delete project"
    }
  ];

  return (
    <>
      <Menu>
        <Flex as={MenuButton} ml="auto">
          <Text>...</Text>
        </Flex>
        <MenuList>
          {ThreeDotData.map(({ Icon, text }) => (
            <ThreeDotsCard key={text} Icon={Icon} text={text} />
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default ThreeDotComponent;
