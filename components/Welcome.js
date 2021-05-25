import React from "react";

import { Button, Text, View, StyleSheet } from "react-native";

function Welcome() {
	return (
		<View>
			<Button title="Start Day" color="#41436A" style={{ bottom: 50 }} />
		</View>
	);
}

const styles = StyleSheet.create({
	formRow: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		flexDirection: "row",
		margin: 20,
		marginTop: 50,
	},
	button: {
		width: 110,
		height: 41,
		left: 126,
		top: 351,
		backgroundColor: "#41436A",
	},
});

export default Welcome;
