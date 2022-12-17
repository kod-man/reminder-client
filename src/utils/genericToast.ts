import { ToastId, ToastPosition, UseToastOptions } from "@chakra-ui/react";

export const defaultToastProps = {
  position: "top-right" as ToastPosition,
  duration: 2000,
  isClosable: true,
};

export function genericServerToast(
  toast: (options?: UseToastOptions | undefined) => ToastId
) {
  toast({
    ...defaultToastProps,
    title: "Something went wrong.",
    description: "server-error",
    status: "error",
  });
}

export function genericValidationToast(
  toast: (options?: UseToastOptions | undefined) => ToastId,
  error: any
) {
  toast({
    ...defaultToastProps,
    title: "Something went wrong.",
    description: error.response.data.message,
    status: "error",
  });
}
