import { Image, Text } from "@chakra-ui/react";

type Props = {
  imageSrc: string;
  initials: string;
};

function ConditionallyImage({ imageSrc, initials }: Props) {
  if (imageSrc) {
    return (
      <Image
        w="100%"
        h="100%"
        objectFit="cover"
        borderRadius="full"
        src={imageSrc}
      />
    );
  }
  return <Text>{initials}</Text>;
}

export default ConditionallyImage;
