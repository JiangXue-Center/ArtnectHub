import {Input, Stack, FormControl, HStack, Button, Text} from 'native-base';
import {FontAwesome5, Ionicons} from '@expo/vector-icons';
import {View} from "react-native";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {SendCode} from "../../api/LoginApi";
import DetermineInputType from "../../components/VerificationCode";
import {RegisterComponent} from "../../components/LoginPageFontComponent";
import instance from "../../service/http/Request";
import useLoginPageStore from "../../Stores/LoginPageStore";

const formSchema = z.object({
    certificate: z
        .string()
        .refine((value) => {
            const inputType = DetermineInputType(value);
            //1是手机号，2是邮箱
            return inputType === "1" || inputType === "2";
        }, {
            message: "请输入有效的手机号或邮箱",
        }),
    code: z.string().length(6, "请输入正确的验证码"),
});

const Register = ({navigation}: { navigation?: any }) => {

    const [certificate, setCertificate] = useState("")

    const dataStore = useLoginPageStore.use.updateStore()

    const {handleSubmit, control, formState: {errors}} = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data: any) => {
        console.log("data:" + data);
        // 暂时注释
        instance.post("", {
            certificate: data.certificate,
            code: data.code
        }).then(response => {
            console.log("response:" + response)
            dataStore(data.certificate, data.code)
            navigation.navigate("RestPassword")
        }).catch(error => {
            console.error("error:" + error)
        })

        navigation.navigate("RestPassword")
    };

    const getCode = () => {
        console.log(certificate)
        SendCode({certificate})
    }

    return (
        <View>
            <RegisterComponent/>
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
                                    InputRightElement={<Button colorScheme="lightBlue"
                                                               onPress={getCode}>获取验证码</Button>}
                                />
                            )}
                            name="code"
                            rules={{required: true}}
                        />
                        <Text color="red.500">{errors.code?.message && <Text>{errors.code.message}</Text>}</Text>
                    </Stack>

                    <Stack>
                        <HStack>
                            <Text onPress={() => navigation.navigate("ForgetPassword")}>已注册？登陆</Text>
                        </HStack>
                    </Stack>

                    <Stack>
                        <Button borderRadius="full" colorScheme="lightBlue"
                                onPress={handleSubmit(onSubmit)}>下一步</Button>
                    </Stack>
                </Stack>
            </FormControl>
        </View>
    )
}

export default Register