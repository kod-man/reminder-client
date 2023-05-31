import { IconProps } from "./types";
function LockIcon(props: IconProps) {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 6.995V9H9V6.995C9 5.895 9.9 5 11.01 5h1.988C14.102 5 15 5.897 15 6.995zM8 9V6.995A3.003 3.003 0 0111.01 4h1.988A3.002 3.002 0 0116 6.995V9h.994C18.102 9 19 9.887 19 11v6c0 1.105-.897 2-2.006 2H7.006A1.998 1.998 0 015 17v-6c0-1.105.897-2 2.006-2H8zm-2 2v6c0 .556.446 1 1.006 1h9.988c.557 0 1.006-.448 1.006-1v-6c0-.556-.446-1-1.006-1H7.006C6.449 10 6 10.448 6 11zm4 3a2 2 0 104 0 2 2 0 00-4 0zm2 1a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>
  );
}

export default LockIcon;
