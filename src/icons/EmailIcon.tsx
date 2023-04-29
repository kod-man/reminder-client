import { IconProps } from "./types";

const EmailIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 6h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2zm0 1a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1H6zm10.7 1.6a.5.5 0 01.6.8L12 13.1 6.7 9.4a.5.5 0 11.6-.8l4.7 3.3 4.7-3.3z"
      />
    </svg>
  );
};

export default EmailIcon;
