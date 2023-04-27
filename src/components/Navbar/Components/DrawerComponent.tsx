import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterIcon from "../../../icons/FilterIcon";
import InboxDrawerIcon from "../../../icons/InboxDrawerIcon";
import SmallPlusIcon from "../../../icons/SmallPlusIcon";
import TodayDrawerIcon from "../../../icons/TodayDrawerIcon";
import ToggleIcon from "../../../icons/ToggleIcon";
import UpcomingTcon from "../../../icons/UpcomingTcon";
import AddItemModal from "../../../modals/AddItemModal";
import { PATHS } from "../../../utils/paths";
import DrawerCards from "./DrawerCards";
import MyTooltip from "./MyTooltip";
import ProjectCard from "./ProjectCard";

const DrawerData = [
  {
    Icon: InboxDrawerIcon,
    text: "Inbox",
    iconColor: "blue",
    path: PATHS.INBOX
  },
  {
    Icon: TodayDrawerIcon,
    text: "Today",
    iconColor: "green",
    path: PATHS.TODAY
  },
  {
    Icon: UpcomingTcon,
    text: "Upcoming",
    iconColor: "purple",
    path: PATHS.UPCOMING
  },
  {
    Icon: FilterIcon,
    text: "Filters & Labels",
    iconColor: "orange",
    path: PATHS.FILTERSANDLABELS
  }
];

const DrawerComponent = () => {
  const [isProjectListOpen, setIsProjectListOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <Flex minW="300px" height="90vh">
      <Flex flexDirection="column" bg="#fafafa" width="100%" paddingTop="40px">
        {DrawerData.map((item) => (
          <DrawerCards
            key={item.text}
            text={item.text}
            Icon={item.Icon}
            iconColor={item.iconColor}
            path={item.path}
          />
        ))}

        <Flex
          w="90%"
          justifyContent="space-between"
          alignItems="center"
          m={5}
          paddingY={2}
          borderRadius={5}
          _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
        >
          <Text w="100%" onClick={() => navigate(PATHS.PROJECTS)} color="gray">
            Projects
          </Text>
          <Flex>
            <AddItemModal
              ModalOpenComponent={SmallPlusIcon}
              tooltipLabel="Projects"
            />
            <MyTooltip label="Toggle list of Projects">
              <Flex
                transform={
                  !isProjectListOpen ? "rotate(90deg)" : "rotate(0deg)"
                }
                onClick={() => setIsProjectListOpen(!isProjectListOpen)}
                ml={3}
              >
                <ToggleIcon />
              </Flex>
            </MyTooltip>
          </Flex>
        </Flex>

        {isProjectListOpen && <ProjectCard />}
      </Flex>
    </Flex>
  );
};

export default DrawerComponent;
