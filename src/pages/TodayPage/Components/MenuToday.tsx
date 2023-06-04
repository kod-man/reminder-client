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

  const [startDate, setStartDate] = useState(date);

  const weeksDate = new Date(Date.now() + 3600 * 1000 * 24);
  const nextWeeks = new Date(Date.now() + 3600 * 1000 * 24 * 7);
  const formatOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short"
  };
  const today = date.toLocaleDateString("en-US", formatOptions);
  const tomorrow = weeksDate.toLocaleDateString("en-US", formatOptions);
  const nextWeek = nextWeeks.toLocaleDateString("en-US", formatOptions);
  const [checkedDate, setCheckedDate] = useState(today);
  const menuItemsToday = [
    {
      icon: <TodayIcon width="24" height="18" color="green" />,
      text1: "Today",
      text2: today.slice(0, 3)
    },
    {
      icon: <SunIcon color="orange" />,
      text1: "Tomorrow",
      text2: tomorrow.slice(0, 3)
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
                display={checkedDate ? "flex" : "none"}
                bg="transparent"
                _hover={{ bg: "#d3d3d3" }}
                borderRadius="5px"
                onClick={(e) => {
                  e.stopPropagation(), setCheckedDate("");
                }}
              >
                <DeleteIcon />
              </Box>
            </Tooltip>
          }
        >
          <Text
            fontSize="13px"
            fontFamily="inherit"
            fontWeight="400"
            placeholder="Due date"
          >
            {checkedDate === today
              ? "Today"
              : checkedDate === tomorrow
              ? "Tomorrow"
              : checkedDate
              ? checkedDate.slice(4)
              : "Due date"}
          </Text>
        </MenuButton>
      </Tooltip>
      <MenuList minWidth="300px">
        <MenuGroup>
          <MenuItem>
            <Text>{checkedDate.slice(4)}</Text>
          </MenuItem>
          <MenuDivider />
          {menuItemsToday.map((item) => (
            <MenuItem
              display={
                (item.text1 === "Today" && checkedDate === today) ||
                (item.text1 === "Tomorrow" && checkedDate === tomorrow)
                  ? "none"
                  : "flex"
              }
              fontSize="13px"
              fontWeight="500"
              key={item.text1}
              onClick={() => {
                if (item.text1 === "Tomorrow") {
                  setCheckedDate(tomorrow);
                } else if (item.text1 === "Today") {
                  setCheckedDate(today);
                } else if (item.text1 === "Next weekend") {
                  setCheckedDate(nextWeek);
                } else if (item.text1 === "No date") {
                  setCheckedDate("");
                }
              }}
            >
              {item.icon}
              <Text ml="2">{item.text1}</Text>
              <Spacer />
              <Text color="#808080" fontWeight="400">
                {item.text2}
              </Text>
            </MenuItem>
          ))}
          <MenuDivider />
        </MenuGroup>
        <Flex ml="15px" alignItems="center">
          <TodayIcon />
          <Box ml="10px">
            <ReactDatePicker
              selected={startDate}
              onChange={(date: Date) => {
                setStartDate(date),
                  setCheckedDate(
                    startDate.toLocaleDateString("en-US", formatOptions)
                  );
              }}
              showTimeSelect
              dateFormat="d MMMM, yyyy h:mm aa"
              minDate={new Date()}
            />
          </Box>
        </Flex>
      </MenuList>
    </Menu>
  );
}

export default MenuToday;
