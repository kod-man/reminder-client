import { Flex } from "@chakra-ui/react";
import RequirementCard from "./RequirementCard";

type PassProps = {
  formData: {
    email: string;
    password: string;
  };
};
const PasswordRequirement = ({ formData }: PassProps) => {
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
      p="1px"
      rounded="md"
      bg="white"
    >
      <RequirementCard text="Required!" hasPassed={hasPsValue} />
      <RequirementCard
        text="At least seven characters"
        hasPassed={hasPsassword7chars}
      />
      <RequirementCard text="At least one number" hasPassed={hasPsNumber} />
      <RequirementCard
        text="At least one uppercase letter"
        hasPassed={hasPsUpperCase}
      />
      <RequirementCard
        text="At least one lowercase letter"
        hasPassed={hasPsSmallCase}
      />
      <RequirementCard
        text="At least one special character (symbol)"
        hasPassed={hasPsSymbol}
      />
    </Flex>
  );
};

export default PasswordRequirement;
