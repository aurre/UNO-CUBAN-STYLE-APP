import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import App from './App';

// Pages
import Home from './pages/Home';
import GameSetUp from './pages/GameSetUp';

const Stack = createStackNavigator();

class Main extends Component {
    render() {
        return (
            <NavigationContainer>
                <App />
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: 'Welcome to play Cuban Style UNO!' }}
                    />
                    <Stack.Screen
                        name="GameSetUp"
                        component={GameSetUp}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main