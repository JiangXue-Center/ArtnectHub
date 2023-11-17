import {create} from "zustand";
import createSelectors from "../../utils/zustandSelector";

interface State {
    isTrue: boolean
}

interface ImageViewerIsTrueType {
    updateIsTrue: (isTrue: State['isTrue']) => void
}

const useImageVieWerIsTrueStore = createSelectors(create<State & ImageViewerIsTrueType>((set) => ({
    isTrue: false,

    updateIsTrue: (isTrue) => set(() => ({isTrue: isTrue}))
})))

export default useImageVieWerIsTrueStore