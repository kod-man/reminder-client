import { Tooltip } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface MyTooltipProps {
  label: string;
}

function MyTooltip({ label, children }: PropsWithChildren<MyTooltipProps>) {
  return (
    <Tooltip
      hasArrow
      label={label}
      bg="black"
      color="white"
      borderRadius="5"
      placement="top-start"
    >
      {children}
    </Tooltip>
  );
}
export default MyTooltip;
