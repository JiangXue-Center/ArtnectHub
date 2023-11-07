import Token from "../../Token";
import MallStore from "../../Stores/MallPageStore/MallStore";
import Request from "../../service/http/Request";

const MallPageApi = ({navigation}: {navigation: any}) => {
    const {token} = Token()
    const addData = MallStore.use.updateData()
    const {instance} = Request()

    const mallApi = (id: string) => {
      instance.get(`/inventory/product/${id}`,{
          headers: {
              'Authorization': token
          }
      })
          .then(response => {
              // console.log(response)

              addData(response.data.data)
              navigation.navigate("MallDetailsPage")
              // console.log("data:"+JSON.stringify(response.data.data))
          }).catch(error => {
          console.error(error)
      })
    }
    
  return [mallApi]
}

export default MallPageApi