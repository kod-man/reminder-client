import { IconProps } from "./types";

function TreeDoteIcon(props: IconProps) {
  return (
    <svg width="15" height="3" {...props}>
      <path
        d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

export default TreeDoteIcon;
