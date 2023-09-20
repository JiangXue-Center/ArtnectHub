import {Input, Stack, FormControl, Button, Text} from 'native-base';
import {View} from "react-native";
import RestPasswordComponent from "../../components/LoginPageFontComponent/RestPasswordComponent";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import useLoginPageStore from "../../Stores/LoginPageStore";
import instance from "../../service/http/Request";
import DetermineInputTypeCode from "../../components/VerificationCode/DetermineInputTypeCode";


const formSchema = z.object({
    verifyCode: z.string().min(8, "密码至少8位！").max(20, "密码最多20位"),
    checkPassword: z.string().min(8, "密码至少8位！").max(20, "密码最多20位"),
})
    .refine(FormData => FormData.verifyCode === FormData.checkPassword, {
        path: ['checkPassword'],
        message: "两次密码不一致哦！"
    })

type FormData = z.infer<typeof formSchema>
const RestPassword = ({navigation}: { navigation?: any }) => {

    const certificateStore = useLoginPageStore.use.certificate()
    // const verifyCode = useLoginPageStore.use.code()
    const registerToken = useLoginPageStore.use.register_token()

    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data: any) => {
        console.log("data:" + data.verifyCode, data.checkPassword);
        // console.log("certificateStore和verifyCode："+certificateStore,verifyCode)
        // navigation.navigate("Login")

        const method = DetermineInputTypeCode(certificateStore)

        // 暂时注释
        instance.post("/auth/register", {
            //账号
            certificate: certificateStore,
            // 密码
            verifyCode: data.verifyCode,
            //确认密码
            checkPassword: data.checkPassword,
            //1是邮箱，3是手机号
            method: method,
            //注册授权码
            registerToken: registerToken
        }).then(response => {
            console.log("response=" + response)
            navigation.navigate("Login")
        }).catch(error => {
            console.error("error=" + error)
        })

    };

    return (
        <View>
            <RestPasswordComponent/>
            <FormControl>
                <Stack space={5} margin={4}>
                    <Stack>
                        <FormControl.Label>密码</FormControl.Label>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    variant="underlined"
                                    p={2}
                                    placeholder="密码"
                                    onChangeText={value => onChange(value)}
                                    onBlur={onBlur}
                                    value={value}
                                    type="password"
                                />
                            )}
                            name="verifyCode"
                            rules={{required: true}}
                        />
                        <Text color="red.500">{errors.verifyCode?.message &&
                            <Text>{errors.verifyCode.message}</Text>}</Text>
                    </Stack>
                    <Stack>
                        <FormControl.Label>确认密码</FormControl.Label>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    variant="underlined"
                                    p={2}
                                    placeholder="确认密码"
                                    onChangeText={value => onChange(value)}
                                    onBlur={onBlur}
                                    value={value}
                                    type="password"
                                />
                            )}
                            name="checkPassword"
                            rules={{required: true}}
                        />
                        <Text color="red.500">{errors.checkPassword?.message &&
                            <Text>{errors.checkPassword.message}</Text>}</Text>
                    </Stack>

                    <Stack>
                        <Button borderRadius="full" colorScheme="lightBlue"
                                onPress={handleSubmit(onSubmit)}>完成</Button>
                    </Stack>
                </Stack>
            </FormControl>
        </View>
    )
}

export default RestPassword