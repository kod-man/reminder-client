/* eslint-disable react/jsx-no-undef */
import { Flex } from '@chakra-ui/react';
import OnboardingCard from './OnboardingCard';

function Center() {
  return (
    <Flex flexDirection="column" justifyContent="center" mb="40">
      <OnboardingCard />
    </Flex>
  );
}

export default Center;
