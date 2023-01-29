import {
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { RefObject, useRef } from "react";
import ArrowIcon from "../../../icons/ArrowIcon";
import ClockIcon from "../../../icons/ClockIcon";
import ColorFlagIcon from "../../../icons/ColorFlagIcon";
import CouchIcon from "../../../icons/CouchIcon";
import FlagIcon from "../../../icons/FlagIcon";
import JigsawIcon from "../../../icons/JigsawIcon";
import SunIcon from "../../../icons/SunIcon";
import TicketIcon from "../../../icons/TicketIcon";
import TickIcon from "../../../icons/TickIcon";
import TodayIcon from "../../../icons/TodayIcon";
import TreeDoteIcon from "../../../icons/TreeDoteIcon";
import UpsentIcon from "../../../icons/UpsentIcon";
import ConfirmModal from "../../../modals/ConfirmModal";

function TodayCard() {
  const date = new Date(Date.now());
  const weeksDate = new Date(Date.now() + 3600 * 1000 * 24);
  const nextWeeks = new Date(Date.now() + 3600 * 1000 * 24 * 7);
  const formatNextWeekOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const formatTomorrowOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
  };
  const formatTodayOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const today = date.toLocaleDateString("en-US", formatTodayOptions);
  const tomorrow = weeksDate.toLocaleDateString("en-US", formatTomorrowOptions);
  const nextWeek = nextWeeks.toLocaleDateString("en-US", formatNextWeekOptions);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef() as RefObject<HTMLButtonElement>;
  return (
    <>
      <Flex w='100vh' ml='3' mt='3'>
        <Menu>
          <Tooltip hasArrow label='Set due date' placement='top'>
            <MenuButton
              as={Button}
              bg='white'
              border='1px'
              borderColor='gray.300'
              borderRadius='md'
              alignItems='center'
              justifyContent='center'
              cursor='pointer'
              h='30px'
              mr='2'
              color='green'
              flexDirection='row'
              leftIcon={<TodayIcon />}
            >
              Today
            </MenuButton>
          </Tooltip>
          <MenuList minWidth='300px'>
            <MenuGroup title={today}>
              <MenuDivider />
              <MenuItem>
                <SunIcon color='orange' />
                <Text ml='2'>Tomorrow</Text>
                <Spacer />
                <Text color='gray'>{tomorrow}</Text>
              </MenuItem>
              <MenuItem>
                <CouchIcon color='blue' />
                <Text ml='2'>Next weekend</Text>
                <Spacer />
                <Text color='gray'>{nextWeek}</Text>
              </MenuItem>
              <MenuItem>
                <UpsentIcon />
                <Text ml='2'>No date</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Input type='date'></Input>
              </MenuItem>
              <MenuItem>
                <Text color='red'>+ Add time</Text>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Menu>
          <Tooltip hasArrow label='Set priority p1, p2, p3, p4' placement='top'>
            <MenuButton
              as={Button}
              bg='white'
              border='1px'
              borderColor='gray.300'
              borderRadius='md'
              alignItems='center'
              justifyContent='center'
              cursor='pointer'
              h='30px'
              mr='2'
              color='gray'
              leftIcon={<FlagIcon />}
            >
              Priority
            </MenuButton>
          </Tooltip>
          <MenuList minWidth='150px' overflowY='scroll'>
            <MenuItem>
              <ColorFlagIcon color='red' />

              <Text ml='2'>Priority 1</Text>
            </MenuItem>

            <MenuItem>
              <ColorFlagIcon color='orange' /> <Text ml='2'>Priority 2</Text>
            </MenuItem>

            <MenuItem>
              <ColorFlagIcon color='blue' /> <Text ml='2'>Priority 3</Text>
            </MenuItem>

            <MenuItem>
              <FlagIcon />
              <Text ml='3' mr='2'>
                Priority 4
              </Text>
              <TickIcon color='red' />
            </MenuItem>
          </MenuList>
        </Menu>
        <Tooltip hasArrow label='Add reminders' placement='top'>
          <Button
            bg='white'
            onClick={onOpen}
            mr='2'
            border='1px'
            borderColor='gray.300'
            borderRadius='md'
            p='2'
            h='30px'
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
          >
            <ClockIcon />
            <Text color='gray' ml='1'>
              Reminders
            </Text>
          </Button>
        </Tooltip>
        <Menu>
          <MenuButton
            as={Button}
            bg='white'
            border='1px'
            borderColor='gray.300'
            borderRadius='md'
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
            h='30px'
          >
            <TreeDoteIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <TicketIcon /> <Text ml='2'>Labels</Text>
              <Spacer />
              <Text>@</Text>
            </MenuItem>
            <MenuItem>
              <ArrowIcon />
              <Text ml='2'>Move to project</Text>
              <Spacer />
              <Text>#</Text>
            </MenuItem>
            <MenuDivider />

            <MenuItem>
              <JigsawIcon />
              <Text ml='2'>Add extension...</Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem color='red'>Edit task actions</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <ConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        header='Go Pro'
        body='Reminders are only available on Pro and Business plans.'
        handlerFunction={onClose}
        confirmButton='Upgrade for more'
        cancelButton='Cancel'
      />
    </>
  );
}

export default TodayCard;
