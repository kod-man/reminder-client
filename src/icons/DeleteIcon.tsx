import { IconProps } from "./types";

function DeleteIcon(props: IconProps) {
  return (
    <svg
      width="15"
      height="15"
      aria-hidden="true"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="gray"
        fillRule="evenodd"
        d="M12 10.62l4.833-4.834a.976.976 0 1 1 1.381 1.38L13.381 12l4.833 4.833a.976.976 0 0 1-1.38 1.381L12 13.381l-4.833 4.833a.976.976 0 0 1-1.381-1.38L10.619 12 5.786 7.167a.976.976 0 1 1 1.38-1.381L12 10.619z"
      />
    </svg>
  );
}

export default DeleteIcon;
