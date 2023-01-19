import { HStack } from "@chakra-ui/react";
import BellIcon from "../../../icons/BellIcon";
import QuestionIcon from "../../../icons/QuestionIcon";
import RisingArrowIcon from "../../../icons/RisingArrowIcon";
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
      <BellIcon color="white" />
      <ProfileMenu displayName={""} displayEmail={""} />
    </HStack>
  );
};

export default RightNavBar;
