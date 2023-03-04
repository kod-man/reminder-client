import { Button } from "@chakra-ui/react";

const BellIcon = (props: any) => {
  return (
    <Button
      as={Button}
      h="26px"
      w="26px"
      _hover={{ bg: "#e27065" }}
      cursor="pointer"
      borderRadius="20%"
      background="#db4c3f"
      p={1}
      ml="0px !important"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          d="M12 3a5.75 5.75 0 015.75 5.75c0 3.24.682 5.875 2.03 7.927A1.5 1.5 0 0118.525 19H14.5a2.5 2.5 0 01-5 0H5.475a1.501 1.501 0 01-1.254-2.323C5.568 14.625 6.25 11.989 6.25 8.75A5.75 5.75 0 0112 3zm1.5 16h-3a1.5 1.5 0 003 0zM12 4a4.75 4.75 0 00-4.75 4.75c0 3.423-.731 6.248-2.193 8.476a.5.5 0 00.418.774h13.05a.5.5 0 00.418-.774c-1.462-2.227-2.193-5.053-2.193-8.476A4.75 4.75 0 0012 4z"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </svg>
    </Button>
  );
};

export default BellIcon;
