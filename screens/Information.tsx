import React from "react";
import {StyleSheet, Text, View} from 'react-native';

export default function Information() {
    return (<View style={styles.container}>
        <Text>Information!!</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})