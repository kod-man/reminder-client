import { Button, Tooltip, Text, useDisclosure } from "@chakra-ui/react";
import React, { RefObject, useRef } from "react";
import ClockIcon from "../../../icons/ClockIcon";
import ConfirmModal from "../../../modals/ConfirmModal";

function MenuReminder() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef() as RefObject<HTMLButtonElement>;
  return (
    <>
      <Tooltip hasArrow label='Add reminders' placement='top'>
        <Button
          bg='white'
          onClick={onOpen}
          mr='2'
          border='1px'
          borderColor='gray.300'
          borderRadius='md'
          p='2'
          h='32px'
          alignItems='center'
          justifyContent='center'
          cursor='pointer'
        >
          <ClockIcon />
          <Text fontSize='sm' fontFamily='inherit' color='gray'>
            Reminders
          </Text>
        </Button>
      </Tooltip>
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

export default MenuReminder;
