import {Center,Image} from "native-base";

const LogoComponent = () => {
  return(
      <Center>
          <Image
              size={50}
              borderRadius={100}
              //resizeMode="contain"解决图片显示不全的方法
              resizeMode="contain"
              source={require("../../assets/logo.png")}
              alt="同画" />
      </Center>
  )
}

export default LogoComponent