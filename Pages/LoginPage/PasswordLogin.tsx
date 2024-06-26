import { Input, Text, Stack, FormControl, Button, HStack } from 'native-base';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import create = StyleSheet.create;
import { DetermineInputTypePassword } from "../../components/VerificationCode";
import instance from "../../service/http/Request";
import LoginApi from "../../api/LoginApi";
import useLoginPageStore from "../../Stores/LoginPageStore";

const formSchema = z.object({
	certificate: z
		.string()
		.refine((value) => {
			const inputType = DetermineInputTypePassword(value);
			//2是邮箱+密码，4是手机号+密码
			return inputType === "2" || inputType === "4";
		}, {
			message: "请输入有效的手机号或邮箱",
		}),
	verifyCode: z.string().min(8, { message: "密码至少要8位以上" }).max(20, { message: "密码最多输入20位" }),
});

const PasswordLogin = ({ navigation }: { navigation?: any }) => {
	const Authorization = useLoginPageStore.use.Authorization()
	const { passwordLoginMethod } = LoginApi()
	const { handleSubmit, control, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema)
	})

	const onSubmit = (data: any) => {
		const method = DetermineInputTypePassword(data.certificate)
		//登陆
		passwordLoginMethod({ data, method, navigation })
		// navigation.navigate("HomePageRoute")
	};

	return (
		<FormControl>
			<Stack space={5} margin={4}>
				<Stack>
					<FormControl.Label>手机号/邮箱</FormControl.Label>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								variant="underlined"
								p={2}
								placeholder="手机号/邮箱"
								onChangeText={value => onChange(value)}
								onBlur={onBlur}
								value={value}
								InputLeftElement={<Ionicons name="md-person-outline" size={24} color="black" />}
							/>
						)}
						name="certificate"
						rules={{ required: true }}
					/>
					<Text color="red.500">{errors.certificate?.message && <Text>{errors.certificate.message}</Text>}</Text>
				</Stack>

				<Stack>
					<FormControl.Label>密码</FormControl.Label>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								variant="underlined"
								p={2}
								placeholder="密码"
								onChangeText={value => onChange(value)}
								onBlur={onBlur}
								value={value}
								type="password"
								InputLeftElement={<EvilIcons name="lock" size={24} color="black" />}
							/>
						)}
						name="verifyCode"
						rules={{ required: true }}
					/>
					<Text color="red.500">{errors.verifyCode?.message && <Text>{errors.verifyCode.message}</Text>}</Text>
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

export default PasswordLogin

const styles = create({
	font: {
		color: "red"
	}
})