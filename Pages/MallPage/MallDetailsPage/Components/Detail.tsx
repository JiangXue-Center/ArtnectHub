import {Box, Divider, VStack} from "native-base";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {Text} from "native-base";
import {Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import {useState} from "react";
import AfterService from "./AfterService";
import SpecialSpec from "./SpecialSpec";
import GenericSpec from "./GenericSpec";

const {width, height} = Dimensions.get("window")
const Detail = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    return (
        <Box borderRadius="md" backgroundColor="gray.200" m="4" borderRightRadius={10} borderLeftRadius={10}>
            <VStack divider={<Divider/>}>
                <Box m="4" flexDirection="row">
                    <MaterialCommunityIcons name="truck-outline" size={24} color="black"/>
                    <Box w={width / 1.4}>
                        {/**/}
                        <Text ml="4">广东广州 至 广东东莞</Text>
                    </Box>
                    <TouchableOpacity>
                        <Feather name="chevron-right" size={24} color="black"/>
                    </TouchableOpacity>
                </Box>
                {/*服务售后*/}
                <AfterService/>
                {/*款式*/}
                <SpecialSpec/>
                {/*材质样式等等*/}
                <GenericSpec/>

            </VStack>
        </Box>
    )
}

export default Detail


const styles = StyleSheet.create({
    bottom: {
        marginBottom: 0,
        marginTop: "auto",
        height: height,
        width: width
    },
})