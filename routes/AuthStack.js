import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../components/Home'
const screens = {
    Hello: {
        screen: Home,
    }
}

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);