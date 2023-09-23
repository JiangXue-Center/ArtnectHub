import {Input, Stack, FormControl, HStack, Button, Text} from 'native-base';
import {FontAwesome5, Ionicons} from '@expo/vector-icons';
import {Alert, View} from "react-native";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import DetermineInputTypeCode from "../../components/VerificationCode/DetermineInputTypeCode";
import TimerComponent from "../../components/Timer";
import instance from "../../service/http/Request";
import LoginApi from "../../api/LoginApi";
import LoginSendCodeApi from "../../api/LoginSendCodeApi";

const formSchema = z.object({
    certificate: z
        .string()
        .refine((value) => {
            const inputType = DetermineInputTypeCode(value);
            //3是手机号，1是邮箱
            return inputType === "1" || inputType === "3";
        }, {
            message: "请输入有效的手机号或邮箱",
        }),
    verifyCode: z.string().length(6, "请输入正确的验证码"),
});

const CodeLogin = ({navigation}: { navigation?: any }) => {
    const {codeLoginMethod} = LoginApi()

    const [certificate, setCertificate] = useState("")
    //调用计时器组件TimerComponent
    const {getTime, isTiming, remainingTime} = TimerComponent()

    const method = DetermineInputTypeCode(certificate)

    const {handleSubmit, control, formState: {errors}} = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data: any) => {
        //验证码登陆
        codeLoginMethod({data, method, navigation})
        navigation.navigate("HomePageRoute")
    };

    const getCode = () => {
        if (certificate) {
            getTime()
            LoginSendCodeApi({certificate})
            Alert.alert("成功", "正在发送验证码，请稍后！")
        } else {
            Alert.alert("错误", "您的邮箱或手机号为空，请填写！")
        }
    }

    return (
        <View>
            <FormControl>
                <Stack space={5} margin={4}>
                    <Stack>
                        <FormControl.Label>手机号/邮箱</FormControl.Label>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    variant="underlined"
                                    p={2}
                                    placeholder="手机号/邮箱"
                                    onChangeText={value => {
                                        onChange(value)
                                        setCertificate(value)
                                    }}
                                    onBlur={onBlur}
                                    value={value}
                                    InputLeftElement={<Ionicons name="md-person-outline" size={24} color="black"/>}
                                />
                            )}
                            name="certificate"
                            rules={{required: true}}
                        />
                        <Text color="red.500">{errors.certificate?.message &&
                            <Text>{errors.certificate.message}</Text>}</Text>
                    </Stack>

                    <Stack>
                        <FormControl.Label>验证码</FormControl.Label>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    variant="underlined"
                                    p={2}
                                    placeholder="验证码"
                                    onChangeText={value => {
                                        onChange(value)
                                    }}
                                    onBlur={onBlur}
                                    value={value}
                                    InputLeftElement={<FontAwesome5 name="envelope" size={24} color="black"/>}
                                    InputRightElement={isTiming ?
                                        <Button colorScheme="blueGray"
                                                disabled={isTiming}>{`请稍等${remainingTime}S`}</Button> :
                                        <Button
                                            colorScheme="lightBlue"
                                            onPress={() => {
                                                getCode()
                                            }}>获取验证码
                                        </Button>
                                    }/>
                            )}
                            name="verifyCode"
                            rules={{required: true}}
                        />
                        <Text color="red.500">{errors.verifyCode?.message &&
                            <Text>{errors.verifyCode.message}</Text>}</Text>
                    </Stack>

                    <Stack>
                        <HStack justifyContent={"space-between"}>
                            <Text onPress={() => navigation.navigate("ForgetPassword")}>忘记密码？</Text>
                            <Text onPress={() => navigation.navigate("Register")}>注册</Text>
                        </HStack>
                    </Stack>

                    <Stack>
                        <Button borderRadius="full" colorScheme="lightBlue"
                                onPress={handleSubmit(onSubmit)}>登陆</Button>
                    </Stack>
                </Stack>
            </FormControl>
        </View>
    )
}

export default CodeLogin