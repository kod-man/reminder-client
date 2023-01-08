import { Button, Flex, Text, } from '@chakra-ui/react'
import React from 'react'
import RisingArrowIcon from '../../../icons/RisingArrowIcon'

const Productivity = () => {
  return (
    <Flex as={Button} p="1" h={8} background="#db4c3f" _hover={{ bg: "#e27065" }} >
        <RisingArrowIcon color="white"/>
        <Text fontSize='12' color="white" fontFamily="inherit" ml={1}> 0/5</Text>
    </Flex>
  )
}

export default Productivity