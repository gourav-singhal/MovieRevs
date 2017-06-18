import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity
} from 'react-native';

import styles from './style';

const Button = ({onSubmit}) => {
    return(
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonView} onPress={onSubmit}>
                         <Text style={styles.buttonText}>{'LOGIN'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
