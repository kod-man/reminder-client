import { Flex, Text } from "@chakra-ui/react";
import ColorDotIcon from "../../../icons/ColorDotIcon";
import MyTooltip from "./MyTooltip";
import ThreeDotComponent from "./ThreeDotComponent";

type ProjectItemCardProps = {
  name: string;
  color: string;
  id: string;
};

const ProjectItemCard = ({ name, color, id }: ProjectItemCardProps) => {
  return (
    <Flex
      m="-5px 10px 0 25px "
      fontSize="sm"
      justifyContent="flex-start"
      alignItems="center"
      h="32px"
      borderRadius="5px"
      p="1px"
      _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
    >
      <ColorDotIcon color={color} />
      <Text fontSize="16px">{name} </Text>
      <MyTooltip label={"Remove favorite actions"}>
        <ThreeDotComponent id={id} name={name} />
      </MyTooltip>
    </Flex>
  );
};

export default ProjectItemCard;
