
import React from 'react';
import {
    Text
} from 'react-native';
import { observer } from "mobx-react"
import styles from "./styles"

const CountView = observer(({ counter }) => (
    <Text style={styles.counter}>During your visit you have clicked {counter.counter} buttons!</Text>
))

export default CountView;