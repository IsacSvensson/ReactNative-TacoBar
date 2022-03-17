
import React from 'react';
import {
    Text,
    View,
    Linking,
    TouchableOpacity,
  } from 'react-native';
import styles from './styles';
import getCounter from './Counter';

const ContactScreen = ({navigation}) => {
    const counter = getCounter()

    const onPressHandlerHome = () => {
        counter.increase()
        navigation.navigate('Home')
    };
    const onPressHandlerMenu = () => {
        counter.increase()
        navigation.navigate('Menu')
    };

    return (<View style={styles.body}>
        <View style={styles.head}>
            <Text style={styles.text}>¡Contact us!</Text>
        </View>
        <View style={styles.image_container}>
        <Text style={styles.links}
            onPress={() => Linking.openURL('tel:+1 555-8226-227')}>
            ¡Call me maybe!
        </Text>
        <Text style={styles.links}
            onPress={() => Linking.openURL('mailto:jose@thetacobar.com')}>
            ¡Mail me baby!
        </Text>
            <View style={styles.button_container}>
            <TouchableOpacity 
                    style={styles.button} 
                    onPress={onPressHandlerMenu}>
                    <Text style={styles.button_text}>Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={onPressHandlerHome}>
                    <Text style={styles.button_text}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>)
}


export default ContactScreen;