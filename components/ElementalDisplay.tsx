import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextProps {
    type: 'fire' | 'air' | 'water' | 'lightning' | 'chaos',
    style?: object,
    fontSize?: number
}

const StyledText: React.SFC<TextProps> = ({type, style, fontSize}) => {
    console.log(styles[type]);
    return (
        <Text style={{...styles.common, ...styles[type.toLowerCase()], ...style, fontSize}}>
            {type}
        </Text>
    )
};

StyledText.defaultProps = {
    fontSize: 45,
    style: {}
};

const styles = StyleSheet.create({
    common: {
        fontFamily: 'GameOver'
    },
    fire: {
        color: "#ff2000"
    },
    water: {
        color: "#1367ff"
    },
    air: {
        color: "#4ebbf0"
    },
    lightning: {
        color: "#f0ea1c"
    },
    chaos: {
        color: "#2500d4"
    },
    earth: {
        color: "#0ab504"
    }
});

export default StyledText;