import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

function CalcDisplay({displayText, displayTxtColor}){
    return(
        <View style={styles.container}>
            <Text style={[styles.text, {color: displayTxtColor}]}>{displayText}</Text>
        </View>
    );
}

export default CalcDisplay;

const styles = StyleSheet.create({
    container: {
        height: "35%",
        width: "100%",
        justifyContent: "flex-end"
    },

    text: {
        textAlign: "right",
        fontSize: 60,
        marginBottom: "5%",
        marginRight: "5%"
    },

    iconContainer: {
        marginLeft: "2%",
        backgroundColor: "#eeeeee",
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: "#000",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center"
    },

    icon: {
        height: "90%",
        width: "90%",
        resizeMode: "contain",
        borderRadius: 25,
        padding: 5
    }
});