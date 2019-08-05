import React, {useState} from "react";
import {StyleSheet, Text, View, Modal, TouchableHighlight, Alert} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Spell({spell}) {
    const {name, subtype, slot, effect, enhanced, type, pool} = spell;
    const [isModalVisible, toggleModal] = useState(false);

    return (
        <TouchableHighlight  onPress={() => {toggleModal(!isModalVisible)}}>
            <View style={styles.container}>
                <View style={styles.type}>
                    <Text>{type}</Text>
                </View>
                <View style={styles.details}>
                    <Text>{name}</Text>
                </View>

                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={isModalVisible}
                    onRequestClose={() => {
                        toggleModal(!isModalVisible);
                    }}>
                    <View style={styles.modal}>
                        <View>
                            <TouchableHighlight
                                onPress={() => {
                                    toggleModal(!isModalVisible);
                                }}>
                                <Icon name='close' size={25} style={styles.close} />
                            </TouchableHighlight>
                            <Text>{name}{subtype ? ` - ${subtype}` : ""}</Text>
                            <Text>{`Element: ${type}`}</Text>
                            <Text>{`Arcana Slot: ${slot}`}</Text>
                            <Text>{`Description: ${effect}`}</Text>
                            <Text>{`Enhanced: ${enhanced}`}</Text>
                            <Text>{`Pool: ${pool}`}</Text>


                        </View>
                    </View>
                </Modal>

            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: 'gray',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        marginTop: 2
    },
    type: {
        flexShrink: 0,
        minWidth: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    details: {
        flexGrow: 4
    },
    modal: {
        padding: 10,
        margin: 20
    },
    close: {
        alignSelf: "flex-end"
    }
});