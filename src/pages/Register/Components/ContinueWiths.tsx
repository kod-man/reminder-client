import { VStack } from "@chakra-ui/react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import CardCW from "./CardCW";

const dataBtn = [
  {
    text: "Continue with Google",
    Icon: FcGoogle,
  },
  { text: "Continue with Facebook", Icon: FaFacebook },
  {
    text: "Continue with Apple",
    Icon: FaApple,
  },
];

const ContinueWiths = () => {
  return (
    <VStack spacing={4} direction="row" align="center">
      {dataBtn.map((item) => (
        <CardCW key={item.text}  text={item.text} Icon={item.Icon} />
      ))}
    </VStack>
  );
};

export default ContinueWiths;
