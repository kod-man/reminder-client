import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FilterIcon from "../../../icons/FilterIcon";
import HamburgerIcon from "../../../icons/HamburgerIcon";
import InboxIcon from "../../../icons/InboxIcon";
import TodayIcon from "../../../icons/TodayIcon";
import UpcomingTcon from "../../../icons/UpcomingTcon";

const DrawerDate =[
  { Icon: InboxIcon, text: "Inbox", iconColor:"blue" },
  { Icon: TodayIcon, text: "Today" ,iconColor:"green"},
  { Icon: UpcomingTcon, text: "Upcoming" ,iconColor:"purple"},
  { Icon: FilterIcon, text: "Filters & Labels" ,iconColor:"orange"},
];

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LeftDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Flex
        as={Button}
        onClick={() => setIsOpen(true)}
        size="35px"
        bg="#db4c3f"
        _hover={{ bg: "#e27065" }}
      >
        <HamburgerIcon color="white" />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement="left"
        size="xs"
      >
        <DrawerOverlay bg="#fafafa" />

        <DrawerContent>
        {DrawerData.map((item) => (
          <DrawerCards key={item.text} text={item.text} Icon={item.Icon} color={item.iconColor} />
        ))};

        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LeftDrawer;
