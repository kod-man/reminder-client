import { IconProps } from "./types";

const MiniLabelIcon = (props: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M5.914 11.086l4.5-4.5A2 2 0 0 1 11.828 6H16a2 2 0 0 1 2 2v4.172a2 2 0 0 1-.586 1.414l-4.5 4.5a2 2 0 0 1-2.828 0l-4.172-4.172a2 2 0 0 1 0-2.828zM14 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        {...props}
      />
    </svg>
  );
};

export default MiniLabelIcon;
