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
	Linking,

} from 'react-native';
import localStorage from "localStorage";
import moment from 'moment';
// import dataHandler from "../dataHandler";

export default function SettingsScreen() {
	let { width, height } = Dimensions.get('window');
	const earnWH = () => {
		console.log("=========SettingsScreen earnWH()=========");

		console.log('通过Dimensions得到的宽度：' + width);
		console.log('通过Dimensions得到的高度：' + height);
		console.log("==========================================");
		Alert.alert("=====================\n" + "width: " + width + " height: " + height + "\n" + "=====================");
	};

	const getInfo = () => {
		Alert.alert("author: @army_red © 2021 - Life Is A Game\nversion 1.0.0 - main frame");
	};
	const reset = () => {
		localStorage.setItem("moneyIn", 0);
    	localStorage.setItem("moneyOut", 0);
    	localStorage.setItem("moneySurplus", 0);

		localStorage.setItem("commonAmount", 0);
    	localStorage.setItem("importantAmount", 0);
    	localStorage.setItem("solvedAmount", 0);

		var sixBoxUrl = [
			40,40,40, 40,40,40,
		];
		localStorage.setItem("sixBoxUrl",sixBoxUrl);


	};
	const [systemTime, setTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
	const timing = () => {
		setTime(moment().format('YYYY-MM-DD HH:mm:ss'));
	};
	setInterval(timing, 1000);
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
						width: '80%',
						height: '95%',
						backgroundColor: '#e6d2d5',

						borderRadius: 30,
						flexDirection: 'column',

					}}

				>
					<View
						style={styles.inline}
					>
						<Text
							style={styles.common_font}
						>
							Earn screen size:
						</Text>
						<TouchableOpacity
							onPress={earnWH}
							style={styles.common_button}
						>
							<Image

								source={require('../assets/images/settings/x_quanping.png')}
								style={{
									width: '60%',
									height: '60%',
									alignSelf: "center",
								}}
							>

							</Image>
						</TouchableOpacity>
					</View>


					<View
						style={styles.inline}
					>
						<Text
							style={styles.common_font}
						>
							Earn system date: {systemTime}
						</Text>

						<TouchableOpacity
							onPress={timing}
							style={styles.common_button}
						>
							<Image

								source={require('../assets/images/settings/x_riqi.png')}
								style={{
									width: '60%',
									height: '60%',
									alignSelf: "center",
								}}
							>

							</Image>
						</TouchableOpacity>
					</View>



					<View
						style={styles.inline}
					>
						<Text
							style={styles.common_font}
						>
							Visit my github:
						</Text>
						<TouchableOpacity
							onPress={() => {Linking.openURL("https://github.com/army-red")}}
							style={styles.common_button}
						>
							<Image

								source={require('../assets/images/settings/GitHub.png')}
								style={{
									width: '60%',
									height: '60%',
									alignSelf: "center",
								}}
							>

							</Image>
						</TouchableOpacity>
						
					</View>
					

					<View
						style={styles.inline}
					>
						<Text
							style={styles.common_font}
						>
							Visit my bilibili:
						</Text>
						<TouchableOpacity
							onPress={() => {Linking.openURL("https://space.bilibili.com/5058066")}}
							style={styles.common_button}
						>
							<Image

								source={require('../assets/images/settings/bilibili-line.png')}
								style={{
									width: '60%',
									height: '60%',
									alignSelf: "center",
								}}
							>

							</Image>
						</TouchableOpacity>
						
					</View>
					
					<View
						style={styles.inline}
					>
						<Text
							style={styles.common_font}
						>
							informations:
						</Text>
						<TouchableOpacity
							onPress={getInfo}
							style={styles.common_button}
						>
							<Image

								source={require('../assets/images/settings/x_wenhao.png')}
								style={{
									width: '60%',
									height: '60%',
									alignSelf: "center",
								}}
							>

							</Image>
						</TouchableOpacity>
						
					</View>


					<View
						style={styles.inline}
					>
						<Text
							style={styles.important_font}
						>
							Clear cache:
						</Text>
						<TouchableOpacity
							onPress={reset}
							style={styles.important_button}
						>
							<Image

								source={require('../assets/images/settings/x_bianji.png')}
								style={{
									width: '60%',
									height: '60%',
									alignSelf: "center",
								}}
							>

							</Image>
						</TouchableOpacity>
						
					</View>

				</View>




				{/* <TouchableOpacity

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
				</TouchableOpacity> */}
			</ImageBackground>
		</View>

	);
}

const styles = StyleSheet.create({

	top: {
		flexDirection: "row",
		backgroundColor: "#4d1018",
		// backgroundColor:"black",
		flex: 3,

		borderBottomWidth: 5,
		borderBottomColor: "#82202b",
		// opacity: 0.8,
	},
	backGround: {
		flex: 90,
		backgroundColor: "#4d1018",
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',

	},


	inline: {
		height: 80,
		width: '100%',
		// backgroundColor: 'black',
		flexDirection: 'row',
		justifyContent: 'center',

	},

	common_font: {
		marginTop: 30,
		marginLeft: 10,
		fontFamily: 'ThaleahFat',
		fontSize: 24,
		color: '#2b1216',
		width: '60%',

	},

	important_font: {
		marginTop: 30,
		marginLeft: 10,
		fontFamily: 'ThaleahFat',
		fontSize: 24,
		color: '#ee2746',
		width: '60%',

	},
	common_button: {
		marginTop: 10,
		marginLeft: 30,
		width: 60,
		height: 60,

		borderRadius: 15,

		backgroundColor: '#2b1216',

		justifyContent: 'center',
	},
	important_button: {
		marginTop: 10,
		marginLeft: 30,
		width: 60,
		height: 60,

		borderRadius: 15,

		backgroundColor: '#ee2746',

		justifyContent: 'center',
	},


});