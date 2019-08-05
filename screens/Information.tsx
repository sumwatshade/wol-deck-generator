import React from "react";
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

const Information: React.FunctionComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <Text>Information!!</Text>
        </View>
    )
};

export default Information;