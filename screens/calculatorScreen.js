import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

//import components
import CalcButton from '../components/calcButton';
import CalcDisplay from '../components/calcDisplay';

function CalculatorScreen(){

    const [displayText, setDisplayText] = useState("0");
    const [nightMode, setNightMode] = useState(false);
    const [decimal, setDecimal] = useState(true);
    const [equation, setEquation] = useState({
        symbol: "",
        num: ["", ""]
    });
    const [newNum, setNewNum] = useState(false);

    var containerColor;
    var gridColor;
    var buttonColor;
    var buttonTxtColor;
    var displayTxtColor;

    const buttonsR1 = ['C', '+/-', '%', '÷'];
    const buttonsR2 = ['7', '8', '9', 'x'];
    const buttonsR3 = ['4', '5', '6', '-'];
    const buttonsR4 = ['1', '2', '3', '+'];
    const buttonsR5 = ['🔄','0', '.', '='];

    if(nightMode === true){
        containerColor = "#282828";
        gridColor = "rgba(0,0,0,0)";
        buttonColor = "rgba(0,0,0,0)";
        buttonTxtColor = "#2196f3";
        displayTxtColor = "#fff";
    }
    else{
        containerColor = "#FCF7FF";
        gridColor = "rgba(0,0,0,0)";
        buttonColor = "rgba(0,0,0,0)";
        buttonTxtColor = "#2196f3";
        displayTxtColor = "#000";
    }

    return(
        <View style={[styles.container, {backgroundColor: containerColor}]}>
            <CalcDisplay
                displayText = {displayText}
                displayTxtColor = {displayTxtColor}
            />

            <View style={[styles.buttonGrid, {backgroundColor: gridColor}]}>
                <View style={styles.buttonRow}>
                    {buttonsR1.map((button, index) => (
                        <CalcButton
                            key={index}
                            text={button}
                            bgColor={buttonColor}
                            txtColor={buttonTxtColor}
                            nightMode = {nightMode}
                            setNightMode = {setNightMode}
                            displayText = {displayText}
                            setDisplayText = {setDisplayText}
                            decimal ={decimal}
                            setDecimal = {setDecimal}
                            equation = {equation}
                            setEquation = {setEquation}
                            newNum = {newNum}
                            setNewNum = {setNewNum}
                        />
                    ))}
                </View>

                <View style={styles.buttonRow}>
                    {buttonsR2.map((button, index) => (
                        <CalcButton
                            key={index}
                            text={button}
                            bgColor={buttonColor}
                            txtColor={buttonTxtColor}
                            nightMode = {nightMode}
                            setNightMode = {setNightMode}
                            displayText = {displayText}
                            setDisplayText = {setDisplayText}
                            decimal ={decimal}
                            setDecimal = {setDecimal}
                            equation = {equation}
                            setEquation = {setEquation}
                            newNum = {newNum}
                            setNewNum = {setNewNum}
                        />
                    ))}
                </View>

                <View style={styles.buttonRow}>
                    {buttonsR3.map((button, index) => (
                        <CalcButton
                            key={index}
                            text={button}
                            bgColor={buttonColor}
                            txtColor={buttonTxtColor}
                            nightMode = {nightMode}
                            setNightMode = {setNightMode}
                            displayText = {displayText}
                            setDisplayText = {setDisplayText}
                            decimal ={decimal}
                            setDecimal = {setDecimal}
                            equation = {equation}
                            setEquation = {setEquation}
                            newNum = {newNum}
                            setNewNum = {setNewNum}
                        />
                    ))}
                </View>

                <View style={styles.buttonRow}>
                    {buttonsR4.map((button, index) => (
                        <CalcButton
                            key={index}
                            text={button}
                            bgColor={buttonColor}
                            txtColor={buttonTxtColor}
                            nightMode = {nightMode}
                            setNightMode = {setNightMode}
                            displayText = {displayText}
                            setDisplayText = {setDisplayText}
                            decimal ={decimal}
                            setDecimal = {setDecimal}
                            equation = {equation}
                            setEquation = {setEquation}
                            newNum = {newNum}
                            setNewNum = {setNewNum}
                        />
                    ))}
                </View>

                <View style={styles.buttonRow}>
                    {buttonsR5.map((button, index) => (
                        <CalcButton
                            key={index}
                            text={button}
                            bgColor={buttonColor}
                            txtColor={buttonTxtColor}
                            nightMode = {nightMode}
                            setNightMode = {setNightMode}
                            displayText = {displayText}
                            setDisplayText = {setDisplayText}
                            decimal ={decimal}
                            setDecimal = {setDecimal}
                            equation = {equation}
                            setEquation = {setEquation}
                            newNum = {newNum}
                            setNewNum = {setNewNum}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
}

export default CalculatorScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        paddingTop: "10%"
    },

    buttonGrid: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "80%"
    },

    buttonRow: {
        height: "15%",
        width: "100%",
        display: "flex",
        flexDirection: "row"
    }
});