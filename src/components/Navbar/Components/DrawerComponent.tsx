import { Drawer, DrawerContent, Flex, Spacer, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import ColorDotIcon from "../../../icons/ColorDotIcon";
import FilterIcon from "../../../icons/FilterIcon";
import InboxDrawerIcon from "../../../icons/InboxDrawerIcon";
import PersonalIcon from "../../../icons/PersonalIcon";
import ThreeDotsIcon from "../../../icons/ThreeDotsIcon";
import TodayDrawerIcon from "../../../icons/TodayDrawerIcon";
import UpcomingTcon from "../../../icons/UpcomingTcon";
import AddProjectModal from "../../../modals/AddProjectModal";
import { toggleDrawer } from "../../../store/Drawer/drawerSlice";
import DrawerCards from "./DrawerCards";
import MyTooltip from "./MyTooltip";

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
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);

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
          <Flex
            alignItems="center"
            justifyContent="space-between"
            h="32px"
            borderRadius="5px"
            _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
          >
            <Text color="gray">Projects</Text>
            <Spacer />
            <Flex alignItems="center" ml="140px" >
              <AddProjectModal />
              <MyTooltip label="Add list of Projects">
                <Flex ml="5px">
                  <PersonalIcon
                    isOpen={isPersonalOpen}
                    setIsOpen={setIsPersonalOpen}
                  />
                </Flex>
              </MyTooltip>
            </Flex>
          </Flex>
        </Flex>

        {isPersonalOpen && (
          <Flex
            m="-5px 10px 0 25px "
            fontSize="sm"
            justifyContent="flex-start"
            alignItems="center"
            h="32px"
            maxW="255px"
            borderRadius="5px"
            p="1px"
            _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
          >
            <ColorDotIcon color={"gray"} />
            <Text fontSize="16px">Personal 🙂</Text>
            <Flex ml="auto">
              <ThreeDotsIcon />
            </Flex>
          </Flex>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
