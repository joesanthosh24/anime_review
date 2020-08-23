import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack'
import AboutStack from './aboutStack'

// createDrawerNavigator() takes in objects with screen property
const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    }
});

// Export the drawer to the AppContainer
export default createAppContainer(DrawerNavigator);