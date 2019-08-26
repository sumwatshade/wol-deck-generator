import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ElementalDisplayProps {
    type: 'fire' | 'air' | 'water' | 'lightning' | 'chaos';
    style?: object;
    fontSize?: number;
}

const styles = StyleSheet.create({
    common: {
        fontFamily: 'GameOver'
    },
    offense: {
        color: "#ff2000"
    },
    cursed: {
        color: "#2500d4"
    },
    defense: {
        color: "#4ebbf0"
    },
    doctor: {
        color: "#0ab504"
    },
    misc: {}
});

const StyledText: React.SFC<ElementalDisplayProps> = ({ type, style, fontSize }) => {
    return (
        <Text style={{ ...styles.common, ...styles[type.toLowerCase()], ...style, fontSize }}>
            {type}
        </Text>
    )
};

StyledText.defaultProps = {
    fontSize: 45,
    style: {}
};

export default StyledText;