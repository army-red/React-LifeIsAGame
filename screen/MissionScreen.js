import React, { useEffect, useState } from "react";
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
import ScrollItem from "./MissionScreenItem/ScrollItem";




export default function MissionScreen() {
	// 任务数据
	const [commonAmount, changeCommonAmount] = useState(localStorage.getItem("commonAmount"));
	// let moneyIn = localStorage.getItem("moneyIn");
	const [importantAmount, changeImportantAmount] = useState(localStorage.getItem("importantAmount"));
	// let moneyOut = localStorage.getItem("moneyOut");
	const [solvedAmount, changeSolvedAmount] = useState(localStorage.getItem("solvedAmount"));

	// 是普通任务还是紧急任务
	const [isCommon, setState] = useState(true);
	const toggleCommon = () => setState(previousState => !previousState);

	// 任务内容
	const [textInfo, onChangeTextInfo] = React.useState('');

	

	

	// 累加scrollView显示组件
	const [item, setCount] = useState(null);
	//scrollItem(true, textInfo)

	const getNewItem = (getIsCommon, getText, func) => {
		return (
			<ScrollItem style_co_im={getIsCommon} text={getText} func={func}></ScrollItem>
		)
	};

	const onPress = () => {

		console.log("=========MissionScreen onPress()=========");
		if(isCommon){
			let countCommon = parseFloat(commonAmount) + 1;
			changeCommonAmount(countCommon);
			localStorage.setItem("commonAmount",countCommon);


			console.log("commonAmount: " + commonAmount + " importantAmount: " + importantAmount + " solvedAmount: " + solvedAmount + " countCommon: " + countCommon);
		}else{
			let countImportant = parseFloat(importantAmount) + 1;
			changeImportantAmount(countImportant);
			localStorage.setItem("importantAmount",countImportant);


			console.log("commonAmount: " + commonAmount + " importantAmount: " + importantAmount + " solvedAmount: " + solvedAmount + " countImportant: " + countImportant);
		}
		// let newItem = getNewItem(isCommon,textInfo);
		// let change = <View>{newItem}{item}</View>;
		setCount(
		<View>
			{
				getNewItem(isCommon,textInfo,console.log("add")  )
			}
			{item}
		</View>)

		console.log("===================================================");
	};

	const refresh = () => {
		console.log("=========MissionScreen refresh()=========");
		
		// changeCommonAmount(localStorage.getItem("countAmount"));
		// changeImportantAmount(localStorage.getItem("importantAmount"));
		changeSolvedAmount(localStorage.getItem("solvedAmount"));

		console.log("commonAmount: " + localStorage.getItem("commonAmount") + " importantAmount: " + localStorage.getItem("importantAmount") + " solvedAmount: " + localStorage.getItem("solvedAmount"));
		console.log("==========================================");

		
	};

	return (
		<View style={{
			width: "100%",
			height: "100%",
			flexDirection: "column",

		}}>
			<View style={styles.top}></View>

			<ImageBackground style={styles.backGround}>

				<TouchableOpacity
					activeOpacity={0.8}
					onPress={refresh}
					style={{
						width: "100%",
						flex: 1,
						flexDirection: "row",
						backgroundColor: "#983680",

						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20,


						// marginLeft: 10,
						// marginRight: 10,

						alignSelf: "center",
					}}

				>
					<View
						style={{
							flex: 1,
							alignItems: "center",

						}}
					>
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 25 }}>Common</Text>
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 35, lineHeight: 70 }}>{commonAmount}</Text>
					</View>

					<View
						style={{
							flex: 1,
							alignItems: "center",

						}}
					>
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 25 }}>Important</Text>
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 35, lineHeight: 70 }}>{importantAmount}</Text>

					</View>

					<View
						style={{
							flex: 1,
							alignItems: "center",

						}}
					>
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 25 }}>Finish</Text>
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 35, lineHeight: 70 }}>{solvedAmount}</Text>

					</View>
				</TouchableOpacity>
				<View
					style={{
						width: "100%",
						flex: 5,
						// backgroundColor: "yellow",

					}}
				>
					<ScrollView
						style={{
							height: "100%",
							width: "90%",

							backgroundColor: "#2b1216",

							margin: 10,
							marginBottom: 10,
							padding: 10,


							alignSelf: "center",
							// alignItems: "center",

							borderRadius: 40,
							elevation: 8,
						}}
					>
						{/* <ScrollItem></ScrollItem> */}

						{item}



					</ScrollView>
					


					<View style={{
						height: "10%",
						width: "90%",
						backgroundColor: isCommon ?"#f0a1a8":"#c02c38",

						borderTopLeftRadius: 40,
						borderTopRightRadius: 40,

						alignSelf: "center",

						marginLeft: 10,
						marginRight: 10,

						flexDirection:"row",

					}}>
						

						<Text
							style={{
								width: "15%",
								alignSelf: "center",
								marginLeft: 20,
								fontFamily: "ThaleahFat",
								color: "white",
								fontSize: 30,
							}}
						>
							{isCommon?"Com":"EMG"}
						</Text>

						<Switch
							trackColor={{ false:"#f0a1a8"  , true: "#c02c38"}}
							thumbColor={isCommon ? "white" : "white"}

							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleCommon}
							value={isCommon}
							style={{
								width: "15%",
								marginLeft: 5,
								marginTop: 5,

							}}
						>

						</Switch>
						<Image
							source={require("../assets/images/x_nav_chanpinyufuwu.png")}
							style={{
								width: 30,
								height: 30,
								alignSelf: "center",

							}}
						>

						</Image>
						<TextInput
							style={{
								width: "40%",
								height: "80%",
								backgroundColor: "white",

								marginTop: 5,
								marginLeft: 5,
								borderRadius: 20,
								padding: 10,

								color: "black",
								fontFamily: "IPix",
								fontSize: 15,

							}}
							onChangeText={text => onChangeTextInfo(text)}
							value={textInfo}
						>

						</TextInput>

						

					</View>


					<TouchableOpacity

						activeOpacity={0.5}
						style={{
							height: 60,
							width: 60,
							alignItems: "center",


							borderRadius: 30,

							backgroundColor: "#813c85",
							position: "absolute",
							right: 8,
							bottom: 8,

							elevation: 10,
						}}
						onPress={onPress}
					>
						<Image
							source={require('../assets/images/add.png')}
							style={{
								height: 40,
								width: 40,

								margin: 10,
							}}
						>

						</Image>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>


	);
}

const styles = StyleSheet.create({

	top: {
		flexDirection: "row",
		backgroundColor: "#82111f",
		// backgroundColor:"black",
		flex: 3,

		borderBottomWidth: 5,
		borderBottomColor: "#82202b",
		// opacity: 0.8,
	},
	backGround: {
		flex: 90,
		backgroundColor: "#82111f",
	},
});


