import {Dimensions, StyleSheet, TouchableOpacity, View} from "react-native";
import {AntDesign, Feather} from "@expo/vector-icons";
import {Box, Button, Modal, Text} from "native-base";
import {useState} from "react";

const {width, height} = Dimensions.get("window")
const SpecialSpec = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    return (
        <Box m="4" flexDirection="row">
            <AntDesign name="appstore-o" size={24} color="black"/>
            <Box w={width / 1.4}>
                {/*specialSpec*/}
                <Text ml="4">图片 图片 图片 图片 四种款式</Text>
            </Box>
            <TouchableOpacity onPress={() => openModal()}>
                <Feather name="chevron-right" size={24} color="black"/>
            </TouchableOpacity>

            <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
                <Modal.Content maxWidth="350" style={[styles.bottom]}>
                    <Modal.CloseButton />
                    <Modal.Header>款式</Modal.Header>
                    <Modal.Body>

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

export default SpecialSpec

const styles = StyleSheet.create({
    bottom: {
        marginBottom: 0,
        marginTop: "auto",
        height: height,
        width: width
    },
})