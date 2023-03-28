import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex ml="auto" onClick={onOpen}>
        {children}
      </Flex>
    </>
  );
};

export default ThreeDotComponent;
