//import liraries
import React, { Component, FC } from 'react';
import { View, Text, StyleSheet, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
    mV?: number;
    mH?: number;
    IconLeft: any;
    IconRight?: any;
    text: string;
    errors: any | undefined;
    touched: any | undefined;
    pasButton?: () => void;
    bgColor: string;
    bColor?: string;
    bR?: number;
    bW?: number;
    passwordInput?: boolean | false;
    netherland_vat?: boolean | false;
    passwordInputIcon?: boolean | false;
    textWidth?: any;
    labelW?: any;
    w?: 'half' | 'full' | '2/3';
}

// create a component
const WatchimeInput: FC<Props> = () => {
    return (
        <View style={styles.container}>
            <Text>WatchimeInput</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default WatchimeInput;
