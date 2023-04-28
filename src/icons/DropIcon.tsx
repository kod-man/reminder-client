import { IconProps } from "./types";

function DropIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" color="gray">
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M12 19a5 5 0 0 0 5-5c0-1.102-.345-2-1.064-3.03-.259-.371-1.414-1.832-1.697-2.225-.775-1.077-1.338-2.124-1.765-3.403a.5.5 0 0 0-.948 0c-.427 1.28-.99 2.326-1.765 3.403-.283.393-1.438 1.854-1.697 2.225C7.344 12 7 12.898 7 14a5 5 0 0 0 5 5z"
      ></path>
    </svg>
  );
}

export default DropIcon;
