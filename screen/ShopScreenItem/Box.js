import React, { Component, useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    ScrollView,
    TextInput,
    Switch,
    Dimensions,

} from 'react-native';
import localStorage from "localStorage";

let { width, height } = Dimensions.get('window');

const Box = ({url,price, method}) => {
    // var show = "0.0";
    // var flag = false;
    const [show, toggleShow] =useState(""); 

    const toggle = () => {
        // flag = !flag;
        if(show===""){
            toggleShow("√");
        }else{
            toggleShow("");
        }
        console.log("change state to " + (show==""?"√":""));
        // {event}
    }

    const onPress = () => {
        console.log("=========Box onPress()=========");
        toggle();
        method();
        // console.log(method);
        console.log("================================");
    }

    
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={styles.box}
        >
            <ImageBackground
                id='01'
                source={require('../../assets/images/x_fuxuankuang.png')}
                style={{
                    width: 20,
                    height: 20,
                    alignSelf: "flex-start",
                }}

            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 18,
                        alignSelf: "center",

                    }}
                >
                    {show}
                </Text>
            </ImageBackground>



            <Image
                source={url}
                style={{
                    height: '70%',
                    width: '70%',
                    resizeMode: "contain",
                    top: -10,
                    // alignSelf: "flex-start",
                }}
            >

            </Image>
            <Text
                style={{
                    fontFamily: "ThaleahFat",
                    color: "white",

                }}
            >
                {price}$
            </Text>
        </TouchableOpacity>
    );


}
export default Box;

const styles = StyleSheet.create({

	box: {
		// flex: 1,
		marginLeft: 5,
		width: (width - 5) / 4 - 5,
		height: (width - 5) / 4 - 5,

		// borderWidth: 3,
		// borderColor: "white",
		borderRadius: 15,
		backgroundColor: "#2b1216",

		alignContent: "center",
		alignItems: "center",

        display: "flex",
		elevation: 10,
		// shadowColor: "white",
		// shadowOffset: { width: 0, height: 0 },
		// shadowOpacity: 1,
		// shadowRadius: 10,
	},


});