import { Image, Text } from "@chakra-ui/react";

type Props = {
  imageSrc: string;
  initials: string;
};

function ConditionallyImage({ imageSrc, initials }: Props) {
  if (imageSrc) {
    return <Image w="50" h="50" objectFit="contain" borderRadius="full" src={imageSrc} />;
  }
  return <Text>{initials}</Text>;
}

export default ConditionallyImage;
