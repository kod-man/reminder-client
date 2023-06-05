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

const DATE_OPTIONS = {
  TODAY: "Today",
  TOMORROW: "Tomorrow",
  NEXT_WEEK: "Next weekend",
  NO_DATE: "No date"
};
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
              ? DATE_OPTIONS.TODAY
              : checkedDate === tomorrow
              ? DATE_OPTIONS.TOMORROW
              : checkedDate
              ? checkedDate.slice(4)
              : DATE_OPTIONS.NO_DATE}
          </Text>
        </MenuButton>
      </Tooltip>
      <MenuList minWidth="300px">
        <MenuGroup>
          <MenuItem>
            <Text>{checkedDate.slice(4)}</Text>
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={() => setCheckedDate(today)}
            display={checkedDate === today ? "none" : "flex"}
            fontSize="13px"
            fontWeight="500"
          >
            <TodayIcon width="24" height="18" color="green" />
            <Text ml="2">{DATE_OPTIONS.TODAY}</Text>
            <Spacer />
            <Text color="#808080" fontWeight="400">
              {today.slice(0, 3)}
            </Text>
          </MenuItem>
          <MenuItem
            onClick={() => setCheckedDate(tomorrow)}
            display={checkedDate === tomorrow ? "none" : "flex"}
            fontSize="13px"
            fontWeight="500"
          >
            <SunIcon color="orange" />
            <Text ml="2">{DATE_OPTIONS.TOMORROW}</Text>
            <Spacer />
            <Text color="#808080" fontWeight="400">
              {tomorrow.slice(0, 3)}
            </Text>
          </MenuItem>
          <MenuItem
            onClick={() => setCheckedDate(nextWeek)}
            fontSize="13px"
            fontWeight="500"
          >
            <CouchIcon color="#246fe0" />
            <Text ml="2">{DATE_OPTIONS.NEXT_WEEK}</Text>
            <Spacer />
            <Text color="#808080" fontWeight="400">
              {nextWeek}
            </Text>
          </MenuItem>
          <MenuItem
            onClick={() => setCheckedDate("")}
            fontSize="13px"
            fontWeight="500"
          >
            <UpsentIcon />
            <Text ml="2">{DATE_OPTIONS.NO_DATE}</Text>
          </MenuItem>
          <MenuDivider />
          <Flex ml="15px" alignItems="center">
            <TodayIcon />
            <Box ml="10px">
              <ReactDatePicker
                selected={startDate}
                onChange={(date: Date) => {
                  setStartDate(date),
                    setCheckedDate(
                      date.toLocaleDateString("en-US", formatOptions)
                    );
                }}
                showTimeSelect
                dateFormat="d MMMM, yyyy h:mm aa"
                minDate={new Date()}
              />
            </Box>
          </Flex>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default MenuToday;
