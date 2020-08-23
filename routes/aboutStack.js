import { createStackNavigator } from "react-navigation-stack";
import AboutPage from '../screens/about';
import Header from '../shared/Header';
import React from 'react'

// Screens object tells the navigator what screens are used in app
const screens = {
    About: {
        // screen property sets the component for the specific screen
        screen: AboutPage,
        // navigationOptions is different options for the screen
        navigationOptions: ({ navigation }) => {
            return {
                // title is the title of the header of the screen
                headerTitle: () => <Header title='About Page' navigation={navigation} icon image={image} />
            }
        }
    }
}

const image = require('../assets/images/otaku.jpg');

// createStackNavigator() lets us navigate between screens
// second parameter to createStackNavigator() lets us define default options for all navigation screens
// default options are overwritten if it is given in screen object's navigationOptions object
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#359bbd',
            height: 80
        }
    }
});

export default AboutStack;