import { IconProps } from "./types";

const EditIcon = (props: IconProps) => {
  return (
    <svg width="24" height="24" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="currentColor"
          d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
        />
        <path
          stroke="currentColor"
          d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
        />
      </g>
    </svg>
  );
};

export default EditIcon;
