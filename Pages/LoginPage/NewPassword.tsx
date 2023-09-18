import {Input, Stack, FormControl, Button, Text} from 'native-base';
import {View} from "react-native";
import RestPasswordComponent from "../../components/LoginPageFontComponent/RestPasswordComponent";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Ionicons} from "@expo/vector-icons";


const formSchema = z.object({
    password: z.string().min(8,"密码至少8位！").max(20,"密码最多20位"),
    newPassword: z.string().min(8,"密码至少8位！").max(20,"密码最多20位"),
})
    .refine(FormData => FormData.password===FormData.newPassword,{
        path:['newPassword'],
        message: "两次密码不一致哦！"
    })

type FormData = z.infer<typeof formSchema>
const NewPassword = ({navigation}: { navigation?: any }) => {

    const {control,handleSubmit,formState:{errors} } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })

    const submit = (data: any) => {
        console.log(data.password)
        navigation.navigate("Login")
    }

    const onSubmit = (data: any) => {
        console.log(data);
        submit(data)
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
                            name="password"
                            rules={{required: true}}
                        />
                        <Text color="red.500">{errors.password?.message &&
                            <Text>{errors.password.message}</Text>}</Text>
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
                            name="newPassword"
                            rules={{required: true}}
                        />
                        <Text color="red.500">{errors.newPassword?.message &&
                            <Text>{errors.newPassword.message}</Text>}</Text>
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

export default NewPassword