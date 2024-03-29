import { ToastId, ToastPosition, UseToastOptions } from "@chakra-ui/react";

export const defaultToastProps = {
  position: "top-right" as ToastPosition,
  duration: 2000,
  isClosable: true
};

export function genericErrorToast(
  error: any,
  toast: (options?: UseToastOptions | undefined) => ToastId
) {
  if (error.response) {
    toast({
      ...defaultToastProps,
      title: "Something went wrong.",
      description: error.response.data.message,
      status: "error"
    });
  } else {
    toast({
      ...defaultToastProps,
      title: "Something went wrong.",
      description: "server-error",
      status: "error"
    });
  }
}
