import { Tooltip } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface MyTooltipProps {
  label: string;
}

function MyTooltip(props: PropsWithChildren<MyTooltipProps>) {
  return (
    <Tooltip
      hasArrow
      label={props.label}
      bg="black"
      color="white"
      borderRadius="5"
      placement="top-start"
    >
      {props.children}
    </Tooltip>
  );
}
export default MyTooltip;
