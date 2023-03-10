import { VStack } from "@chakra-ui/react";
import AppleIcon from "../../../icons/AppleIcon";
import FacebookIcon from "../../../icons/FacebookIcon";
import GoogleIcon from "../../../icons/GoogleIcon";
import CardCW from "./CardCW";

const dataBtn = [
  {
    text: "Google",
    Icon: GoogleIcon
  },
  { text: "Facebook", Icon: FacebookIcon },
  {
    text: "Apple",
    Icon: AppleIcon
  }
];

const ContinueWiths = () => {
  return (
    <VStack spacing={4} direction="row" align="center">
      {dataBtn.map((item) => (
        <CardCW key={item.text} text={item.text} Icon={item.Icon} />
      ))}
    </VStack>
  );
};

export default ContinueWiths;
