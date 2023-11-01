import {Dimensions, StyleSheet, TouchableOpacity, View} from "react-native";
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
import {Box, Button, Divider, Modal, Text, VStack} from "native-base";
import {useState} from "react";


const {width, height} = Dimensions.get("window")
const GenericSpec = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    return (
        <Box m="4" flexDirection="row">
            <AntDesign name="carryout" size={24} color="black"/>
            <Box w={width / 1.4}>
                {/*genericSpec*/}
                <Text ml="4">款式 · 适用年龄 · 主要材质 · 尺码</Text>
            </Box>
            <TouchableOpacity onPress={() => openModal()}>
                <Feather name="chevron-right" size={24} color="black"/>
            </TouchableOpacity>

            <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
                <Modal.Content style={[styles.bottom]}>
                    <Modal.CloseButton/>
                    <Modal.Header>产品参数</Modal.Header>
                    <Modal.Body>
                        <Box>
                            <VStack divider={<Divider/>}>
                                <Box p={4} flexDirection="row">
                                    <Text>材质</Text>
                                    <Text pl={8}>笔杆材质：</Text>
                                </Box>
                                <Box p={4}>
                                    22284yur928uwe8rqwoeurqwoieurowiueoiquweiuqioweuroqieqo
                                </Box>
                                <Divider/>
                            </VStack>
                        </Box>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setOpen(false);
                            }}>
                                Cancel
                            </Button>
                            <Button onPress={() => {
                                setOpen(false);
                            }}>
                                Save
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Box>
    )
}

export default GenericSpec

const styles = StyleSheet.create({
    bottom: {
        marginBottom: 0,
        marginTop: "auto",
        height: height,
        width: width
    },
})