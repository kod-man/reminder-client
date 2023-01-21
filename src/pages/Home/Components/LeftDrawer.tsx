import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import FilterIcon from "../../../icons/FilterIcon";
import HamburgerIcon from "../../../icons/HamburgerIcon";
import InboxDrawerIcon from "../../../icons/InboxDrawerIcon";
import TodayDrawerIcon from "../../../icons/TodayDrawerIcon";
import UpcomingTcon from "../../../icons/UpcomingTcon";
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
      <div style={{ position: "absolute", top: "45px" }}>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          placement="left"
          size="xs"
        >
          <DrawerOverlay bg="white" mt="44px" />
          <DrawerContent bg="#fafafa" mt="44px">
            <div style={{ paddingTop: "30px" }}>
              {DrawerData.map((item) => (
                <DrawerCards
                  key={item.text}
                  text={item.text}
                  Icon={item.Icon}
                  iconColor={item.iconColor}
                />
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default LeftDrawer;
