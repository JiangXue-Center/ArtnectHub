import {create} from "zustand";
import createSelectors from "../../utils/zustandSelector";
import instance from "../../service/http/Request";

export interface pictureType {
    //id就是picture的id
    id: string,
    //图片的图像地址
    indexLink: string,
    //用户Id
    authorId: string,
    //用户名
    userName: string,
    //赞的数量
    likes: string,
    //用户头像
    authorAvatar: string
}

interface AttentionScreenPicturesType {
    pictures: pictureType[]
    swiperPictures: pictureType[]
    axiosPictures: (picture: pictureType) => void
    axiosSwiperStore: (id: string, indexLink: string, authorId: string, userName: string, likes: string, authorAvatar: string) => void
}

const AttentionScreenPicturesStore = createSelectors(create<AttentionScreenPicturesType>()((set) => ({
    //测试用的数据
    pictures: [
        {
            id: "1",
            indexLink: "https://static.runoob.com/images/demo/demo3.jpg",
            authorId: "1",
            userName: "原批",
            likes: "43",
            authorAvatar: "https://static.runoob.com/images/demo/demo3.jpg"
        },
        {
            id: "1",
            indexLink: "https://static.runoob.com/images/demo/demo3.jpg",
            authorId: "1",
            userName: "原批",
            likes: "43",
            authorAvatar: "https://static.runoob.com/images/demo/demo3.jpg"
        },
        {
            id: "1",
            indexLink: "https://static.runoob.com/images/demo/demo3.jpg",
            authorId: "1",
            userName: "原批",
            likes: "43",
            authorAvatar: "https://static.runoob.com/images/demo/demo3.jpg"
        },
        {
            id: "1",
            indexLink: "https://static.runoob.com/images/demo/demo3.jpg",
            authorId: "1",
            userName: "原批",
            likes: "43",
            authorAvatar: "https://static.runoob.com/images/demo/demo3.jpg"
        },
    ],

    // pictures: [
    //
    // ],

    swiperPictures: [

    ],

    //更新列表
    axiosPictures: ({id, indexLink, authorId, userName, likes, authorAvatar}) => set((state) => ({
        pictures: [...state.pictures, {
            id: id,
            indexLink: indexLink,
            authorId: authorId,
            userName: userName,
            likes: likes,
            authorAvatar: authorAvatar
        }]
    })),
    axiosSwiperStore: (id: string, indexLink: string, authorId: string, userName: string, likes: string, authorAvatar: string) => set((state) => ({
        swiperPictures: [...state.swiperPictures, {
            id: id,
            indexLink: indexLink,
            authorId: authorId,
            userName: userName,
            likes: likes,
            authorAvatar: authorAvatar
        }]
    })),
})))

export default AttentionScreenPicturesStore