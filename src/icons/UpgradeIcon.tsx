import { IconProps } from "./types";

const UpgradeIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      aria-hidden="true"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#FEBA07"
          fillOpacity=".1"
          stroke="#ED9D04"
          strokeLinejoin="bevel"
          d="M8.2 18.6l3.8-2.3 3.8 2.3a.8.8 0 0 0 1-.9l-.9-4.2 3.3-2.8a.8.8 0 0 0-.4-1.3L14.4 9l-1.7-4a.8.8 0 0 0-1.4 0L9.6 9l-4.4.4a.8.8 0 0 0-.4 1.3l3.3 2.8-1 4.2a.8.8 0 0 0 1.1.9z"
        />
      </g>
    </svg>
  );
};

export default UpgradeIcon;
