import {create} from "zustand";
import createSelectors from "../../utils/zustandSelector";

interface LoginPageStoreType {
    certificate: string
    code: string
}

interface Action {
    updateStore: (certificate: LoginPageStoreType['certificate'], code: LoginPageStoreType['code']) => void
}

const useLoginPageStore = createSelectors(create<LoginPageStoreType & Action>()((set) => ({

    certificate: "1",

    code: "",

    updateStore: (certificate, code) => set(() => ({certificate: certificate, code: code}))

})))

export default useLoginPageStore