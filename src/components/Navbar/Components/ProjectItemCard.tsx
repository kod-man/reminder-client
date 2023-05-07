import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ColorDotIcon from "../../../icons/ColorDotIcon";
import { PATHS } from "../../../utils/paths";
import MyTooltip from "./MyTooltip";
import ThreeDotComponent from "./ThreeDotComponent";

type ProjectItemCardProps = {
  name: string;
  color: string;
  id: string;
};

const ProjectItemCard = ({ name, color, id }: ProjectItemCardProps) => {
  const navigate = useNavigate();
  return (
    <Flex
      m="0px 10px 0 25px "
      fontSize="sm"
      justifyContent="space-between"
      alignItems="center"
      h="32px"
      borderRadius="5px"
      p="1px"
      _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
      onClick={() => navigate(PATHS.PROJECTS + "/" + id)}
    >
      <Flex alignItems="center">
        <ColorDotIcon color={color} />
        <Text fontSize="16px">{name} </Text>
      </Flex>
      <MyTooltip label="More projects actions">
        <Box>
          <ThreeDotComponent id={id} name={name} />
        </Box>
      </MyTooltip>
    </Flex>
  );
};

export default ProjectItemCard;
