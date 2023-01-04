import { Flex } from '@chakra-ui/react';
import Todoist from '../RegisterAndLogin/Components/Todoist';
import OnboardingCard from './Components/OnboardingCard';

function Onboard() {
  return (
    <>
      <Flex p="4" mt="13" ml="83" h={28}>
        <Todoist />
      </Flex>
      <Flex flexDirection="column" justifyContent="center" mb="40">
        <OnboardingCard />
      </Flex>
    </>
  );
}

export default Onboard;
