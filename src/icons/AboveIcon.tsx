import { IconProps } from "./types";

const AboveIcon = (props: IconProps) => {
  return (
    <svg width="24" height="24" {...props}>
      <path
        fill="currentColor"
        d="M9 6.74L6.35 9.4a.5.5 0 01-.7-.7l3.53-3.54a.5.5 0 01.7 0l3.55 3.53a.5.5 0 01-.71.7L10 6.69V18.5a.5.5 0 11-1 0V6.74zM17 15h2.5a.5.5 0 110 1H17v2.5a.5.5 0 11-1 0V16h-2.5a.5.5 0 110-1H16v-2.5a.5.5 0 111 0V15z"
      />
    </svg>
  );
};

export default AboveIcon;
