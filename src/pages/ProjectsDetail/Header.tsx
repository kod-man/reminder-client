import {
  Box,
  Flex,
  Spacer,
  Text,
  Tooltip,
  useMediaQuery
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../..";
import MessageIcon from "../../icons/MessageIcon";
import ShareIcon from "../../icons/ShareIcon";
import ThreeCircleIcon from "../../icons/ThreeCircleIcon";
import ViewIcon from "../../icons/ViewIcon";
const CONNECTIONS = [
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
function Header() {
  const [isLargerThan1060] = useMediaQuery("(min-width: 1060px)");
  const projects = useSelector((state: RootState) => state.projects.projects);
  const { projectId } = useParams();
  return (
    <Flex mt="30px" w="100%" mb="15px">
      <Flex alignItems="center" mr="2">
        {projects.map((item) => (
          <Text as="b" fontSize="xl">
            {item._id === projectId ? item.name : ""}
          </Text>
        ))}
      </Flex>
      <Spacer />
      {CONNECTIONS.map((connection) => (
        <Flex key={connection.article} alignItems="center" mx="10px">
          <Tooltip label={connection.label} placement="top">
            <Flex _hover={{ bg: "gray.100" }} cursor="pointer">
              <Box color="gray">{connection.icon}</Box>
              {isLargerThan1060 ? (
                <Text fontSize="sm" ml="1" color="gray">
                  {connection.article}
                </Text>
              ) : null}
            </Flex>
          </Tooltip>
        </Flex>
      ))}
    </Flex>
  );
}

export default Header;
