import {create} from "zustand";
import createSelectors from "../../utils/zustandSelector";
import instance from "../../service/http/Request";

export interface pictureType {
    //key就是picture的id
    id: string,
    //用户Id
    authorId: string,
    //用户名
    userName: string,
    //用户图像
    authorAvatar: string,
    //文本
    caption: string,
    //标签列表
    tags: string[],
    //链接标签
    imageCollection: string[],
    //发布时间
    publishTime: string
}

interface AttentionScreenPicturesType {
    pictures: pictureType,
    //将拿到的数据进行更新
    update: (pictures: pictureType) => void
}

const WorkDetailsStore = createSelectors(create<AttentionScreenPicturesType>()((set) => ({
    pictures: {
        //key就是picture的id
        id: "",
        //用户Id
        authorId: "",
        //用户名
        userName: "",
        //用户头像
        authorAvatar: "",
        //文本
        caption: "",
        //标签列表
        tags: [],
        //链接标签
        imageCollection: [],
        //发布时间
        publishTime: ""
    },

    //更新数据
    update: ({id,authorId,userName,authorAvatar,caption,tags,imageCollection,publishTime}) => set((state) => ({
        pictures: {
            ...state.pictures,
            id: id,
            authorId:authorId,
            userName: userName,
            authorAvatar: authorAvatar,
            caption: caption,
            tags:tags,
            imageCollection:imageCollection,
            publishTime: publishTime,
        }
    }))

})))

export default WorkDetailsStore