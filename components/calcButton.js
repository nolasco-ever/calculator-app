import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

function CalcButton({
    text, bgColor, txtColor, nightMode, setNightMode, 
    displayText, setDisplayText, decimal, setDecimal, 
    equation, setEquation, newNum, setNewNum}){

    //Convert text to a number
    function convertToNum(text){
        return parseFloat(text);
    }

    //Convert number to text
    function convertToString(num){
        return num.toString();
    }

    //Divide number by 100
    function percentCalc(text){
        console.log("Percent Calc: ", text);
        var num = convertToNum(text);
        var percent = num/100;
        setDisplayText(convertToString(percent));
    }

    //Set up the numbers and symbol to do math

    function setNumberOne(text){
        setEquation((prevState) => ({...prevState, symbol: text, numOne: displayText}));
    }

    function setNumberTwo(text){
        let currSymbol = equation.symbol;
        setEquation((prevState) => ({...prevState, symbol: text, numTwo: displayText}));

        doMath(currSymbol);
    }

    //Do Math
    function doMath(currSymbol){
        let output;
        let numOne = convertToNum(equation.numOne);
        const numTwo = convertToNum(displayText);

        console.log("Num 1: ", numOne);
        console.log("Num 2: ", numTwo);

        switch(currSymbol){
            case "+":
                output = numOne + numTwo;
                break;
            case "-":
                output = numOne - numTwo;
                break;
            case "÷":
                output = numOne / numTwo;
                break;
            case "x":
                output = numOne * numTwo;
                break;
            default:
                //No default
        }

        console.log("Output: ", output);

        setDisplayText(convertToString(output));
    }

    //Add action to button press
    function buttonPressed(text){
        switch(text){
            case "🔄":
                if(nightMode === false){
                    setNightMode(true);
                }
                else{
                    setNightMode(false);
                }
                break;
            case "C":
                setDisplayText("0");
                setEquation((prevState) => ({...prevState, symbol: "", numOne: "", numTwo: ""}));

                if(decimal === false){
                    setDecimal(true);
                }
                break;
            case "+/-":
                if(displayText.charAt(0) !== "-"){
                    if(displayText !== "0"){
                        setDisplayText("-"+displayText);
                    }
                }
                else{
                    setDisplayText(displayText.substring(1));
                }
                break;
            case "%":
                percentCalc(displayText);
                break;
            case "÷":
            case "x":
            case "-":
            case "+":
                setEquation((prevState) => ({...prevState, symbol: text, numOne: displayText}));
                setNewNum(true);
                break;
            case ".":
                if(decimal === true){
                    if(displayText.length < 9){
                        setDisplayText(displayText+text);
                        setDecimal(false);
                    }
                }
                break;
            case "=":
                doMath(equation.symbol);
                break;
            default:
                if(displayText === "0" || newNum === true){
                    setDisplayText(text);

                    if(newNum === true){
                        setNewNum(false);
                        setDecimal(true);
                    }
                }
                else{
                    if(decimal === true){
                        if(displayText.length < 9){
                            setDisplayText(displayText+text);
                        }
                    }
                    else if(decimal === false){
                        if(displayText.length < 10){
                            setDisplayText(displayText+text);
                        }
                    }
                }
        }
    }
    return(
        <TouchableOpacity onPress={() => buttonPressed(text)} style={ [styles.container, {backgroundColor: bgColor}]}>
            <Text style={[styles.text, {color: txtColor}]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default CalcButton;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "25%",
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        fontWeight: "bold",
        fontSize: 30
    }
})