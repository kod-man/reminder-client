import { IconProps } from "./types";

const MarkIcon = (props: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.974 15.771l5.69-9.854a.499.499 0 11.863.498l-6 10.395a.499.499 0 01-.735.147.502.502 0 01-.061-.048l-3.366-3.14a.499.499 0 11.68-.729l2.929 2.731zM11.5 16h6a.5.5 0 110 1h-6a.5.5 0 110-1zm2-4h6a.5.5 0 110 1h-6a.5.5 0 110-1zm2-4h6a.5.5 0 110 1h-6a.5.5 0 110-1z"
      />
    </svg>
  );
};

export default MarkIcon;
