import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./components/MainComponent";
import { ConfigureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

const store = ConfigureStore();

export default function App() {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
}
