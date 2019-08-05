import React from "react";
import {StyleSheet, Text, View} from 'react-native';

export default function Spell({spell}) {
    const {name, subtype, slot, effect, enhanced, type, pool} = spell;
    return (<View style={styles.container}>
        <Text>{name}</Text>
        <Text>{type}</Text>
        <Text>{effect}</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 2
    }
});