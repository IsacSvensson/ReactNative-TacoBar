/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import MenuScreen from './components/MenuScreen';
import ContactScreen from './components/ContactScreen';

const App = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                header: () => null
            }}>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='Menu' component={MenuScreen}/>
                <Stack.Screen name='Contact' component={ContactScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
