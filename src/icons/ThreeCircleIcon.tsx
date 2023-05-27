import { IconProps } from "./types";
function ThreeCircleIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        transform="translate(3 10)"
      >
        <circle cx="2" cy="2" r="2" />
        <circle cx="9" cy="2" r="2" />
        <circle cx="16" cy="2" r="2" />
      </g>
    </svg>
  );
}

export default ThreeCircleIcon;
