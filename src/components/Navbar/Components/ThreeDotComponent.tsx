import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure
} from "@chakra-ui/react";
import { ReactNode } from "react";
import AboveIcon from "../../../icons/AboveIcon";
import ArchiveIcon from "../../../icons/ArchiveIcon";
import BelowIcon from "../../../icons/BelowIcon";
import CalendarIcon from "../../../icons/CalendarIcon";
import DeleteIcon from "../../../icons/DeleteIcon";
import DuplicateIcon from "../../../icons/DuplicateIcon";
import EditIcon from "../../../icons/EditIcon";
import EmailIcon from "../../../icons/EmailIcon";
import FavoriteHeartIcon from "../../../icons/FavoriteHeartIcon";
import ShareIcon from "../../../icons/ShareIcon";
import ThreeDotsCard from "./ThreeDotsCard";

interface ThreeDotComponentProps {
  children: ReactNode; // specify the type of children
}

const ThreeDotComponent = ({ children }: ThreeDotComponentProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      Icon: DeleteIcon,
      text: "Delete project"
    }
  ];

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
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
