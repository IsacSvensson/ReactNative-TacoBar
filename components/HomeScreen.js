import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import getCounter from './Counter';
import CounterView from './CounterView';

const HomeScreen = ({navigation}) => {
    const counter = getCounter()

    const onPressHandlerMenu = () => {
        counter.increase()
        navigation.navigate('Menu')
    };
    const onPressHandlerContact = () => {
        counter.increase()
        navigation.navigate('Contact')
    };

    return (<View style={styles.body}>
        <View style={styles.head}>
            <Text style={styles.text}>¡The Taco Bar!</Text>
        </View>
        <View style={styles.image_container}>
            <Image 
                source={require("../assets/taco.jpg")}
                style={styles.image}
            />
            <View style={styles.descr_container}>
                <Text style={styles.descr}>Welcome to the best taco bar in the parkinglot of Target - Conway, Little Rock, AR</Text>
            </View>
                <CounterView counter={counter}/>
            <View style={styles.button_container}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={onPressHandlerMenu}>
                    <Text style={styles.button_text}>Menu</Text>
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

export default HomeScreen;