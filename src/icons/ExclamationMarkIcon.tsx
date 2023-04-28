import { IconProps } from "./types";

const ExclamationMarkIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <path
        fill="currentColor"
        d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 1a8 8 0 100 16 8 8 0 000-16zm.5 6a.5.5 0 01.5.5V15h1a.5.5 0 110 1h-3a.5.5 0 110-1h1v-4h-1a.5.5 0 110-1h1.5zm-.16-2.68a.84.84 0 110 1.68.84.84 0 010-1.68z"
      ></path>
    </svg>
  );
};
export default ExclamationMarkIcon;
