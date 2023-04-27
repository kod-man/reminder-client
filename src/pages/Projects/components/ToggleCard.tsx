import { Text } from "@chakra-ui/react";
type ToggleProps = {
  order: number;
  setOrder: React.Dispatch<React.SetStateAction<number>>;
  text: string;
  index: number;
};
function ToggleCard({ setOrder, text, order, index }: ToggleProps) {
  const active = index === order;
  return (
    <Text
      bgColor={active ? "white" : ""}
      borderLeftRadius="full"
      borderRightRadius="full"
      p="5px 12px"
      fontWeight="500"
      fontSize="15px"
      _hover={{ cursor: "pointer" }}
      color={active ? "" : "#666"}
      onClick={() => setOrder(index)}
    >
      {text}
    </Text>
  );
}

export default ToggleCard;
