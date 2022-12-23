import { Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { STEP, StepContext } from "../../../context/StepContext";

const ACTIVE_COLOR = "red.500";
const INACTIVE_COLOR = "red.100";

function Point({ index }: { index: number }) {
  const { step, setStep } = useContext(StepContext);
  return (
    <Icon
      onClick={() => setStep(index as STEP)}
      viewBox="0 0 200 200"
      color={step === index ? ACTIVE_COLOR : INACTIVE_COLOR}
      mr="4"
    >
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
}

export default Point;
