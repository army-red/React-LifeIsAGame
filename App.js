import * as React from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import localStorage from "localStorage";

import useCachedResources from './hooks/useCachedResources';
import dataHandler from './dataHandler';

import HomeScreen from './screen/HomeScreen';
import BillScreen from './screen/BillScreen';
import MissionScreen from './screen/MissionScreen';
import ShopScreen from './screen/ShopScreen';
import SettingsScreen from './screen/SettingsScreen';



const Tab = createBottomTabNavigator();

// const isLoadingComplete = true;
export default function App() {
	
	const isLoadingComplete = useCachedResources();
	const isLoaded = dataHandler();
	const countMessage = localStorage.getItem("countMessage");
	// console.log(countMessage);
	// console.log(countMessage);


	if (!isLoadingComplete || !isLoaded) {
		return (<Text>Not Loaded!</Text>);
	} else {
		
		return (
			
			<NavigationContainer>

				<Tab.Navigator
					initialRouteName="Home"
					backBehavior="history"
					adaptive={false}
					// showLabel={false}
					
					tabBarOptions={{ 
						// inactiveBackgroundColor: "#c45a65",
						activeTintColor: "white", 
						inactiveTintColor: "black", 
						activeBackgroundColor: "#c45a65",
						inactiveBackgroundColor: "#4c1f24",
						
					}}
				>
					
					<Tab.Screen 
						name="Home" 
						component={HomeScreen} 
						options={{
							
							// tabBarBadge: countMessage,
							tabBarIcon : ({}) => <Image 
								source={require("./assets/images/x_nav_chanpinyufuwu.png")} 
								style={{
									width: 20,
									height: 20, 
									
								}}
							/>,
							tabBarLabel : ({focused}) => <Text 
								style={{
									fontFamily: 'ThaleahFat', 
									fontStyle: 'normal', 
									fontSize: 20, 
									color: {focused} ? "white" : "gray",
									// backgroundColor: "green",
								}}
							>
								Home
							</Text>,
							

						}}
					/>
					<Tab.Screen 
						name="Bill" 
						component={BillScreen} 
						options={{

							// tabBarBadge: "99+",
							tabBarIcon : () => <Image 
								source={require("./assets/images/x_nav_xiangmuliebiao.png")} 
								style={{
									width: 20,
									height: 20
								}}
							/>,
							tabBarLabel : () => <Text 
							style={{
								fontFamily: 'ThaleahFat', 
								fontStyle: 'normal', 
								fontSize: 20, 
								color: 'white'
								}}
							>
								Bill
							</Text>,
							
						}}
					/>
					<Tab.Screen 
						name="Mission" 
						component={MissionScreen} 
						options={{

							// tabBarBadge: countMessage,
							tabBarIcon : () => <Image 
								source={require("./assets/images/x_liebiao.png")} style={{
									width: 20,
									height: 20
								}}
							/>,
							tabBarLabel : () => <Text style={{
								fontFamily: 'ThaleahFat', 
								fontStyle: 'normal', 
								fontSize: 20, 
								color: 'white'
								}}
							>
								Mission
							</Text>,
							
						}}
					/>
					<Tab.Screen 
						name="Shop" 
						component={ShopScreen} 
						options={{

							// tabBarBadge: "99+",
							tabBarIcon : () => <Image 
								source={require("./assets/images/x_jiage.png")} 
								style={{
									width: 20,
									height: 20
								}}
							/>,
							tabBarLabel : () => <Text 
								style={{
									fontFamily: 'ThaleahFat', 
									fontStyle: 'normal', 
									fontSize: 20, 
									color: 'white'
								}}
							>
								Shop
							</Text>,
							
						}}
					/>
					<Tab.Screen 
						name="Settings" 
						component={SettingsScreen} 
						options={{

							// tabBarBadge: "99+",
							tabBarIcon : () => <Image 
								source={require("./assets/images/x_ziyuan.png")} style={{
									width: 20,
									height: 20
								}}
							/>,
							tabBarLabel : () => <Text 
								style={{
									fontFamily: 'ThaleahFat', 
									fontStyle: 'normal', 
									fontSize: 20, 
									color: 'white'
								}}
							>
								Settings
							</Text>,
							
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		);
	}

}

//main color
//#4c1f24
//#82202b
//#82111f
//#ef475d
//#4d1018
