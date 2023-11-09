import {Box, Text} from "native-base";
import MallStore from "../../../../../Stores/MallPageStore/MallStore";
import {material} from "react-native-typography";

const Description = () => {
    const description = MallStore.use.data().detail.description

    return (
        <Box m={2}>
            <Text style={material.title}>产品描述</Text>
            <Text mt={2} style={material.caption}>{description}</Text>
        </Box>
    )
}

export default Description