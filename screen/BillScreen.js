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
	TextInput,
	Switch,
	

} from 'react-native';
// import ReactDOM from 'react-dom';
import localStorage from "localStorage";
import moment from 'moment';
// import { ScrollViewItem } from './bills/ScrollViewItem';


function scrollItem(style_in_out, money, date, tag) {



	return (
		<ScrollView
			horizontal={true}
			style={style_in_out ? theme.in : theme.out}
		>
			<Text
				style={{
					fontFamily: "ThaleahFat",
					fontSize: 40,
					lineHeight: 40,
					marginLeft: 10,

					color: "white",

				}}
			>
				{style_in_out?"IN":"OUT"} |
                    </Text>
			<Text
				style={{
					fontFamily: "ThaleahFat",
					fontSize: 40,
					lineHeight: 40,
					marginLeft: 10,

					color: "white",
				}}
			>
				{money} | {date} |
                    </Text>
			<Text
				style={{
					fontFamily: "IPix",
					fontSize: 20,
					lineHeight: 40,
					color: "white",
				}}
			>
				{tag}
			</Text>

		</ScrollView>
	);


}

// import ScrollViewScreen from "./bills/ScrollViewScreen";
export default function BillScreen() {
	
	let moneyInCache = ''; 
	moneyInCache = localStorage.getItem("moneyIn");
	let moneyOutCache = '';
	moneyOutCache = localStorage.getItem("moneyOut");
	let moneySurplusCache = '';
	moneySurplusCache = localStorage.getItem("moneySurplus");


	const [moneyIn, changeMoneyIn] = useState(moneyInCache);
	// let moneyIn = localStorage.getItem("moneyIn");
	const [moneyOut, changeMoneyOut] = useState(moneyOutCache);
	// let moneyOut = localStorage.getItem("moneyOut");
	const [moneySurplus, changeMoneySurplus] = useState(moneySurplusCache);
	// let moneySurplus = moneyIn - moneyOut;


	
	// 设置按钮状态，IN或者OUT
	const [isInState, setIsEnabled] = useState(false);
  	const toggleSwitch = () => setIsEnabled(previousState => !previousState);
	//  设置金钱
	const [moneyValue, onChangeMoneyInfo] = React.useState('');
	//  设置Tag
	const [tagValue, onChangeTagInfo] = React.useState('...');



	// 累加scrollView显示组件
	const [item, setCount] = useState(null);

	useEffect(() => {
		
		let number = 0;
		if(!isNaN(parseFloat(moneyValue))){
			number = parseFloat(moneyValue);
		}

		if(isInState){
			// moneyIn = ;
			let moneyChangeIn = parseFloat(moneyIn) + number;
			let moneyChangeSurplus = parseFloat(moneySurplus) + number;
			changeMoneyIn(moneyChangeIn);
			changeMoneySurplus(moneyChangeSurplus);
			localStorage.setItem("moneyIn",moneyChangeIn);
			localStorage.setItem("moneySurplus",moneyChangeSurplus);

			// console.log(moneySurplus + " " + moneyIn);
		}else{
			// moneyOut = ;
			let moneyChangeOut = parseFloat(moneyOut) + number;
			let moneyChangeSurplus = parseFloat(moneySurplus) - number;
			changeMoneyOut(moneyChangeOut);
			changeMoneySurplus(moneyChangeSurplus);
			localStorage.setItem("moneyOut",moneyChangeOut);
			localStorage.setItem("moneySurplus",moneyChangeSurplus);

			// console.log(moneySurplus + " " + moneyOut);
		}
		// moneySurplus = ;

		// localStorage.setItem("moneyIn",moneyIn);
		// localStorage.setItem("moneyOut",moneyOut);
		// localStorage.setItem("moneySurplus",moneySurplus);


		console.log("moneySurplus: " + localStorage.getItem("moneySurplus") + " moneyIn: " + localStorage.getItem("moneyIn") + " moneyOut: " + localStorage.getItem("moneyOut") + " number: " + number);
	}, [item]);
	//scrollItem(true ,moneyValue, moment().format('YYYY-MM-DD HH:mm'), tagValue)


	var onPress = () => {
		console.log("=========BillScreen onPress()=========");
		let newItem = scrollItem(isInState, moneyValue, moment().format('YYYY-MM-DD HH:mm'), tagValue);
		let change = <View>{newItem}{item}</View>;
		setCount(change);

		console.log("=========================================");

	};


	return (
		<View style={{
			width: "100%",
			height: "100%",
			flexDirection: "column",

		}}>
			<View style={styles.top}></View>

			<ImageBackground style={styles.backGround}>

				<View
					style={{
						width: "100%",
						flex: 1,
						flexDirection: "row",
						backgroundColor: (moneySurplus<=0)?"#5dbe8a":"#ed556a",

						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20,
						borderBottomWidth: 3,
						borderBottomColor: "#a61b29",

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
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 30 }}>In</Text>
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 35, lineHeight: 70 }}>{moneyIn}</Text>
					</View>

					<View
						style={{
							flex: 1,
							alignItems: "center",

						}}
					>
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 30 }}>Out</Text>
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 35, lineHeight: 70 }}>{moneyOut}</Text>

					</View>

					<View
						style={{
							flex: 1,
							alignItems: "center",

						}}
					>
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 30 }}>Surplus</Text>
						<Text style={{ color: "white", fontFamily: "ThaleahFat", fontSize: 35, lineHeight: 70 }}>{moneySurplus}</Text>

					</View>
				</View>
				<View
					style={{
						width: "100%",
						flex: 5,
						// backgroundColor: "yellow",

					}}
				>
					<ScrollView
						style={{
							height: "90%",
							width: "90%",

							backgroundColor: "white",

							margin: 10,
							marginBottom: 10,
							padding: 10,
							// paddingTop: 20,


							alignSelf: "center",
							// alignItems: "center",

							borderRadius: 40,
							elevation: 8,

						}}
					>


						{item}

					</ScrollView>
					
					<View style={{
						height: "10%",
						width: "90%",
						backgroundColor: isInState ?"#e3b4b8":"#9abeaf",

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
								fontSize: 40,
							}}
						>
							{isInState?"In":"Out"}
						</Text>

						<Switch
							trackColor={{ false:"#e3b4b8"  , true: "#9abeaf"}}
							thumbColor={isInState ? "white" : "white"}

							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isInState}
							style={{
								width: "15%",
								marginLeft: 5,
								marginTop: 5,

							}}
						>

						</Switch>
						<Image
							source={require("../assets/images/x_jiage.png")}
							style={{
								width: 30,
								height: 30,
								alignSelf: "center",

							}}
						>

						</Image>
						<TextInput
							style={{
								width: "15%",
								height: "80%",
								backgroundColor: "white",

								marginTop: 5,
								marginLeft: 5,
								borderRadius: 20,
								padding: 10,

								color: "black",
								fontFamily: "ThaleahFat",
								fontSize: 25,

							}}
							onChangeText={text => {onChangeMoneyInfo(text)}}
							value={moneyValue}
						>

						</TextInput>

						<Image
							source={require("../assets/images/x_caijia.png")}
							style={{
								width: 30,
								height: 30,
								alignSelf: "center",
								marginLeft: 10,

							}}
						>

						</Image>
						<TextInput
							style={{
								width: "20%",
								height: "80%",
								backgroundColor: "white",

								marginTop: 5,
								marginLeft: 5,
								borderRadius: 20,
								padding: 10,

								color: "black",
								fontFamily: "IPix",
								fontSize: 25,

							}}
							onChangeText={text => {onChangeTagInfo(text)}}
							value={tagValue}
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

							backgroundColor: "#a7535a",
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
		backgroundColor: "#82202b",
		// backgroundColor:"black",
		flex: 3,

		borderBottomWidth: 5,
		borderBottomColor: "#ef475d",
		// opacity: 0.8,
	},
	backGround: {
		flex: 90,
		backgroundColor: "#82202b",
	},
});


const theme = StyleSheet.create({
	in: {
		width: "95%",
		height: 60,
		backgroundColor: "#e3b4b8",
		borderRadius: 15,
		alignSelf: "center",

		marginTop: 10,
		marginBottom: 10,
		elevation: 5,
		flexDirection: "row",

		padding: 5,
	},

	out: {
		width: "95%",
		height: 60,
		backgroundColor: "#9abeaf",
		borderRadius: 15,
		alignSelf: "center",

		marginTop: 10,
		marginBottom: 10,
		elevation: 5,
		flexDirection: "row",

		padding: 5,
	}
});