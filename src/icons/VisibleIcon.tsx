const VisibleIcon = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" ariaHidden="true" {...props}>
      <g fill="none" fill-rule="evenodd" stroke="gray">
        <path d="M21.358 12C17.825 7.65 14.692 5.5 12 5.5c-2.624 0-5.67 2.043-9.097 6.181a.5.5 0 0 0 0 .638C6.331 16.457 9.376 18.5 12 18.5c2.692 0 5.825-2.15 9.358-6.5z"></path>
        <circle cx="12" cy="12" r="3.5"></circle>
      </g>
    </svg>
  );
};

export default VisibleIcon;
