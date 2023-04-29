import { IconProps } from "./types";

const SmallPlusIcon = (props: IconProps) => {
  return (
    <svg width="13" height="13" {...props}>
      <path
        d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SmallPlusIcon;
