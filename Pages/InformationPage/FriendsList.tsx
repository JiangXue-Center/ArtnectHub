import { Avatar, Box, HStack, ScrollView, VStack, Text, View, Button } from "native-base";
import { Dimensions } from "react-native";
import FriendsListStore from "../../Stores/InformationStore/FriendsListStore";
import { useEffect, useState } from "react";
import InformationPageApi from "../../api/InformationPageApi";

const { width, height } = Dimensions.get("window")
export default function FriendsList({ navigation }: { navigation?: any }) {
  const store = FriendsListStore.use.FriendsListData()
  const {getFriendListApi} = InformationPageApi()


  useEffect(() => {
    getFriendListApi()
  }, [])
  return (
    <ScrollView >
      {
        store.map(item => (
          <Box bgColor="white" borderRadius="md" width={width} height={height / 12} key={item.userId}>
            <HStack space={2} alignItems="center" m="2" justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Avatar bg="green.500" source={{
                  uri: `${item.avatarUrl}`
                }}>
                </Avatar>

                <VStack space={2}>
                  <Text fontWeight={700}>{item.username}</Text>
                </VStack>
              </HStack>

              <VStack space={2}>
                <Button onPress={() => navigation.navigate("ChatPage", { userId: item.userId, avatarUrl: item.avatarUrl, senderName: item.username})}>
                  <Text>聊天</Text>
                </Button>
              </VStack>

            </HStack>
          </Box>
        ))
      }

    </ScrollView>
  )
}
