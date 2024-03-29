import { IconProps } from "./types";
function JigsawIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 10.01V6a2 2 0 012-2h11a2 2 0 012 2v4.01c0 .1.134.142.198.066l.057-.066A3.014 3.014 0 0119 9.401a3 3 0 11-.802 4.523c-.064-.076-.198-.033-.198.066V18a2 2 0 01-2 2H5a2 2 0 01-2-2v-4.01c0-.569.4-.93.764-1.049.357-.117.86-.065 1.201.341a2 2 0 100-2.564c-.34.406-.844.458-1.2.341A1.103 1.103 0 013 10.01zM5 5a1 1 0 00-1 1v4.01c0 .1.135.142.198.066A3.016 3.016 0 015 9.401a3 3 0 11-.802 4.523C4.135 13.848 4 13.89 4 13.99V18a1 1 0 001 1h11a1 1 0 001-1v-4.01c0-.569.4-.93.764-1.049.358-.117.86-.065 1.201.341a2 2 0 100-2.564c-.34.406-.843.458-1.2.341A1.103 1.103 0 0117 10.01V6a1 1 0 00-1-1H5z"
      />
    </svg>
  );
}

export default JigsawIcon;
