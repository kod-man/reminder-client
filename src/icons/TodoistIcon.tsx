import { IconProps } from "../utils/commons";

const TodoistIcon = (props: IconProps) => {
  const { width = "32", height = "32", ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...rest}
    >
      <path
        d="M3.92 0h23.947c2.195 0 3.99 1.8 3.99 4v24c0 2.2-1.795 4-3.99 4H3.919c-2.195 0-3.99-1.8-3.99-4v-5.374l.056.033a944.36 944.36 0 005.37 3.12c.477.27.934.264 1.394-.002l6.224-3.59.116-.067.003-.002.018-.01.065-.038a64473.2 64473.2 0 006.496-3.746c.276-.16.29-.651-.02-.829l-.217-.123v-.001h-.001c-.316-.18-.724-.413-.898-.516a1.016 1.016 0 00-.995.012c-.155.09-10.479 6.039-10.824 6.235a1.343 1.343 0 01-1.336 0l-5.452-3.175v-2.693l.057.033c1.362.795 4.581 2.674 5.37 3.12.477.27.934.264 1.394-.002l6.353-3.664.024-.014.004-.002c3.188-1.84 6.4-3.691 6.54-3.773.277-.16.291-.651-.019-.828l-.217-.124c-.315-.18-.725-.414-.9-.517a1.016 1.016 0 00-.994.012c-.155.09-10.479 6.039-10.824 6.235a1.343 1.343 0 01-1.336 0l-5.452-3.175v-2.693l.056.033c1.361.795 4.582 2.674 5.37 3.12.478.27.935.264 1.395-.002l6.36-3.668.008-.005h.002l.08-.047L19.67 7.54c.276-.16.29-.65-.02-.828l-.217-.124c-.316-.18-.725-.414-.9-.516a1.016 1.016 0 00-.994.012c-.155.089-10.479 6.038-10.824 6.235a1.343 1.343 0 01-1.336 0L-.072 9.143V4c0-2.2 1.796-4 3.991-4z"
        fill="#E44232"
      />
    </svg>
  );
};

export default TodoistIcon;
