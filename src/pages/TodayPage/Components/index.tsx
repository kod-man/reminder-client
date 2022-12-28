import { Flex } from '@chakra-ui/react';
import Header from '../Header';
import CreateReminder from './CreateReminder';
function TodayPage() {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Header />
      <CreateReminder />
    </Flex>
  );
}

export default TodayPage;
