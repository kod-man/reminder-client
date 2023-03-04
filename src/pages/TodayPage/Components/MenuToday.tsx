import {
  Button,
  Input,
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
import CouchIcon from "../../../icons/CouchIcon";
import DeleteIcon from "../../../icons/DeleteIcon";
import SunIcon from "../../../icons/SunIcon";
import TodayIcon from "../../../icons/TodayIcon";
import UpsentIcon from "../../../icons/UpsentIcon";

function MenuToday() {
  const date = new Date(Date.now());
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
      icon: <CouchIcon color="blue" />,
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
          p="0 0 0 1"
          as={Button}
          bg="white"
          border="1px"
          borderColor="gray.300"
          borderRadius="md"
          cursor="pointer"
          h="32px"
          mr="2"
          color="#07c138"
          leftIcon={<TodayIcon />}
          rightIcon={
            <Tooltip hasArrow label="Remove due date" placement="top">
              <Button
                p="0 1 0 0"
                size="xs"
                bg="gray.200"
                _hover={{ bg: "#DCDCDC" }}
              >
                <DeleteIcon />
              </Button>
            </Tooltip>
          }
        >
          <Text fontSize="sm" fontFamily="inherit">
            Today
          </Text>
        </MenuButton>
      </Tooltip>
      <MenuList minWidth="275px">
        <MenuGroup title={today}>
          <MenuDivider />
          {menuItemsToday.map((item) => (
            <MenuItem>
              {item.icon}
              <Text ml="2">{item.text1}</Text>
              <Spacer />
              <Text color="gray">{item.text2}</Text>
            </MenuItem>
          ))}
          <MenuDivider />
          <MenuItem>
            <Input type="date"></Input>
          </MenuItem>
          <MenuItem>
            <Text color="red">+ Add time</Text>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default MenuToday;
