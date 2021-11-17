import { StatusBar } from "expo-status-bar";
import React from "react";
import useCachedResources from "./assets/hooks/useCachedResources";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./assets/screens/root/Home";
import Feedback from "./assets/screens/root/Feedback";
import Faqs from "./assets/screens/root/Faqs";
import About from "./assets/screens/root/About";
import Subtopics from "./assets/screens/root/Subtopics";
import IntroModal from "./assets/screens/Modal/IntroModal";
import SourceModal from "./assets/screens/Modal/SourceModal";
import Lesson from "./assets/screens/root/Lesson";
import { Modal, View } from "react-native";
import { RootStackParamList } from "./types";

export default function App() {
	const isLoadingComplete = useCachedResources();
	const RootStack = createNativeStackNavigator<RootStackParamList>();
	const Drawer = createDrawerNavigator();

	function Root() {
		return (
			<RootStack.Navigator
				initialRouteName="Root"
				screenOptions={() => {
					return {
						gestureEnabled: true,
						cardOverlayEnabled: true,
						...TransitionPresets.ModalPresentationIOS,
					};
				}}
			>
				<RootStack.Screen
					name="Modal"
					options={{ headerShown: false, presentation: "modal" }}
					component={IntroModal}
				/>
				<RootStack.Screen
					name="Root"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<RootStack.Screen
					name="Lesson"
					component={Lesson}
					options={{
						headerShown: false,
					}}
				/>
				<RootStack.Screen
					name="SourceModal"
					options={{ headerShown: false,presentation:'modal'}}
					component={SourceModal}
				/>
			</RootStack.Navigator>
		);
	}

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<NavigationContainer>
					<Drawer.Navigator
						initialRouteName="Root"
						screenOptions={{ headerShown: false }}
					>
						<Drawer.Screen name="Home" component={Root} />
						<Drawer.Screen name="Feedback" component={Feedback} />
						<Drawer.Screen name="FAQs" component={Faqs} />
						<Drawer.Screen name="About" component={About} />
					</Drawer.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		);
	}
}
