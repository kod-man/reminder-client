import { Flex, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { useState } from "react";
import AboveIcon from "../../../icons/AboveIcon";
import ArchiveIcon from "../../../icons/ArchiveIcon";
import BelowIcon from "../../../icons/BelowIcon";
import CalendarIcon from "../../../icons/CalendarIcon";
import { DeleteProjectIcon } from "../../../icons/DeleteProjectIcon";
import DuplicateIcon from "../../../icons/DuplicateIcon";
import EditIcon from "../../../icons/EditIcon";
import EmailIcon from "../../../icons/EmailIcon";
import FavoriteHeartIcon from "../../../icons/FavoriteHeartIcon";
import ShareIcon from "../../../icons/ShareIcon";
import DeleteItemModal from "../../../modals/DeleteItemModal";
import ThreeDotsCard from "./ThreeDotsCard";

type ThreeDotComponentProps = {
  name: string;
  id: string;
};

const ThreeDotComponent = ({ name, id }: ThreeDotComponentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const ThreeDotData = [
    {
      icon: AboveIcon,
      text: "Add project above",
      hasDivider: false,
      onClick: () => console.log("above")
    },
    {
      icon: BelowIcon,
      text: "Add project below",
      hasDivider: true,
      onClick: () => console.log("below")
    },
    {
      icon: EditIcon,
      text: "Edit project",
      hasDivider: false,
      onClick: () => console.log("edit")
    },
    {
      icon: ShareIcon,
      text: "Share project",
      hasDivider: false,
      onClick: () => console.log("share")
    },
    {
      icon: FavoriteHeartIcon,
      text: "Add to favorites",
      hasDivider: true,
      onClick: () => console.log("addfav.")
    },
    {
      icon: DuplicateIcon,
      text: "Duplicate project",
      hasDivider: false,
      onClick: () => console.log("duplicate")
    },
    {
      icon: EmailIcon,
      text: "Email tasks to this project",
      hasDivider: false,
      onClick: () => console.log("email")
    },
    {
      icon: CalendarIcon,
      text: "Project calendar feed",
      hasDivider: true,
      onClick: () => console.log("calendar")
    },
    {
      icon: ArchiveIcon,
      text: "Archive project",
      hasDivider: false,
      onClick: () => console.log("Archive")
    },

    {
      icon: DeleteProjectIcon,
      text: "Delete project",
      hasDivider: true,
      onClick: () => handleModalOpen()
    }
  ];

  return (
    <>
      <Menu>
        <Flex as={MenuButton} ml="auto">
          <Text>...</Text>
        </Flex>
        <MenuList>
          {ThreeDotData.map((item) => (
            <ThreeDotsCard
              key={item?.text}
              icon={item?.icon}
              text={item?.text}
              hasDivider={item?.hasDivider}
              onClick={item.onClick}
            />
          ))}
        </MenuList>
      </Menu>
      {isModalOpen ? (
        <DeleteItemModal tooltipLabel="Projects" text={name} id={id} />
      ) : null}
    </>
  );
};

export default ThreeDotComponent;
