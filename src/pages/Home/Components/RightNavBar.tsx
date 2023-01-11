import { HStack } from "@chakra-ui/react";
import BellIcon from "../../../icons/BellIcon";
import RisingArrowIcon from "../../../icons/RisingArrowIcon";
import HelpAndInfo from "./HelpAndInfo";
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
      <HelpAndInfo />
      <BellIcon color="white" />
      <ProfileMenu />
    </HStack>
  );
};

export default RightNavBar;
