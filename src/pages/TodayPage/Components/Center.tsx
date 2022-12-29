import { Flex, Img, Link, Text } from "@chakra-ui/react";
import { BsQuestionCircle } from "react-icons/bs";

function Centere() {
  return (
    <Flex
      mt='4'
      w='100%'
      alignItems='center'
      justifyContent='center'
      h='432px'
      direction='column'
    >
      <Flex
        direction='column'
        h='432px'
        flexDirection='column'
        alignItems='center'
        w='380px'
      >
        <Img src='https://d3ptyyxy2at9ui.cloudfront.net/assets/images/d7c6fac19c896959feaaffd6472ca7a0.jpg' />
        <Text as='b' fontSize='lg' mb='2'>
          Bugün neler yapman gerekiyor?
        </Text>
        <Text color='gray'>Varsayılan olarak, buraya eklenen</Text>
        <Text color='gray'>görevlerin bitiş tarihi bugündür. Görev</Text>
        <Text color='gray'>eklemek için + işaretine tıkla.</Text>
      </Flex>
      <Flex
        alignItems='center'
        justifyContent='center'
        w='300px'
        h='80px'
        mt='10'
      >
        <BsQuestionCircle color='red' cursor='pointer' />
        <Text as='ins' ml='2' color='red'>
          <Link>Gününü nasıl planlarsın</Link>
        </Text>
      </Flex>
    </Flex>
  );
}

export default Centere;
