import { Box, Drawer, DrawerContent, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import FilterIcon from "../../../icons/FilterIcon";
import InboxDrawerIcon from "../../../icons/InboxDrawerIcon";
import TodayDrawerIcon from "../../../icons/TodayDrawerIcon";
import UpcomingTcon from "../../../icons/UpcomingTcon";
import AddProjectModal from "../../../modals/AddProjectModal";
import { toggleDrawer } from "../../../store/Drawer/drawerSlice";
import DrawerCards from "./DrawerCards";

const DrawerData = [
  { Icon: InboxDrawerIcon, text: "Inbox", iconColor: "blue" },
  { Icon: TodayDrawerIcon, text: "Today", iconColor: "green" },
  { Icon: UpcomingTcon, text: "Upcoming", iconColor: "purple" },
  { Icon: FilterIcon, text: "Filters & Labels", iconColor: "orange" },
];

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DrawerComponent: FC<DrawerProps> = ({ isOpen, onClose }) => {
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
            Icon={item.Icon}
            iconColor={item.iconColor}
          />
        ))}

        <Flex
          _hover={{
            color: "black",
            backgroundColor: "#eeeeee",
            borderRadius: "5px",
          }}
          px={2}
          w="100%"
          alignItems="center"
          m="20px"
          width="275px"
          height="32px"
          cursor="pointer"
        >
          <Text color="gray">Projects</Text>
          <Box ml="auto">
            <AddProjectModal />
          </Box>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
