import { Flex } from '@chakra-ui/react';
import Todoist from '../RegisterAndLogin/Components/Todoist';
import Center from './Components/Center';

function Onboard() {
  return (
    <>
      <Flex p="4" mt="13" ml="83" h={28}>
        <Todoist />
      </Flex>
      <Center />
    </>
  );
}

export default Onboard;
