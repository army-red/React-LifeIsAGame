import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Button,
    TouchableOpacity,
    Alert,
} from 'react-native';
import localStorage from "localStorage";
import dataHandler from "../dataHandler";

export default function HomeScreen() {


    
    var change = [
		{ id: 0, checked: false ,url: require("../assets/images/weapon/Aerial_Bane.png")},
		{ id: 1, checked: false ,url: require("../assets/images/weapon/Amethyst_Staff.png")},
		{ id: 2, checked: false ,url: require("../assets/images/weapon/Bee_Keeper.png")},
		{ id: 3, checked: false ,url: require("../assets/images/weapon/Betsy_Wrath.png")},
		{ id: 4, checked: false ,url: require("../assets/images/weapon/Book_of_Skulls.png")},
		{ id: 5, checked: false ,url: require("../assets/images/weapon/Copper_Shortsword.png")},
		{ id: 6, checked: false ,url: require("../assets/images/weapon/Daedalus_Stormbow.png")},
		{ id: 7, checked: false ,url: require("../assets/images/weapon/Demon_Bow.png")},
		{ id: 8, checked: false ,url: require("../assets/images/weapon/Demon_Scythe.png")},
		{ id: 9, checked: false ,url: require("../assets/images/weapon/Frost_armor.png")},
		
		{ id: 10, checked: false ,url: require("../assets/images/weapon/Golden_Shower.png")},
		{ id: 11, checked: false ,url: require("../assets/images/weapon/Hallowed_armor.png")},
		{ id: 12, checked: false ,url: require("../assets/images/weapon/Hellwing_Bow.png")},
		{ id: 13, checked: false ,url: require("../assets/images/weapon/Influx_Waver.png")},
		{ id: 14, checked: false ,url: require("../assets/images/weapon/Magic_Missile.png")},
		{ id: 15, checked: false ,url: require("../assets/images/weapon/Magnet_Sphere.png")},
		{ id: 16, checked: false ,url: require("../assets/images/weapon/Megashark.png")},
		{ id: 17, checked: false ,url: require("../assets/images/weapon/Meowmere.png")},
		{ id: 18, checked: false ,url: require("../assets/images/weapon/Minishark.png")},
		{ id: 19, checked: false ,url: require("../assets/images/weapon/Musket.png")},
		
		{ id: 20, checked: false ,url: require("../assets/images/weapon/Mythril_Repeater.png")},
		{ id: 21, checked: false ,url: require("../assets/images/weapon/Necro_armor.png")},
		{ id: 22, checked: false ,url: require("../assets/images/weapon/Obsidian_Swordfish.png")},
		{ id: 23, checked: false ,url: require("../assets/images/weapon/Phantasm.png")},
		{ id: 24, checked: false ,url: require("../assets/images/weapon/Rainbow_Rod.png")},
		{ id: 25, checked: false ,url: require("../assets/images/weapon/Razorblade_Typhoon.png")},
		{ id: 26, checked: false ,url: require("../assets/images/weapon/S.D.M.G..png")},
		{ id: 27, checked: false ,url: require("../assets/images/weapon/Scarab_Bomb.png")},
		{ id: 28, checked: false ,url: require("../assets/images/weapon/Sky_Fracture.png")},
		{ id: 29, checked: false ,url:require("../assets/images/weapon/Starfury.png") },
		
		{ id: 30, checked: false ,url: require("../assets/images/weapon/Terra_Blade.png")},
		{ id: 31, checked: false ,url: require("../assets/images/weapon/Terraprisma.png")},
		{ id: 32, checked: false ,url: require("../assets/images/weapon/Thorn_Chakram.png")},
		{ id: 33, checked: false ,url: require("../assets/images/weapon/Thunder_Zapper.png")},
		{ id: 34, checked: false ,url: require("../assets/images/weapon/Tsunami.png")},
		{ id: 35, checked: false ,url: require("../assets/images/weapon/Venus_Magnum.png")},
		{ id: 36, checked: false ,url: require("../assets/images/weapon/Vortex_armor.png")},
		{ id: 37, checked: false ,url: require("../assets/images/weapon/Water_Bolt.png")},
		{ id: 38, checked: false ,url: require("../assets/images/weapon/Zenith.png")},
		{ id: 39, checked: false ,url: require("../assets/images/weapon/Phantasm.png")},

        { id: 40, checked: false ,url: require("../assets/images/weapon/empty.png") },

	];

    //====================================================
    // 获取盒子图片
    //====================================================
    const [sixBoxUrl, changeBoxUrl] = useState(localStorage.getItem("sixBoxUrl"));

    console.log("sixBoxUrl: " + sixBoxUrl);
    console.log("test: " + change[parseInt(sixBoxUrl[0])].url);
    var splitUrl = sixBoxUrl.split(","); 
    // console.log(splitUrl[0] + " " + splitUrl[2]);
    const [box01, changeBox01] = useState(<Image source={change[splitUrl[0]].url} style={styles.img}></Image>);
	const [box02, changeBox02] = useState(<Image source={change[splitUrl[1]].url} style={styles.img}></Image>);
	const [box03, changeBox03] = useState(<Image source={change[splitUrl[2]].url} style={styles.img}></Image>);
	const [box04, changeBox04] = useState(<Image source={change[splitUrl[3]].url} style={styles.img}></Image>);
	const [box05, changeBox05] = useState(<Image source={change[splitUrl[4]].url} style={styles.img}></Image>);
	const [box06, changeBox06] = useState(<Image source={change[splitUrl[5]].url} style={styles.img}></Image>);

    //====================================================
    // 获取人物数据
    //====================================================

    const [level, changeLevel] = useState(localStorage.getItem("level"));
    // level = localStorage.getItem("level");
    const [currentExp, changeCurrExp] = useState(localStorage.getItem("currentExp"));
    // currentExp = localStorage.getItem("currentExp");
    const [maxExp, changeMaxExp] = useState(localStorage.getItem("maxExp"));
    // maxExp = localStorage.getItem("maxExp");
    const [hp, changeHP] = useState(localStorage.getItem("hp"));
    const [atk, changeATK] = useState(localStorage.getItem("atk"));
    const [money, changeMoney] = useState(localStorage.getItem("moneyIn"));
    const [solvedMission, changeMissionAmount] = useState(localStorage.getItem("solvedAmount"));

    let expBarWidth = currentExp/maxExp*95 + "%";
    console.log("expBarWidth: " + expBarWidth);

    //====================================================
    // 定义按钮事件
    //====================================================

    const onPress = () => {
        console.log("=========HomeScreen onPress()=========");


        changeBoxUrl(localStorage.getItem("sixBoxUrl"));

        var splitUrl = sixBoxUrl.split(",");
        console.log("sixBox: " + sixBoxUrl);
        console.log("01: " + sixBoxUrl[1]);
        console.log("02: " + sixBoxUrl[2]);
        changeBox01(<Image source={change[splitUrl[0]].url} style={styles.img}></Image>);
	    changeBox02(<Image source={change[splitUrl[1]].url} style={styles.img}></Image>);
	    changeBox03(<Image source={change[splitUrl[2]].url} style={styles.img}></Image>);
	    changeBox04(<Image source={change[splitUrl[3]].url} style={styles.img}></Image>);
	    changeBox05(<Image source={change[splitUrl[4]].url} style={styles.img}></Image>);
	    changeBox06(<Image source={change[splitUrl[5]].url} style={styles.img}></Image>);
        


        changeHP(localStorage.getItem("hp"));
        changeATK(localStorage.getItem("atk"));
        changeMoney(localStorage.getItem("moneyIn"));
        changeMissionAmount(localStorage.getItem("solvedAmount"));

        // console.log("money: " + money);
        // loadData = dataHandler();
        // if(loadData){

        // }
        
        // console.log("box01: " + box01);
        // console.log("box02: " + box02);
        console.log("=======================================");
	};
    


    //====================================================
    // 数据更新
    //====================================================
    // setInterval(onPress, 1000);
    // changeHP(localStorage.getItem("hp"));
    // changeATK(localStorage.getItem("atk"));
    // changeMoney(localStorage.getItem("moneyIn"));

    return (

        <View style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",

        }}>
            <View style={styles_home.top}></View>
            <ImageBackground 
                style={styles_home.backGround}
                source={require("../assets/images/klee.gif")}
                // 场景背景
            >

                {/* 显示数据 */}
                <View style={[styles_home.datas]}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={onPress}
                        style={[{
                            fontFamily: "ThaleahFat",
                            fontSize: 20,
                            color: "white",
                            backgroundColor: "#ed556a",
                            height: "100%",
    
                            margin: 10,
                            padding: 10,
    
                            borderRadius: 10,
    
                            elevation:10,
    
                        }]}
                    >
                        <View
                        style={{
                            flex: 1,
                            width: "95%",
                            alignSelf: "center",
                            // backgroundColor: "yellow",
                            marginTop: 2,

                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "ThaleahFat",
                                    fontSize: 30,
                                    color: "white",

                                }}
                            
                            >
                                HP: {hp}  |  ATK: {atk}
                            </Text>
                        </View>

                        <View
                        style={{
                            flex: 1,
                            width: "95%",
                            alignSelf: "center",
                            // backgroundColor: "yellow",
                            marginTop: 2,

                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "ThaleahFat",
                                    fontSize: 30,
                                    color: "white",

                                }}
                            
                            >
                                Money: {money}
                            </Text>
                        </View>

                        <View
                        style={{
                            flex: 1,
                            width: "95%",
                            alignSelf: "center",
                            // backgroundColor: "yellow",
                            marginTop: 2,

                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "ThaleahFat",
                                    fontSize: 30,
                                    color: "white",

                                }}
                            
                            >
                                Mission Complete: {solvedMission}
                            </Text>
                            
                        </View>
                    </TouchableOpacity>
                    
                    
                    

                    
                    
                    {/* <Text style={[{
                        fontFamily: "ThaleahFat",
                        fontSize: 20,
                        color: "white",
                        backgroundColor: "#ed556a",
                        height: "100%",

                        margin: 10,
                        padding: 10,

                        borderRadius: 10,

                        elevation:10,

                    }]}>
                        SCROLL BAR
                        
				    </Text> */}
                    <TouchableOpacity

						activeOpacity={0.5}
						style={{
							height: 10,
							width: 10,
							alignItems: "center",

							borderRadius: 5,

							// backgroundColor: "#a7535a",
							position: "absolute",
							right: 0,
							top: 0,
						}}
						onPress={onPress}
					>
						<Image
							source={require('../assets/images/x_mokuai.png')}
							style={{
								height: 8,
								width: 8,

								margin: 1,
							}}
						>

						</Image>
					</TouchableOpacity>
                </View>

                {/* 显示角色 */}
                <View style={[styles_home.character]}>
                    <View style={{ flex: 1, flexDirection: "column", alignContent: "center", justifyContent: "center" }}>
                        <View style={{ height: 400, alignSelf: "center", alignContent: "center", marginLeft: 10, marginTop: 20 }}>
                            <ImageBackground style={styles_home.itemBox} source={require("../assets/images/Slot3D_rounded_CC.png")}>
                                {box01}
                            </ImageBackground>
                            <ImageBackground style={styles_home.itemBox} source={require("../assets/images/Slot3D_rounded_CC.png")}>
                                {box02}
                            </ImageBackground>
                            <ImageBackground style={styles_home.itemBox} source={require("../assets/images/Slot3D_rounded_CC.png")}>
                                {box03}
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Image
                            // source={require("../assets/images/idle-left-1024.gif")}
                            style={{ height: 256, width: 256, resizeMode: "stretch", alignSelf: "center", marginTop: 80, }}

                        >
                            {/* Character Image */}
                        </Image>
                    </View>
                    <View style={{ flex: 1, flexDirection: "column", alignContent: "center", justifyContent: "center" }}>
                        <View style={{ height: 400, alignSelf: "center", alignContent: "center", marginRight: 10, marginTop: 20 }}>
                            <ImageBackground style={styles_home.itemBox} source={require("../assets/images/Slot3D_rounded_CC.png")}>
                                {box04}
                            </ImageBackground>
                            <ImageBackground style={styles_home.itemBox} source={require("../assets/images/Slot3D_rounded_CC.png")}>
                                {box05}
                            </ImageBackground>
                            <ImageBackground style={styles_home.itemBox} source={require("../assets/images/Slot3D_rounded_CC.png")}>
                                {box06}
                            </ImageBackground>
                        </View>
                    </View>
                </View>


                {/* 显示经验条 */}

                <View style={styles_home.expBar}>
                    <View>
                        <Text
                            style={{
                                alignSelf: "center",
                                fontFamily: "ThaleahFat",
                                fontSize: 30,
                                // color: "#1661ab",
                                color: "white",


                            }}
                        >
                            LEVEL: {level}
                        </Text>
                    </View>
                    <View style={{ width: '100%', height: '100%', alignSelf: "center", alignContent: "center", flexDirection: "row", }}>
                        <View style={{ flex: 1 }}>
                            <Text style={[{
                                fontFamily: "ThaleahFat",
                                fontSize: 27,
                                color: "white",
                                top: '15%',
                                marginLeft: 10,
                                // backgroundColor: "black",
                            }]}>
                                EXP:
						</Text>
                        </View>
                        <View style={{ flex: 4 }}>
                            <ImageBackground style={{
                                top: "13%",
                                width: 270,
                                height: 36,

                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                // color: "red"
                            }} source={require("../assets/images/bar_rounded_HCC_horizontal.png")}>
                                <View style={{ width: expBarWidth, height: "80%", marginLeft: 5, borderRadius: 0, opacity: 0.85, backgroundColor: "black" }}>

                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[{
                                fontFamily: "ThaleahFat",
                                fontSize: 27,
                                color: "white",
                                top: '15%',
                                // backgroundColor: "black",

                            }]}>
                                {currentExp}/{maxExp}
						</Text>
                        </View>



                    </View>
                </View>

            </ImageBackground>
        </View>
    );
}

const styles_home = StyleSheet.create({

    top: {
        flexDirection: "row",
        backgroundColor: "#4c1f24",
        // backgroundColor:"black",
        flex: 3,

        borderBottomWidth: 5,
        borderBottomColor: "#82202b",
        // opacity: 0.8,
    },
    backGround:{
        flex: 90,
        backgroundColor: "#4c1f24",
    },
    datas: {
        flexDirection: "column",
        flex: 20,
        // opacity: 0.3,

    },
    character: {
        flexDirection: "row",

        // backgroundColor: "#4e7ca1",
        flex: 60,

        alignContent: "center",
        justifyContent: "center",
        display: "flex",
    },
    expBar: {

        // backgroundColor: "#144a74",
        flex: 10,

        alignContent: "center",
        justifyContent: "center",
        display: "flex",
    },
    itemBox: {
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",

        margin: 5,

        width: 90,
        height: 98,

        opacity: 0.8,
        flex: 1,

    },




    bottom: {
        flexDirection: "row",
        backgroundColor: "#8b7979",
        flex: 10,
        resizeMode: "center",
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,

        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: "#9d9595",
        borderBottomColor: "#444141"
    },


    selectionButton: {
        flex: 1,

        width: "23%",
        height: "23%",
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",

        margin: 2,
        // backgroundColor: "black",

        // borderRadius: 20,
        height: "100%",


    },

    
});

const styles = StyleSheet.create({
    img: {
		height: '70%',
		width: '70%',
		resizeMode: "contain",
		top: -10,
        marginLeft: 10,

	},
});