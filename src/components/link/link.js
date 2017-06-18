import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from './style';

const Link = ({linkText, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text 
                style={styles.text}
                >{linkText}</Text>
        </TouchableOpacity>
    );
    
}

export default Link;