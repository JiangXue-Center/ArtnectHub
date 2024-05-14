import { View, Text, ScrollView, Box, VStack, Divider, HStack, Avatar } from "native-base"
import { Dimensions, SafeAreaView } from "react-native"
import FollowPeopleStore from "../../Stores/InformationStore/FollowPeopleStore"
import {useEffect} from "react";
import InformationPageApi from "../../api/InformationPageApi";

const { width, height } = Dimensions.get("window")
const FollowPeople = ({ navigation }: { navigation?: any }) => {
  const store = FollowPeopleStore.use.followPeopleData()
  const {getMessageListApi} = InformationPageApi()
  useEffect(() => {
    getMessageListApi()
  }, []);

  return (
    <ScrollView >
      {
        store.map(item => (
          <Box bgColor="white" borderRadius="md" width={width} height={height / 12} key={item.userId}>
            <HStack space={2} alignItems="center" m="2" justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Avatar bg="green.500" source={{
                  uri: `${item.avatar}`
                }}>
                </Avatar>

                <VStack space={2}>
                  <Text fontWeight={700}>{item.username}</Text>
                  <Text fontWeight={400} fontSize="xs">{item.lastMessage}</Text>
                </VStack>
              </HStack>

              <VStack space={2}>
                <Text fontSize="xs" color="#3c87ff">{item.lastMessageTime}</Text>
                <View width={5} height={5} bgColor="#3c87ff" borderRadius={100} ml={8}>
                  <Text fontSize="xs" textAlign="center" color="white">{item.unReadMessageNumber}</Text>
                </View>
              </VStack>

            </HStack>
          </Box>
        ))
      }
    </ScrollView>
  )
}

export default FollowPeople