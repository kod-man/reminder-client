const PlusIcon = (props: any) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd" transform="translate(4 3)">
        <mask id="jd4FBg" fill="#fff">
          <path d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"></path>
        </mask>
        <g mask="url(#jd4FBg)">
          <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
        </g>
      </g>
    </svg>
  );
};

export default PlusIcon;
