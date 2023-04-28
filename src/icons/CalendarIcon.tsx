import { IconProps } from "./types";

const CalendarIcon = (props: IconProps) => {
  return (
    <svg width="24" height="24" {...props}>
      <path
        fill="currentColor"
        d="M10 11.5c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 01-.5-.5zm0 4c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 01-.5-.5zm0-8c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 01-.5-.5zm-4 9a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2z"
      ></path>
    </svg>
  );
};

export default CalendarIcon;
