import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextProps {
    children: React.ReactNode;
    style?: object;
    fontSize?: number;
}

const StyledText: React.SFC<TextProps> = ({children, fontSize, style}) => {
    return (
        <Text style={{...styles.default,...style, fontSize}}>
            {children}
        </Text>
    )
};

StyledText.defaultProps = {
    fontSize: 45,
    style: {}
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'GameOver'
    }
});

export default StyledText;