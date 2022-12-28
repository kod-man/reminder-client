import { Flex, Text } from '@chakra-ui/react';

function Header() {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize="lg" color="gray.500">
        Daha düzenli olma yolunda ilk adımı attığın için tebrik ederiz.
      </Text>
      <Text fontSize="lg" color="gray.500">
        Sana özel Todoist'in kullanıma hazır.
      </Text>
    </Flex>
  );
}

export default Header;
