import React from "react";
import { IconProps } from "./types";

const NotFavoriteIcon = (props: IconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.354 19.854a.5.5 0 000-.708l-16-16a.5.5 0 10-.708.708l16 16a.5.5 0 00.708 0zM20.5 8.75c0 2.344-1.065 4.308-2.86 6.27l-.708-.71c1.891-2.033 2.568-3.615 2.568-5.56A3.75 3.75 0 0015.75 5c-1.019 0-2.008.528-2.997 1.659l-.753.86-.753-.86C10.257 5.527 9.27 5 8.25 5c-.198 0-.393.015-.584.045l-.83-.83C7.281 4.074 7.756 4 8.25 4c1.333 0 2.583.667 3.75 2 1.167-1.333 2.417-2 3.75-2a4.75 4.75 0 014.75 4.75zm-16 0c0-.749.22-1.446.597-2.031l-.72-.72A4.728 4.728 0 003.5 8.75C3.5 13 7 16 12 20c1.27-1.016 2.443-1.968 3.487-2.892l-.718-.718A81.646 81.646 0 0112 18.717C6.253 14.069 4.5 11.88 4.5 8.75z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NotFavoriteIcon;
