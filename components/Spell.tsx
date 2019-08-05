import React, {useState} from "react";
import {StyleSheet, View, Modal, TouchableHighlight} from 'react-native';
import StyledText from "../components/StyledText";
import ElementalDisplay from "../components/ElementalDisplay";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: '#ff2e63',
        backgroundColor: '#eaeaea',
        borderWidth: 5,
        marginTop: 5,
        marginBottom: 5
    },
    type: {
        flexShrink: 0,
        minWidth: "25%",
        justifyContent: "center",
        alignItems: "center",
    },
    details: {
        fontFamily: 'GameOver',
        flexGrow: 4
    },
    modal: {
        padding: 10,
        margin: 20,
        alignSelf: 'center',
        borderColor: '#ff2e63',
        backgroundColor: '#252a34',
        borderWidth: 5,
    },
    close: {
        alignSelf: "flex-end"
    }
});

export default function Spell({spell}) {
    const {name, subtype, slot, effect, enhanced, type, pool} = spell;
    const [isModalVisible, toggleModal] = useState(false);

    return (
        <TouchableHighlight  onPress={() => {toggleModal(!isModalVisible)}}>
            <View style={styles.container}>
                <View style={styles.type}>
                    <ElementalDisplay type={type}/>
                </View>
                <View style={styles.details}>
                    <StyledText>{name}</StyledText>
                </View>

                <Modal
                    animationType="fade"
                    transparent={true}
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
                            <StyledText fontSize={100} style={{alignSelf: 'center', color: '#ffffff'}}>
                                {name}{subtype ? ` (${subtype})` : ""}
                            </StyledText>
                            <ElementalDisplay type={type} style={{alignSelf: 'center'}} />
                            <StyledText style={{alignSelf: 'center', color: '#ffffff'}}>
                                {`Arcana Slot: ${slot}`}
                            </StyledText>
                            <StyledText style={{color: "#ffffff"}}>
                                {`Description: ${effect}`}
                            </StyledText>
                            <StyledText style={{color: '#ffffff'}}>
                                <StyledText style={{color: '#0dcaff'}}>Enhanced: </StyledText>
                                {enhanced}
                            </StyledText>
                            <StyledText style={{alignSelf: 'center', color: '#ffffff'}}>
                                {`Pool ${pool}`}
                            </StyledText>


                        </View>
                    </View>
                </Modal>

            </View>
        </TouchableHighlight>
    )
}