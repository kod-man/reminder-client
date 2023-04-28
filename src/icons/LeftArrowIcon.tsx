import { IconProps } from "./types";

function LeftArrowIcon(props: IconProps) {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.145 6.148a.5.5 0 11.71.704L6.738 12H17.5a.5.5 0 010 1H6.738l5.117 5.148a.5.5 0 01-.71.704l-5.964-6a.472.472 0 01-.025-.027A.437.437 0 015 12.5c0-.124.059-.238.156-.325a.533.533 0 01.025-.027l5.964-6z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
}

export default LeftArrowIcon;
