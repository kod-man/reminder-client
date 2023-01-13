import { Flex, Text } from "@chakra-ui/react";

type ReminderCardProps = {
  title: string;
  description: string;
};

function ReminderCard({ title, description }: ReminderCardProps) {
  return (
    <Flex
      w='100vh'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
    >
      <Text>{title}</Text>
      <Text>{description}</Text>
    </Flex>
  );
}

export default ReminderCard;
