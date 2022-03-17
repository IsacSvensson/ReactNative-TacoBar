
import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
import styles from './styles';
import getCounter from './Counter';

const MenuScreen = ({navigation}) => {
    const counter = getCounter()

    const onPressHandlerHome = () => {
        counter.increase()
        navigation.navigate('Home')
    };
    const onPressHandlerContact = () => {
        counter.increase()
        navigation.navigate('Contact')
    };

    return (<View style={styles.body}>
        <View style={styles.head}>
            <Text style={styles.text}>¡Menu!</Text>
            
        </View>
        <View style={styles.image_container}>
            <Text style={styles.menu_item}>
                Taco                                           $2
            </Text>
            <Text style={styles.menu_item}>
                Loser Taco (Taco Sin Carne) $2
            </Text>
            <View style={styles.button_container}>
            <TouchableOpacity 
                    style={styles.button} 
                    onPress={onPressHandlerHome}>
                    <Text style={styles.button_text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={onPressHandlerContact}>
                    <Text style={styles.button_text}>Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>)
}

export default MenuScreen;