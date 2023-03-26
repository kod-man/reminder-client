import { Image, Text } from "@chakra-ui/react";

type Props = {
  imageSrc: string;
  initials: string;
};

function ConditionallyImage({ imageSrc, initials }: Props) {
  if (imageSrc) {
    return (
      <Image
        m={0}
        p={0}
        w="100%"
        h="100%"
        objectFit="fill"
        borderRadius="full"
        src={imageSrc}
      />
    );
  }
  return <Text>{initials}</Text>;
}

export default ConditionallyImage;
