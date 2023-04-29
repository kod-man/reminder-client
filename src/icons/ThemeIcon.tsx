import { IconProps } from "./types";

const ThemeIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      aria-hidden="true"
      {...props}
    >
      <g fill="currentColor" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M14.505 19.09c.345.617.733.84 1.464.842.653.001 1.417-.43 2.015-1.104C19.418 17.173 20 15.383 20 12.23 20 7.679 16.413 4 12 4s-8 3.68-8 8.23c0 2.465.59 4.183 1.727 4.675.765.332 1.37.33 2.306.068.175-.049.217-.061.685-.207 1.168-.362 1.85-.503 2.761-.483 1.595.022 2.237.71 2.772 2.192l.028.078c.099.273.157.414.226.536zm-.873.488c-.528-.943-.44-2.271-2.166-2.295-2.407-.053-3.783 1.558-6.136.54C3.467 17.017 3 14.459 3 12.23 3 7.133 7.03 3 12 3s9 4.133 9 9.23c0 3.528-.734 5.492-2.26 7.253-.678.764-1.693 1.45-2.773 1.449-1.08-.003-1.807-.411-2.335-1.354z"
        />
        <path d="M11.909 7.5a1 1 0 110-2 1 1 0 010 2zm3.214 1.17a1 1 0 111.286-1.532 1 1 0 01-1.286 1.532zm1.71 2.962a1 1 0 111.97-.348 1 1 0 01-1.97.348zM16.24 15a1 1 0 111.732 1 1 1 0 01-1.732-1zm-9.254-3.368a1 1 0 11-1.97-.348 1 1 0 011.97.348zm1.71-2.962A1 1 0 117.41 7.138 1 1 0 018.695 8.67z" />
      </g>
    </svg>
  );
};

export default ThemeIcon;
