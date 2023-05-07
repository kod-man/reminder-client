import {
  Box,
  Flex,
  Spacer,
  Text,
  Tooltip,
  useMediaQuery
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import MessageIcon from "../../icons/MessageIcon";
import ShareIcon from "../../icons/ShareIcon";
import ThreeCircleIcon from "../../icons/ThreeCircleIcon";
import ViewIcon from "../../icons/ViewIcon";

const ProjectFeatures = [
  {
    icon: <ShareIcon />,
    article: "Share",
    label: "Share project"
  },
  {
    icon: <ViewIcon />,
    article: "View",
    label: "View"
  },
  {
    icon: <MessageIcon />,
    article: "Comments",
    label: "Comments"
  },
  {
    icon: <ThreeCircleIcon />,
    article: "",
    label: "Open more project actions"
  }
];
function ProjectDetailHeader() {
  const [isLargerThan1060] = useMediaQuery("(min-width: 1060px)");
  const location = useLocation();

  return (
    <Flex mt="30px" w="100%" mb="15px">
      <Flex alignItems="center" mr="2">
        <Text as="b" fontSize="xl">
          {location.state.name}
        </Text>
      </Flex>
      <Spacer />
      {ProjectFeatures.map((feature) => (
        <Flex key={feature.article} alignItems="center" mx="10px">
          <Tooltip label={feature.label} placement="top">
            <Flex _hover={{ bg: "gray.100" }} cursor="pointer">
              <Box color="gray">{feature.icon}</Box>
              {isLargerThan1060 ? (
                <Text fontSize="sm" ml="1" color="gray">
                  {feature.article}
                </Text>
              ) : null}
            </Flex>
          </Tooltip>
        </Flex>
      ))}
    </Flex>
  );
}

export default ProjectDetailHeader;
