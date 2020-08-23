import { createStackNavigator } from "react-navigation-stack";
import HomePage from '../screens/home';
import Reviews from '../screens/reviewDetails';
import Header from '../shared/Header';
import React from 'react';

// Screens object tells the navigator what screens are used in app
const screens = {
    AppHome: {
        // screen property sets the component for the specific screen
        screen: HomePage,
        // navigationOptions is different options for the screen
        // having navigationOptions return a function allows us to access navigation option destructured as a prop
        navigationOptions: ({ navigation }) => {
            return {
                // title is the title of the header of the screen
                // headerTitle returns a component instead of a string like title property does
                headerTitle: () => <Header title='Anime Titles' navigation={navigation} image={image} icon />
            }
        }
    },
    ReviewDetails: {
        screen: Reviews,
        navigationOptions: ({ navigation }) => {
            // title is the title of the header of the screen
            return {
                headerTitle: () => <Header title='Review Details' navigation={navigation} image={image} icon={false} />
            }
        }
    },
}

const image = require('../assets/images/otaku.jpg');

// createStackNavigator() lets us navigate between screens
// second parameter to createStackNavigator() lets us define default options for all navigation screens
// default options are overwritten if it is given in screen object's navigationOptions object
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#359bbd',
            height: 80
        }
    }
});

// app container that returns container we can render to app.js that has information about navigation stack
// allows you to navigate between different screens now
export default HomeStack;