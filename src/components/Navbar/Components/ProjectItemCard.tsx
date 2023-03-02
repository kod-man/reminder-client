import { Flex, Text } from "@chakra-ui/react";
import ColorDotIcon from "../../../icons/ColorDotIcon";

type ProjectItemCardProps = {
  id: number;
  name: string;
  color: string;
};

const ProjectItemCard = ({ id, name, color }: ProjectItemCardProps) => {
  return (
    <Flex
      key={id}
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
      <Flex ml="auto">...</Flex>
    </Flex>
  );
};

export default ProjectItemCard;
