import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button
} from "@chakra-ui/react";

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  cancelRef: any;
  handlerFunction: (e: any) => void;
  header: string;
  body: string;
  confirmButton: string;
  cancelButton: string;
};

function ConfirmModal({
  isOpen,
  onClose,
  cancelRef,
  handlerFunction,
  header,
  body,
  confirmButton,
  cancelButton
}: ConfirmModalProps) {
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{header}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{body}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            {cancelButton}
          </Button>
          <Button onClick={handlerFunction} colorScheme="red" ml={3}>
            {confirmButton}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConfirmModal;
