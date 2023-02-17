import { Flex, Icon } from "@chakra-ui/react";
import ToggleIcon from "./ToggleIcon";

interface PersonalIconProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PersonalIcon = ({ isOpen, setIsOpen }: PersonalIconProps) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      cursor="pointer"
      onClick={handleClick}
    >
      <Icon as={ToggleIcon} transform={isOpen ? "rotate(-90deg)" : ""} />
    </Flex>
  );
};

export default PersonalIcon;
