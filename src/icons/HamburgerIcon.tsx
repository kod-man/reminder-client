import { IconProps } from "./types";

const HamburgerIcon = (props: IconProps) => {
  return (
    <svg className="menu_icon" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"
        {...props}
      />
    </svg>
  );
};

export default HamburgerIcon;
