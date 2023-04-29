import { IconProps } from "./types";

const QuestionMarkIcon = (props: IconProps) => {
  return (
    <svg width="17" height="17" {...props}>
      <path
        fill={props.color || "currentColor"}
        d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm-.1-2.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM5.5 5.87c.06-1.32.9-2.37 2.53-2.37 1.47 0 2.47.95 2.47 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4H7.32V9.1c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H5.5z"
        id="tick-a"
      ></path>
    </svg>
  );
};
export default QuestionMarkIcon;
