import Token from "../../Token";
import MallStore from "../../Stores/MallPageStore/MallStore";
import Request from "../../service/http/Request";
import MallPageStore from "../../Stores/MallPageStore";
import {useState} from "react";

const MallPageApi = ({navigation}: { navigation: any }) => {
    const {token} = Token()
    const addData = MallStore.use.updateData()
    const axiosBusinessStoreData = MallPageStore.use.axiosBusinessStoreData()
    const {instance} = Request()
    const [num, setNum] = useState(1)

    //点击商品后进入商品详情页api
    const mallApi = (id: string) => {
        instance.get(`/inventory/product/${id}`, {
            headers: {
                'Authorization': token
            }
        })
            .then(response => {
                addData(response.data.data)
                navigation.navigate("MallDetailsPage")
            }).catch(error => {
            console.error(error)
        })
    }

    //商品首页所有商品
    const mallStoreApi = () => {
        instance.get(`/inventory/index/offset/${num}/size/20`, {
            headers: {
                'Authorization': token
            }
        })
            .then(response => {
                const responseData = response.data.data
                responseData.forEach((item: any) => {
                    axiosBusinessStoreData({
                        spuId: item.spuId,
                        mainImage: item.mainImage,
                        businessId: item.businessId,
                        subTitle: item.subTitle,
                        price: item.price,
                        businessName: item.businessName,
                    });
                });
                setNum(num + 1)
            }).catch(error => {
            console.error(error)
        })
    }

    return {mallApi, mallStoreApi}
}

export default MallPageApi