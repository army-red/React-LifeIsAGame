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

} from 'react-native';
import localStorage from "localStorage";

const ScrollItem = ({style_co_im,text,func }) => {

    const [isFin, toggleIsFin] = useState(false);
    const toggleFin = () => {
        // addCount(count + 1);
        // localStorage.setItem("solvedAmount",count + 1);
        toggleIsFin(previousState => !previousState);
        {func}
    };

    return (
        <ScrollView
            horizontal={true}
            style={isFin ? theme.fin : (style_co_im ? theme.co : theme.im)}
        >
            {/* <TouchableOpacity
            activeOpacity={0.5}
            onPress={touch}
            style={{
                width: "15%",
                height: "100%",
                marginLeft: 25,
                marginTop: 5,
                // backgroundColor: "black",

            }}
        >
            <Image
                source={require("../../assets/images/x_fuxuankuang.png")}
                style={{
                    width: 15,
                    height: 15,
                    alignSelf: "center",
                    marginTop: 18,

                }}
            >

            </Image>
        </TouchableOpacity> */}
            <Switch
                trackColor={{ false: "#f0c9cf", true: "#9abeaf" }}
                thumbColor="white"
                // disabled={isFin}
                ios_backgroundColor="#3e3e3e"
                value={isFin}

                onValueChange={toggleFin}


                style={{
                    width: "15%",
                    marginLeft: 25,
                    marginTop: 5,

                }}
            >

            </Switch>
            <Text
                style={{
                    fontFamily: "ThaleahFat",
                    fontSize: 40,
                    lineHeight: 40,
                    marginLeft: 10,
                    marginTop: 10,
                    color: "white",

                }}
            >
                {style_co_im ? "COM" : "EMG"} |
            </Text>
            <Text
                style={{
                    fontFamily: "IPix",
                    fontSize: 15,
                    lineHeight: 40,
                    marginLeft: 10,

                    color: "white",
                }}
            >
                {text}
            </Text>


        </ScrollView>
    );


}
export default ScrollItem;
const theme = StyleSheet.create({
    co: {
        width: "95%",
        height: 60,
        backgroundColor: "#f0a1a8",
        borderRadius: 15,
        alignSelf: "center",

        marginTop: 10,
        marginBottom: 10,
        elevation: 5,
        flexDirection: "row",

        padding: 5,
    },

    im: {
        width: "95%",
        height: 60,
        backgroundColor: "#c02c38",
        borderRadius: 15,
        alignSelf: "center",

        marginTop: 10,
        marginBottom: 10,
        elevation: 5,
        flexDirection: "row",

        padding: 5,
    },

    fin: {
        width: "95%",
        height: 60,
        backgroundColor: "#7a7374",
        borderRadius: 15,
        alignSelf: "center",

        marginTop: 10,
        marginBottom: 10,
        elevation: 5,
        flexDirection: "row",

        padding: 5,
    }
});