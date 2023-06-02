import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  Tooltip
} from "@chakra-ui/react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CouchIcon from "../../../icons/CouchIcon";
import DeleteIcon from "../../../icons/DeleteIcon";
import SunIcon from "../../../icons/SunIcon";
import TodayIcon from "../../../icons/TodayIcon";
import UpsentIcon from "../../../icons/UpsentIcon";

function MenuToday() {
  const date = new Date(Date.now());
  const [startDate, setStartDate] = useState(new Date());
  const weeksDate = new Date(Date.now() + 3600 * 1000 * 24);
  const nextWeeks = new Date(Date.now() + 3600 * 1000 * 24 * 7);
  const formatNextWeekOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short"
  };
  const formatTomorrowOptions: Intl.DateTimeFormatOptions = {
    weekday: "short"
  };
  const formatTodayOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric"
  };
  const today = date.toLocaleDateString("en-US", formatTodayOptions);
  const tomorrow = weeksDate.toLocaleDateString("en-US", formatTomorrowOptions);
  const nextWeek = nextWeeks.toLocaleDateString("en-US", formatNextWeekOptions);

  const menuItemsToday = [
    {
      icon: <SunIcon color="orange" />,
      text1: "Tomorrow",
      text2: tomorrow
    },
    {
      icon: <CouchIcon color="#246fe0" />,
      text1: "Next weekend",
      text2: nextWeek
    },
    {
      icon: <UpsentIcon />,
      text1: "No date"
    }
  ];

  return (
    <Menu>
      <Tooltip hasArrow label="Set due date" placement="top">
        <MenuButton
          as={Button}
          bg="white"
          border="1px solid #ddd"
          borderRadius="md"
          h="32px"
          mr="8px"
          px="4px"
          color="#058527"
          _hover={{ bg: "#eee" }}
          leftIcon={<TodayIcon />}
          rightIcon={
            <Tooltip hasArrow label="Remove due date" placement="top">
              <Box
                bg="transparent"
                _hover={{ bg: "#d3d3d3" }}
                borderRadius="5px"
              >
                <DeleteIcon />
              </Box>
            </Tooltip>
          }
        >
          <Text fontSize="13px" fontFamily="inherit" fontWeight="400">
            Today
          </Text>
        </MenuButton>
      </Tooltip>
      <MenuList minWidth="275px">
        <MenuGroup title={today}>
          <MenuDivider />
          {menuItemsToday.map((item) => (
            <MenuItem fontSize="13px" fontWeight="500" key={item.text1}>
              {item.icon}
              <Text ml="2">{item.text1}</Text>
              <Spacer />
              <Text color="#808080" fontWeight="400">
                {item.text2}
              </Text>
            </MenuItem>
          ))}
          <MenuDivider />
          <Flex alignItems="center" justifyContent="center">
            <ReactDatePicker
              closeOnScroll={true}
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
          </Flex>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default MenuToday;
