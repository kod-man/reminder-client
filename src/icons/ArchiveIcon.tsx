const ArchiveIcon = (props: any) => {
  return (
    <svg width="24" height="24" {...props}>
      <g fill="none">
        <path
          stroke="currentColor"
          d="M5.5 9.5V18A1.5 1.5 0 007 19.5h10a1.5 1.5 0 001.5-1.5V9.5h-13zm-1 0h15V7A1.5 1.5 0 0018 5.5H6A1.5 1.5 0 004.5 7v2.5z"
        ></path>
        <rect
          width="6"
          height="1"
          x="9"
          y="12"
          fill="currentColor"
          rx="0.5"
        ></rect>
      </g>
    </svg>
  );
};

export default ArchiveIcon;
