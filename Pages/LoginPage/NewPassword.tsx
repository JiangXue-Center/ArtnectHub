import {Input, Stack, FormControl, Button} from 'native-base';
import {View} from "react-native";
import {ForgetPasswordComponent} from "../../components/LoginPageFontComponent";


const NewPassword = ({navigation}: { navigation?: any }) => {
    return (
        <View>
            <ForgetPasswordComponent/>
            <FormControl>
                <Stack space={5} margin={4}>
                    <Stack>
                        <FormControl.Label>密码</FormControl.Label>
                        <Input
                            variant="underlined"
                            p={2}
                            placeholder="密码"
                            type="password"
                        />
                    </Stack>
                    <Stack>
                        <FormControl.Label>确认密码</FormControl.Label>
                        <Input
                            variant="underlined"
                            p={2}
                            placeholder="确认密码"
                            type="password"
                        />
                    </Stack>

                    <Stack>
                        <Button borderRadius="full" colorScheme="lightBlue"
                                onPress={() => navigation.navigate("Login")}>完成</Button>
                    </Stack>
                </Stack>
            </FormControl>
        </View>
    )
}

export default NewPassword