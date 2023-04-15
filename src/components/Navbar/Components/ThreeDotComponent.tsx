import { Flex, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import React from "react";
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

const ThreeDotComponent = () => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [itemIdToDelete, setItemIdToDelete] = React.useState(null);

  const userId: string = sessionStorage.getItem("userId");

  const handleDelete = (id: string) => {
    // implement the delete action here

    setItemIdToDelete(string);
    setShowDeleteModal(true);
    alert("deleted");
    console.log("delete");
  };

  const ThreeDotData = [
    {
      Icon: AboveIcon,
      text: "Add project above",
      hasDivider: false,
      onClick: () => console.log("above")
    },
    {
      Icon: BelowIcon,
      text: "Add project below",
      hasDivider: true,
      onClick: () => console.log("below")
    },
    {
      Icon: EditIcon,
      text: "Edit project",
      hasDivider: false,
      onClick: () => console.log("edit")
    },
    {
      Icon: ShareIcon,
      text: "Share project",
      hasDivider: false,
      onClick: () => console.log("share")
    },
    {
      Icon: FavoriteHeartIcon,
      text: "Add to favorites",
      hasDivider: true,
      onClick: () => console.log("addfav.")
    },
    {
      Icon: DuplicateIcon,
      text: "Duplicate project",
      hasDivider: false,
      onClick: () => console.log("duplicate")
    },
    {
      Icon: EmailIcon,
      text: "Email tasks to this project",
      hasDivider: false,
      onClick: () => console.log("email")
    },
    {
      Icon: CalendarIcon,
      text: "Project calendar feed",
      hasDivider: true,
      onClick: () => console.log("calendar")
    },
    {
      Icon: ArchiveIcon,
      text: "Archive project",
      hasDivider: false,
      onClick: () => console.log("Archive")
    },

    {
      Icon: DeleteProjectIcon,
      text: "Delete project",
      hasDivider: true,
      onClick: () => handleDelete()
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
          {ThreeDotData.map((item) => (
            <ThreeDotsCard
              key={item?.text}
              Icon={item?.Icon}
              text={item?.text}
              hasDivider={item?.hasDivider}
              onClick={item.onClick}
            />
          ))}
        </MenuList>
      </Menu>
      {/* Some code here */}
      {showDeleteModal && (
        <DeleteItemModal
          id={itemIdToDelete}
          onClose={() => setShowDeleteModal(false)}
          tooltipLabel="Items" // Change this to the correct label for your use case
          text="Some item" // Change this to the correct text for your use case
        />
      )}
    </>
  );
};

export default ThreeDotComponent;
