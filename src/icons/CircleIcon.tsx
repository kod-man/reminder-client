import { IconProps } from "./types";

function CircleIcon(props: IconProps) {
  return (
    <svg width="16px" height="16px" {...props}>
      <path
        fill="currentColor"
        d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
      />
    </svg>
  );
}

export default CircleIcon;
