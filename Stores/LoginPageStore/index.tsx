import { create } from "zustand";
import createSelectors from "../../utils/zustandSelector";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginPageStoreType {
    //账号
    certificate: string
    //验证码
    code: string
    //注册授权码
    register_token: string
    //登陆token
    Authorization: string
}

interface Action {
    updateStore: (certificate: LoginPageStoreType['certificate'], code: LoginPageStoreType['code']) => void
    updateRegister_token: (register_token: LoginPageStoreType['register_token']) => void
    setToken: (Authorization: string) => void
}

const useLoginPageStore = createSelectors(create<LoginPageStoreType & Action>()(persist((set) => ({

    certificate: "1",

    code: "",

    register_token: "",

    Authorization: "",

    updateStore: (certificate, code) => set(() => ({ certificate: certificate, code: code })),

    updateRegister_token: (register_token) => set(() => ({ register_token })),

    setToken: (Authorization) => set(() => ({
        Authorization: Authorization
    }))
}), {
    name: "LoginToken",
    storage: createJSONStorage(() => AsyncStorage),
    partialize: state =>
        Object.fromEntries(
            Object.entries(state).filter(
                ([key]) => ["Authorization"].includes(key)
            )
        )
}
)))

export default useLoginPageStore