import {Dimensions, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import { Feather, Ionicons} from "@expo/vector-icons";
import {Actionsheet, Box, Button, Divider, Image, Modal, Text, useDisclose, VStack} from "native-base";
import {useState} from "react";
import MallStore from "../../../../../Stores/MallPageStore/MallStore";
import {material} from "react-native-typography";


const {width, height} = Dimensions.get("window")
const AfterService = () => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    const afterService = MallStore.use.data().detail.afterService
    return (
        <Box m="4" flexDirection="row">
            <Ionicons name="heart-outline" size={24} color="black"/>
            <Box w={width / 1.4}>
                {/*afterService*/}
                <Text ml="4">{afterService}</Text>
            </Box>
            <TouchableOpacity onPress={() => onOpen()}>
                <Feather name="chevron-right" size={24} color="black"/>
            </TouchableOpacity>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Box>
                        <Box w={width} h={height}>
                            <Text m={4} style={material.caption}>{afterService}</Text>
                        </Box>
                    </Box>
                </Actionsheet.Content>
            </Actionsheet>

        </Box>
    )
}

export default AfterService