import {Input, Stack, FormControl, HStack, Button, Text} from 'native-base';
import {FontAwesome5, Ionicons} from '@expo/vector-icons';
import {View} from "react-native";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {RegisterCodeApi} from "../../api/LoginApi/RegisterApi";

// 创建验证手机号码的模式
const phoneNumberSchema = z
    .string()
    .refine((value) => /^\d{11}$/.test(value), {
        message: "请输入有效的手机号码",
    });

// 创建验证邮箱的模式
const emailSchema = z
    .string()
    .email({
        message: "请输入有效的邮箱地址",
    });

// 根据用户输入判断是手机号还是邮箱
function determineInputType(input: string) {
    if (phoneNumberSchema.safeParse(input).success) {
        return "手机号";
    } else if (emailSchema.safeParse(input).success) {
        return "邮箱";
    } else {
        return "无效的输入";
    }
}

const formSchema = z.object({
    certificate: z
        .string()
        .refine((value) => {
            const inputType = determineInputType(value);
            return inputType === "手机号" || inputType === "邮箱";
        }, {
            message: "请输入有效的手机号或邮箱",
        }),
    code: z.string().length(6, "请输入正确的验证码"),
});

const PhoneLogin = ({navigation}: { navigation?: any }) => {
    const [certificate, setCertificate] = useState("")

    const {handleSubmit, control, formState: {errors}} = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const submit = (data: any) => {
        console.log(data.certificate)
    }

    const onSubmit = (data: any) => {
        console.log(data);
        submit(data)
    };

    const getCode = () => {
        console.log(certificate)
        RegisterCodeApi({certificate,navigation})
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

export default PhoneLogin