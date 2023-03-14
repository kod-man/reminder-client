import { Flex } from "@chakra-ui/react";
import PassSpecsCard from "./PassSpecsCard";

const PassStandards = ({
  formData
}: {
  formData: {
    email: string;
    password: string;
  };
}) => {
  const { password } = formData;
  const hasPsValue = password.trim() !== "";
  const hasPsassword7chars = password.length > 6;
  const hasPsNumber = /\d/.test(password);
  const hasPsUpperCase = /[A-Z]/.test(password);
  const hasPsSmallCase = /[a-z]/.test(password);
  const hasPsSymbol = /\W|_/g.test(password);

  return (
    <Flex
      flexDirection="column"
      w="350px"
      h="130px"
      boxShadow="xs"
      p="1px"
      rounded="md"
      bg="white"
    >
      <PassSpecsCard text="Required!" hasPassed={hasPsValue} />
      <PassSpecsCard
        text="At least seven characters"
        hasPassed={hasPsassword7chars}
      />
      <PassSpecsCard text="At least one number" hasPassed={hasPsNumber} />
      <PassSpecsCard
        text="At least one uppercase letter"
        hasPassed={hasPsUpperCase}
      />
      <PassSpecsCard
        text="At least one lowercase letter"
        hasPassed={hasPsSmallCase}
      />
      <PassSpecsCard
        text="At least one special character (symbol)"
        hasPassed={hasPsSymbol}
      />
    </Flex>
  );
};

export default PassStandards;
