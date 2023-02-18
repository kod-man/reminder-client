import { Drawer, DrawerContent, Flex, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import FilterIcon from "../../../icons/FilterIcon";
import InboxDrawerIcon from "../../../icons/InboxDrawerIcon";
import TodayDrawerIcon from "../../../icons/TodayDrawerIcon";
import ToggleIcon from "../../../icons/ToggleIcon";
import UpcomingTcon from "../../../icons/UpcomingTcon";
import AddProjectModal from "../../../modals/AddProjectModal";
import { toggleDrawer } from "../../../store/Drawer/drawerSlice";
import DrawerCards from "./DrawerCards";
import MyTooltip from "./MyTooltip";
import ProjectCardComponent from "./ProjectCardComponent";

const DrawerData = [
  { icon: InboxDrawerIcon, text: "Inbox", iconColor: "blue" },
  { icon: TodayDrawerIcon, text: "Today", iconColor: "green" },
  { icon: UpcomingTcon, text: "Upcoming", iconColor: "purple" },
  { icon: FilterIcon, text: "Filters & Labels", iconColor: "orange" },
];

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DrawerComponent: FC<DrawerProps> = ({ isOpen, onClose }) => {
  const [isProjectListOpen, setIsProjectListOpen] = useState(false);

  const dispatch = useDispatch();
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="left"
      size="xs"
      onCloseComplete={() => dispatch(toggleDrawer(false))}
    >
      <DrawerContent bg="#fafafa" mt="44px" paddingTop="30px">
        {DrawerData.map((item) => (
          <DrawerCards
            key={item.text}
            text={item.text}
            icon={item.icon}
            iconColor={item.iconColor}
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
          <Text color="gray">Projects</Text>
          <Flex>
            <AddProjectModal />
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

        {isProjectListOpen && (
          <ProjectCardComponent name="deneme" color="gray" />
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
