import {Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import {Box, Button,Text} from "native-base";
import {AntDesign, Entypo} from '@expo/vector-icons';

const {width} = Dimensions.get("window")
const MallDetailsPageFoot = () => {
  return(
      <Box backgroundColor="white" style={[styles.buttomTab]} flexDirection="row"
           alignItems="center" justifyContent="flex-start">
          <Box padding={4}>
              <Entypo name="shop" size={24} color="black" />
              <Text>店铺</Text>
          </Box>
          <Box padding={4}>
              <AntDesign name="message1" size={24} color="black" />
              <Text>客服</Text>
          </Box>
          <Box padding={4}>
              <AntDesign name="staro" size={24} color="black" />
              <Text>收藏</Text>
          </Box>
          <TouchableOpacity>
              <Text m={2}>加入购物车</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text m={2}>领券购物</Text>
          </TouchableOpacity>
      </Box>
  )
}

export default MallDetailsPageFoot

const styles = StyleSheet.create({
    buttomTab: {
        width: width,
        height: 60
    },
})