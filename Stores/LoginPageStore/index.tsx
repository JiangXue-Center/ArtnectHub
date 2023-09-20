import {create} from "zustand";
import createSelectors from "../../utils/zustandSelector";

interface LoginPageStoreType {
    certificate: string
    code: string
    register_token: string
}

interface Action {
    updateStore: (certificate: LoginPageStoreType['certificate'], code: LoginPageStoreType['code']) => void
    updateRegister_token: (register_token: LoginPageStoreType['register_token'])=> void
}

const useLoginPageStore = createSelectors(create<LoginPageStoreType & Action>()((set) => ({

    certificate: "1",

    code: "",

    register_token: "",

    updateStore: (certificate, code) => set(() => ({certificate: certificate, code: code})),

    updateRegister_token: (register_token) => set(() => ({register_token}))
})))

export default useLoginPageStore