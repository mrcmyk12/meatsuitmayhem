import React, { Component } from "react";
import Home from "./HomeComponent";
import Workout from "./WorkoutComponent";
import Meal from "./MealComponent";
import Weight from "./WeightComponent";
import {
	View,
	Platform,
	StyleSheet,
	Text,
	ScrollView,
	Image
} from "react-native";
import {
	fetchWorkouts,
	fetchMeals,
	fetchMorningWeight,
	fetchNightWeight,
	fetchSleep
} from "./redux/ActionCreators";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import SafeAreaView from "react-native-safe-area-view";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

const mapDispatchToProps = {
	fetchWorkouts,
	fetchMeals,
	fetchMorningWeight,
	fetchNightWeight,
	fetchSleep
};

const WorkoutNavigator = createStackNavigator({
	Workout: {
		screen: Workout,
		navigationOptions: ({ navigation }) => ({
			headerLeft: (
				<Icon
					name="bolt"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
});

const HomeNavigator = createStackNavigator(
	{
		Home: { screen: Home }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: "#5637dd"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff"
			},
			headerLeft: (
				<Icon
					name="home"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
);

const MealNavigator = createStackNavigator(
	{
		Meal: { screen: Meal }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: "#5637DD"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff"
			},
			headerLeft: (
				<Icon
					name="cutlery"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
);

const WeightNavigator = createStackNavigator(
	{
		Weight: { screen: Weight }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: "#5637DD"
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff"
			},
			headerLeft: (
				<Icon
					name="tachometer"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
);

const CustomDrawerContentComponent = (props) => (
	<ScrollView>
		<SafeAreaView
			style={styles.container}
			forceInset={{ top: "always", horizontal: "never" }}>
			<View style={styles.drawerHeader}>
				<View style={{ flex: 1 }}></View>
			</View>
		</SafeAreaView>
	</ScrollView>
);

const MainNavigator = createDrawerNavigator({
	Home: {
		screen: HomeNavigator,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Icon name="home" type="font-awesome" size={24} color={tintColor} />
			)
		}
	},
	Workout: {
		screen: WorkoutNavigator,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Icon name="bolt" type="font-awesome" size={24} color={tintColor} />
			)
		}
	},
	Meal: {
		screen: MealNavigator,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Icon
					name="cutlery"
					type="font-awesome"
					size={24}
					color={tintColor}
				/>
			)
		}
	},
	Weight: {
		screen: WeightNavigator,
		navigationOptions: {
			drawerIcon: ({ tintColor }) => (
				<Icon
					name="tachometer"
					type="font-awesome"
					size={24}
					color={tintColor}
				/>
			)
		}
	}
});

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
	componentDidMount() {
		this.props.fetchMeals();
		this.props.fetchMorningWeight();
		this.props.fetchNightWeight();
		this.props.fetchSleep();
		this.props.fetchWorkouts();
	}

	render() {
		return (
			<View
				style={{
					flex: 1,
					paddingTop:
						Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
				}}>
				<AppNavigator />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	drawerHeader: {
		backgroundColor: "#5637DD",
		height: 140,
		alightItems: "center",
		flex: 1,
		flexDirection: "row"
	},
	drawerHeaderText: {
		color: "#fff",
		fontSize: 24,
		fontWeight: "bold"
	},
	stackIcon: {
		marginLeft: 10,
		color: "#fff",
		fontSize: 24
	}
});

export default connect(null, mapDispatchToProps)(Main);
