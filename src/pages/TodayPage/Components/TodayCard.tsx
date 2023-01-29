import {
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
  useDisclosure,
} from "@chakra-ui/react";
import { RefObject, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import ArrowIcon from "../../../icons/ArrowIcon";
import ClockIcon from "../../../icons/ClockIcon";
import ColorFlagIcon from "../../../icons/ColorFlagIcon";
import Flag2Icon from "../../../icons/Flag2Icon";
import FlagIcon from "../../../icons/FlagIcon";
import JigsawIcon from "../../../icons/JigsawIcon";
import TicketIcon from "../../../icons/TicketIcon";
import TickIcon from "../../../icons/TickIcon";
import TodayIcon from "../../../icons/TodayIcon";
import TreeDoteIcon from "../../../icons/TreeDoteIcon";
import ConfirmModal from "../../../modals/ConfirmModal";
import TodoCalendar from "./TodoCalendar ";
import TodoFlag from "./TodoFlag";

function TodayCard() {
  const [showTodayCard, setShowTodayCard] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef() as RefObject<HTMLButtonElement>;
  return (
    <>
      <Flex w='100vh' ml='3' mt='2'>
        <Flex
          onClick={() => {
            setShowTodayCard(!showTodayCard);
          }}
          border='1px'
          borderColor='gray.300'
          color='green'
          p='2'
          mr='2'
          borderRadius='md'
          h='30px'
          alignItems='center'
          justifyContent='center'
          cursor='pointer'
          _hover={{ bg: "gray.200" }}
        >
          <TodayIcon />
          <Text ml='1'>Today</Text>
        </Flex>
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
            mr='2'
            color='gray'
          >
            Priority
          </MenuButton>
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
      {showTodayCard ? <TodoCalendar /> : null}
    </>
  );
}

export default TodayCard;
