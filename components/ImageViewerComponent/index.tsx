import {Modal, View} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import {useState} from "react";
import useImageVieWerIsTrueStore from "../../Stores/ImageViewerIsTrue";

// 当我点击图片时就会将图片进行放大，并且长按可以将图片保存至本地
const ImageViewerComponent = ({ zoomImage }: { zoomImage: { url: string }[] }) => {
    const useIsTrue = useImageVieWerIsTrueStore.use.isTrue()
    const setIsTrue = useImageVieWerIsTrueStore.use.updateIsTrue()
    return (
        <View>
            <Modal visible={useIsTrue} transparent={false}>
                <ImageViewer
                    imageUrls={zoomImage}
                    enableImageZoom={true}
                    saveToLocalByLongPress={true}
                    enableSwipeDown={false}
                    menuContext={{"saveToLocal": "保存图片", "cancel": "取消"}}
                    onClick={() => setIsTrue(false)}
                    enablePreload
                />
            </Modal>
        </View>
    )
}

export default ImageViewerComponent