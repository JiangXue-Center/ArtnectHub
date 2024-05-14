import { Text, View , StyleSheet, Dimensions} from "react-native";

const { width, height } = Dimensions.get("window")

const LikePeople = () => {
  return (
    <View>
      <View style={[styles.header]}>
        <Text>点赞</Text>
      </View>
    </View>
  )
}

export default LikePeople

const styles = StyleSheet.create({
  header: {
    height: height/14,
    width: width,
    backgroundColor: "base"
  }
})