import {Input, Text, Stack, FormControl, Button, HStack} from 'native-base';
import {EvilIcons, Ionicons} from '@expo/vector-icons';
import {StyleSheet} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod";
import create = StyleSheet.create;


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
    userName: z
        .string()
        .refine((value) => {
            const inputType = determineInputType(value);
            return inputType === "手机号" || inputType === "邮箱";
        }, {
            message: "请输入有效的手机号或邮箱",
        }),
    password: z.string().min(8, {message: "密码至少要8位以上"}).max(20, {message: "密码最多输入20位"}),
});

const EmailLogin = ({navigation}: { navigation?: any }) => {
    const {handleSubmit, control, formState: {errors}} = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const submit = (data: any) => {
        console.log(data.userName)
    }

    const onSubmit = (data: any) => {
        console.log(data);
        submit(data)
    };
    return (
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
                                onChangeText={value => onChange(value)}
                                onBlur={onBlur}
                                value={value}
                                InputLeftElement={<Ionicons name="md-person-outline" size={24} color="black"/>}
                            />
                        )}
                        name="userName"
                        rules={{required: true}}
                    />
                    <Text color="red.500">{errors.userName?.message && <Text>{errors.userName.message}</Text>}</Text>
                </Stack>

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
                                InputLeftElement={<EvilIcons name="lock" size={24} color="black"/>}
                            />
                        )}
                        name="password"
                        rules={{required: true}}
                    />
                    <Text color="red.500">{errors.password?.message && <Text>{errors.password.message}</Text>}</Text>
                </Stack>

                <Stack>
                    <HStack justifyContent={"space-between"}>
                        <Text onPress={() => navigation.navigate("ForgetPassword")}>忘记密码？</Text>
                        <Text onPress={() => navigation.navigate("Register")}>注册</Text>
                    </HStack>
                </Stack>
                <Stack>
                    <Button borderRadius="full" colorScheme="lightBlue" onPress={handleSubmit(onSubmit)}>登陆</Button>
                </Stack>
            </Stack>
        </FormControl>
    )
}

export default EmailLogin

const styles = create({
    font: {
        color: "red"
    }
})