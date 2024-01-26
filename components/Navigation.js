import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import Directions from "../screens/Directions";

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="Directions" component={Directions} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
