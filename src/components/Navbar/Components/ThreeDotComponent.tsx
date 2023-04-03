import {
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Text
} from "@chakra-ui/react";
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

const ThreeDotComponent = () => {
  const ThreeDotDataA = [
    {
      Icon: AboveIcon,
      text: "Add project above"
    },
    {
      Icon: BelowIcon,
      text: "Add project below"
    }
  ];

  const ThreeDotDataB = [
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
    }
  ];
  const ThreeDotDataC = [
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
    }
  ];
  const ThreeDotDataD = [
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
          {/* we will work here and add on click */}
          <Text>...</Text>
        </Flex>
        <MenuList>
          {ThreeDotDataA.map(({ Icon, text }) => (
            <ThreeDotsCard key={text} Icon={Icon} text={text} />
          ))}
          <Divider />
          {ThreeDotDataB.map(({ Icon, text }) => (
            <ThreeDotsCard key={text} Icon={Icon} text={text} />
          ))}
          <Divider />
          {ThreeDotDataC.map(({ Icon, text }) => (
            <ThreeDotsCard key={text} Icon={Icon} text={text} />
          ))}
          <Divider />
          {ThreeDotDataD.map(({ Icon, text }) => (
            <ThreeDotsCard key={text} Icon={Icon} text={text} />
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default ThreeDotComponent;
