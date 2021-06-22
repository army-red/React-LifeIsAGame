import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Image,
	Button,
	TouchableOpacity,
	Alert,
	ScrollView,
	Dimensions,

} from 'react-native';
import localStorage from "localStorage";

import Box from "./ShopScreenItem/Box";

let { width, height } = Dimensions.get('window');

export default function ShopScreen() {

	// var clickCount = 0;

	var checkBox = [
		{ id: 0, checked: false ,url: require("../assets/images/weapon/Aerial_Bane.png" )},
		{ id: 1, checked: false ,url: require("../assets/images/weapon/Amethyst_Staff.png" )},
		{ id: 2, checked: false ,url: require("../assets/images/weapon/Bee_Keeper.png" )},
		{ id: 3, checked: false ,url: require("../assets/images/weapon/Betsy_Wrath.png" )},
		{ id: 4, checked: false ,url: require("../assets/images/weapon/Book_of_Skulls.png" )},
		{ id: 5, checked: false ,url: require("../assets/images/weapon/Copper_Shortsword.png" )},
		{ id: 6, checked: false ,url: require("../assets/images/weapon/Daedalus_Stormbow.png" )},
		{ id: 7, checked: false ,url: require("../assets/images/weapon/Demon_Bow.png" )},
		{ id: 8, checked: false ,url: require("../assets/images/weapon/Demon_Scythe.png" )},
		{ id: 9, checked: false ,url: require("../assets/images/weapon/Frost_armor.png" )},
		
		{ id: 10, checked: false ,url: require("../assets/images/weapon/Golden_Shower.png" )},
		{ id: 11, checked: false ,url: require("../assets/images/weapon/Hallowed_armor.png" )},
		{ id: 12, checked: false ,url: require("../assets/images/weapon/Hellwing_Bow.png" )},
		{ id: 13, checked: false ,url: require("../assets/images/weapon/Influx_Waver.png" )},
		{ id: 14, checked: false ,url: require("../assets/images/weapon/Magic_Missile.png" )},
		{ id: 15, checked: false ,url: require("../assets/images/weapon/Magnet_Sphere.png" )},
		{ id: 16, checked: false ,url: require("../assets/images/weapon/Megashark.png" )},
		{ id: 17, checked: false ,url: require("../assets/images/weapon/Meowmere.png" )},
		{ id: 18, checked: false ,url: require("../assets/images/weapon/Minishark.png" )},
		{ id: 19, checked: false ,url: require("../assets/images/weapon/Musket.png" )},
		
		{ id: 20, checked: false ,url: require("../assets/images/weapon/Mythril_Repeater.png" )},
		{ id: 21, checked: false ,url: require("../assets/images/weapon/Necro_armor.png" )},
		{ id: 22, checked: false ,url: require("../assets/images/weapon/Obsidian_Swordfish.png" )},
		{ id: 23, checked: false ,url: require("../assets/images/weapon/Phantasm.png" )},
		{ id: 24, checked: false ,url: require("../assets/images/weapon/Rainbow_Rod.png" )},
		{ id: 25, checked: false ,url: require("../assets/images/weapon/Razorblade_Typhoon.png" )},
		{ id: 26, checked: false ,url: require("../assets/images/weapon/S.D.M.G..png" )},
		{ id: 27, checked: false ,url: require("../assets/images/weapon/Scarab_Bomb.png" )},
		{ id: 28, checked: false ,url: require("../assets/images/weapon/Sky_Fracture.png" )},
		{ id: 29, checked: false ,url:"../assets/images/weapon/Starfury.png"},
		
		{ id: 30, checked: false ,url: require("../assets/images/weapon/Terra_Blade.png" )},
		{ id: 31, checked: false ,url: require("../assets/images/weapon/Terraprisma.png" )},
		{ id: 32, checked: false ,url: require("../assets/images/weapon/Thorn_Chakram.png" )},
		{ id: 33, checked: false ,url: require("../assets/images/weapon/Thunder_Zapper.png" )},
		{ id: 34, checked: false ,url: require("../assets/images/weapon/Tsunami.png" )},
		{ id: 35, checked: false ,url: require("../assets/images/weapon/Venus_Magnum.png" )},
		{ id: 36, checked: false ,url: require("../assets/images/weapon/Vortex_armor.png" )},
		{ id: 37, checked: false ,url: require("../assets/images/weapon/Water_Bolt.png" )},
		{ id: 38, checked: false ,url: require("../assets/images/weapon/Zenith.png" )},
		{ id: 39, checked: false ,url: require("../assets/images/weapon/Phantasm.png" )},

		{ id: 40, checked: false ,url: require("../assets/images/weapon/empty.png" )},
	];

	const [box01, changeBox01] = useState(<Image style={styles.img}></Image>);
	const [box02, changeBox02] = useState(<Image style={styles.img}></Image>);
	const [box03, changeBox03] = useState(<Image style={styles.img}></Image>);
	const [box04, changeBox04] = useState(<Image style={styles.img}></Image>);
	const [box05, changeBox05] = useState(<Image style={styles.img}></Image>);
	const [box06, changeBox06] = useState(<Image style={styles.img}></Image>);


	const refresh = () => {
		changeMoney(localStorage.getItem("moneyIn"));
		// rematch();
	}
	
	const rematch = () => {
		changeBox01(box[0]);
		changeBox02(box[1]);
		changeBox03(box[2]);
		changeBox04(box[3]);
		changeBox05(box[4]);
		changeBox06(box[5]);
	}

	const [isSelect, toggleSelect] = useState(checkBox);
	// const [show, toggleShow] = useState(showText);
	const onPress = (i) => {

		console.log("=========ShopScreen onPress()=========");


		var change = isSelect;
		change[i].checked = !isSelect[i].checked;
		// change[i].show = change[i].checked?"√":"";

		toggleSelect(change);

		console.log("change num:" + i + " to " + change[i].checked);

		var count = 0;
		var box = [
			<Image style={styles.img}></Image>,
			<Image style={styles.img}></Image>,
			<Image style={styles.img}></Image>,

			<Image style={styles.img}></Image>,
			<Image style={styles.img}></Image>,
			<Image style={styles.img}></Image>,
		];

		var sixBoxUrl = [
			40,40,40, 40,40,40,
		];
		for (var i = 0; i < change.length; i++) {
			if (change[i].checked) {
				console.log("source link_url: " + change[i].url);
				box[count] = <Image source={change[i].url} style={styles.img}></Image>;
				sixBoxUrl[count] = change[i].id;
				count = count + 1;
				
				console.log("add id: " + change[i].id + " add sixBoxUrl: " + sixBoxUrl[count-1]);
			}
		}

		changeBox01(box[0]);
		changeBox02(box[1]);
		changeBox03(box[2]);
		changeBox04(box[3]);
		changeBox05(box[4]);
		changeBox06(box[5]);

		console.log(count + " item has select");

		

		localStorage.setItem("sixBoxUrl", sixBoxUrl);
		console.log("add to local storage sixBoxUrl: " + sixBoxUrl);

		refresh();
		// console.log("boxUrl: " + boxUrl);
		console.log("==========================================");
	};

	const [money, changeMoney] = useState(localStorage.getItem("moneyIn"));

	setInterval(refresh,1000);

	return (
		<View style={{
			width: "100%",
			height: "100%",
			flexDirection: "column",

		}}>
			<View style={styles.top}></View>

			<ImageBackground style={styles.backGround}>
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={refresh}
					style={{
						width: "100%",
						height: "25%",
						backgroundColor: "#73575c",
						flexDirection: "column",
						// paddingTop: 10,
						borderBottomLeftRadius: 40,
						borderBottomRightRadius: 40,

						elevation: 10,
					}}
				>
					<Text
						style={{
							fontFamily: "ThaleahFat",
							color: "white",
							fontSize: 24,
							marginLeft: 20,
							marginTop: 10,

						}}
					>
						Money: {money}
					</Text>

					<Text
						style={{
							fontFamily: "ThaleahFat",
							color: "white",
							fontSize: 24,
							marginLeft: 20,
							marginTop: 10,

						}}
					>
						Current Weapon:
					</Text>

					<View
						style={{
							flexDirection: "row",
							
						}}
					>
						<ImageBackground
							style={styles.text}
						>
							{box01}

						</ImageBackground>

						<ImageBackground
							style={styles.text}
						>
							{box02}

						</ImageBackground>

						<ImageBackground
							style={styles.text}
						>
							{box03}

						</ImageBackground>

						<ImageBackground
							style={styles.text}
						>
							{box04}

						</ImageBackground>

						<ImageBackground
							style={styles.text}
						>
							{box05}

						</ImageBackground>

						<ImageBackground
							style={styles.text}
						>
							{box06}

						</ImageBackground>
					</View>
				</TouchableOpacity>
				<ScrollView
					style={{
						width: "100%",
						height: "75%",
						// backgroundColor: "black",
						// flexDirection: "column",
						// justifyContent: "flex-start",
						paddingTop: 10,

					}}

				>

					{/* 一行 */}
					<View
						style={styles.lineBox}

					>


						<Box
							url={require("../assets/images/weapon/Aerial_Bane.png")}
							price={1200}
							method={onPress.bind(this, 0)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Amethyst_Staff.png")}
							price={600}
							method={onPress.bind(this, 1)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Bee_Keeper.png")}
							price={650}
							method={onPress.bind(this, 2)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Betsy_Wrath.png")}
							price={4000}
							method={onPress.bind(this, 3)}
						>

						</Box>

					</View>

					{/* ========================================================================== */}


					{/* ========================================================================== */}

					<View
						style={styles.lineBox}

					>


						<Box
							url={require("../assets/images/weapon/Book_of_Skulls.png")}
							price={1000}
							method={onPress.bind(this, 4)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Copper_Shortsword.png")}
							price={100}
							method={onPress.bind(this, 5)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Daedalus_Stormbow.png")}
							price={3020}
							method={onPress.bind(this, 6)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Demon_Bow.png")}
							price={2500}
							method={onPress.bind(this, 7)}
						>

						</Box>

					</View>

					{/* ========================================================================== */}


					{/* ========================================================================== */}
					<View
						style={styles.lineBox}

					>


						<Box
							url={require("../assets/images/weapon/Demon_Scythe.png")}
							price={2300}
							method={onPress.bind(this, 8)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Frost_armor.png")}
							price={6000}
							method={onPress.bind(this, 9)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Golden_Shower.png")}
							price={4000}
							method={onPress.bind(this, 10)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Hallowed_armor.png")}
							price={8500}
							method={onPress.bind(this, 11)}
						>

						</Box>

					</View>

					{/* ========================================================================== */}


					{/* ========================================================================== */}
					<View
						style={styles.lineBox}

					>


						<Box
							url={require("../assets/images/weapon/Hellwing_Bow.png")}
							price={350}
							method={onPress.bind(this, 12)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Influx_Waver.png")}
							price={4500}
							method={onPress.bind(this, 13)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Magic_Missile.png")}
							price={600}
							method={onPress.bind(this, 14)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Magnet_Sphere.png")}
							price={4200}
							method={onPress.bind(this, 15)}
						>

						</Box>

					</View>

					{/* ========================================================================== */}


					{/* ========================================================================== */}
					<View
						style={styles.lineBox}

					>


						<Box
							url={require("../assets/images/weapon/Megashark.png")}
							price={2300}
							method={onPress.bind(this, 16)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Meowmere.png")}
							price={8650}
							method={onPress.bind(this, 17)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Minishark.png")}
							price={1350}
							method={onPress.bind(this, 18)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Musket.png")}
							price={1200}
							method={onPress.bind(this, 19)}
						>

						</Box>

					</View>

					{/* ========================================================================== */}


					{/* ========================================================================== */}
					<View
						style={styles.lineBox}

					>


						<Box
							url={require("../assets/images/weapon/Mythril_Repeater.png")}
							price={2700}
							method={onPress.bind(this, 20)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Necro_armor.png")}
							price={5600}
							method={onPress.bind(this, 21)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Obsidian_Swordfish.png")}
							price={3400}
							method={onPress.bind(this, 22)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Phantasm.png")}
							price={4200}
							method={onPress.bind(this, 23)}
						>

						</Box>

					</View>

					{/* ========================================================================== */}


					{/* ========================================================================== */}

					<View
						style={styles.lineBox}

					>


						<Box
							url={require("../assets/images/weapon/Rainbow_Rod.png")}
							price={6600}
							method={onPress.bind(this, 24)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Razorblade_Typhoon.png")}
							price={5600}
							method={onPress.bind(this, 25)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/S.D.M.G..png")}
							price={8600}
							method={onPress.bind(this, 26)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Scarab_Bomb.png")}
							price={200}
							method={onPress.bind(this, 27)}
						>

						</Box>

					</View>

					{/* ========================================================================== */}


					{/* ========================================================================== */}


					<View
						style={styles.lineBox}

					>


						<Box
							url={require("../assets/images/weapon/Sky_Fracture.png")}
							price={2700}
							method={onPress.bind(this, 28)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Starfury.png")}
							price={1200}
							method={onPress.bind(this, 29)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Terra_Blade.png")}
							price={7050}
							method={onPress.bind(this, 30)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Terraprisma.png")}
							price={7500}
							method={onPress.bind(this, 31)}
						>

						</Box>

					</View>

					{/* ========================================================================== */}


					{/* ========================================================================== */}


					<View
						style={styles.lineBox}

					>


						<Box
							url={require("../assets/images/weapon/Thorn_Chakram.png")}
							price={2700}
							method={onPress.bind(this, 32)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Thunder_Zapper.png")}
							price={4000}
							method={onPress.bind(this, 33)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Tsunami.png")}
							price={5500}
							method={onPress.bind(this, 34)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Venus_Magnum.png")}
							price={4200}
							method={onPress.bind(this, 35)}
						>

						</Box>

					</View>

					{/* ========================================================================== */}


					{/* ========================================================================== */}


					<View
						style={styles.lineBox}

					>


						<Box
							url={require("../assets/images/weapon/Vortex_armor.png")}
							price={8900}
							method={onPress.bind(this, 36)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Water_Bolt.png")}
							price={400}
							method={onPress.bind(this, 37)}
						>

						</Box>

						<Box
							url={require("../assets/images/weapon/Zenith.png")}
							price={10000}
							method={onPress.bind(this, 38)}
						>

						</Box>

						{/* <Box
							// url={require("../assets/images/weapon/Phantasm.png")}
							price={0}
							method={onPress.bind(this, 39)}
						>

						</Box> */}

					</View>

					{/* ========================================================================== */}


					{/* ========================================================================== */}





				</ScrollView>
			</ImageBackground>
		</View>

	);
}

const styles = StyleSheet.create({

	top: {
		flexDirection: "row",
		backgroundColor: "#ef475d",
		// backgroundColor:"black",
		flex: 3,

		borderBottomWidth: 5,
		borderBottomColor: "#82202b",
		// opacity: 0.8,
	},
	backGround: {
		flex: 90,
		backgroundColor: "#ef475d",
	},

	box: {
		flex: 1,
		marginLeft: 5,
		// width: (width - 5) / 4 - 5,
		height: (width - 5) / 4 - 5,

		// borderWidth: 3,
		// borderColor: "white",
		borderRadius: 15,
		backgroundColor: "#cc163a",

		alignContent: "center",
		alignItems: "center",

		elevation: 10,
		shadowColor: "white",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 10,
	},

	lineBox: {
		flex: 1,
		flexDirection: "row",
		// backgroundColor: "white",
		borderRadius: 15,
		height: width / 4,
		marginTop: 5,
		// margin: 1,
	},

	img: {
		height: '70%',
		width: '70%',
		resizeMode: "contain",
		top: 5,
	},
	text: {
		marginLeft: 5,
		width: (width - 5) / 6 - 5,
		height: (width - 5) / 6 - 5,

		// borderWidth: 3,
		// borderColor: "white",
		borderRadius: 15,
		backgroundColor: "#2b1216",

		alignContent: "center",
		alignItems: "center",

		elevation: 10,
	},



});