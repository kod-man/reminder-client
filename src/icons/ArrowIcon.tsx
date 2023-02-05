import React from "react";

function ArrowIcon(props: any) {
  return (
    <svg width='24' height='24' {...props}>
      <g fill='none' transform='translate(4 4)'>
        <circle cx='8' cy='8' r='7.5' stroke='currentColor'></circle>
        <path
          fill='currentColor'
          d='M10.11 7.82L8.15 5.85a.5.5 0 1 1 .7-.7l2.83 2.82a.5.5 0 0 1 0 .71l-2.83 2.83a.5.5 0 1 1-.7-.7l1.98-1.99H4.5a.5.5 0 1 1 0-1h5.61z'
        ></path>
      </g>
    </svg>
  );
}

export default ArrowIcon;
