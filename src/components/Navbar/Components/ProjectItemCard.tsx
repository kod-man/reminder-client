import { Flex, Text } from "@chakra-ui/react";
import ColorDotIcon from "../../../icons/ColorDotIcon";
import MyTooltip from "./MyTooltip";
import ThreeDotComponent from "./ThreeDotComponent";

type ProjectItemCardProps = {
  name: string;
  color: string;
};

const ProjectItemCard = ({ name, color }: ProjectItemCardProps) => {
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
      <MyTooltip label={"More projects actions"}>
        <ThreeDotComponent />
      </MyTooltip>
    </Flex>
  );
};

export default ProjectItemCard;
