import {Dimensions, StyleSheet, TouchableOpacity, View} from "react-native";
import { Feather, Ionicons} from "@expo/vector-icons";
import {Box, Button, Modal, Text} from "native-base";
import {useState} from "react";


const {width, height} = Dimensions.get("window")
const AfterService = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    return (
        <Box m="4" flexDirection="row">
            <Ionicons name="heart-outline" size={24} color="black"/>
            <Box w={width / 1.4}>
                {/*afterService*/}
                <Text ml="4">我们提供60天无条件退货。如有问题，请联系我们的客服。</Text>
            </Box>
            <TouchableOpacity onPress={() => openModal()}>
                <Feather name="chevron-right" size={24} color="black"/>
            </TouchableOpacity>

            <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
                <Modal.Content maxWidth="350" style={[styles.bottom]}>
                    <Modal.CloseButton />
                    <Modal.Header>60天退货无理由</Modal.Header>
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

export default AfterService

const styles = StyleSheet.create({
    bottom: {
        marginBottom: 0,
        marginTop: "auto",
        height: height,
        width: width
    },
})