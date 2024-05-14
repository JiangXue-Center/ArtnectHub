import { HStack ,Text} from 'native-base'
import React from 'react'
import { Dimensions } from 'react-native'

const {width} = Dimensions.get("window")
const ChatTitle = () => {
  return (
    <HStack width={width/3} justifyContent="flex-end" alignItems="center">
      <Text>Chat</Text>
    </HStack>
  )
}


export default ChatTitle