import { HStack } from "@chakra-ui/react";
import QuestionIcon from "../../../icons/QuestionIcon";
import RisingArrowIcon from "../../../icons/RisingArrowIcon";
import Notification from "./Notification";
import PlusModal from "./PlusModal";
import ProfileMenu from "./ProfileMenu";

const RightNavBar = () => {
  return (
    <HStack
      align-items="center"
      justifyContent="end"
      mr="7"
      ml="auto"
      flexBasis="150px"
      height="100%"
    >
      <PlusModal />
      <RisingArrowIcon color="white" />
      <QuestionIcon color="white" />
      <Notification />
      <ProfileMenu />
    </HStack>
  );
};

export default RightNavBar;
