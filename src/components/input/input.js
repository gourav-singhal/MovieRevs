import React, { Component } from 'react';
import {
    View,
    TextInput
} from 'react-native';
import styles from './styles';

const Input = ({onChangeText, value, placeholder}) => {
    return (
        <TextInput 
                style={styles.input}
                underlineColorAndroid={'transparent'}
                onChangeText={onChangeText}
                value={value}
                autoCapitalize={'none'}
                autoCorrect={false}
                placeholder={placeholder}
                placeholderTextColor={'#8A2BE2'}
            />
    );
    
}

export default Input;