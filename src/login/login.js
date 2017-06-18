import React, { PropTypes, Component } from 'react';
import {
    View,
    TouchableHighLight,
    Text
} from 'react-native';

import Input from '../components/input';
import Button from '../components/button';
import Link from '../components/link';
import FloatingLabel from '../components/floating';
import styles from './style';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.headerContainer}>
                        
                        <Text style={styles.headerText}>
                            Log Into Your Account
                        </Text>

                        <FloatingLabel 
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            underlineColorAndroid={'transparent'}
                            style={styles.formInput}
                            onChangeText={this.onChangeName}
                            value={this.state.name}
                        >
                            Name
                        </FloatingLabel>

                        <FloatingLabel 
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            underlineColorAndroid={'transparent'}
                            secureTextEntry={true}
                            style={styles.formInput}
                            onChangeText={this.onChangePassword}
                            value={this.state.password}
                        >
                            Password
                        </FloatingLabel>
    
                        <View style={styles.buttonContainer}>
                            <Button onSubmit={this.onSubmit}/>
                        </View>

                        <View>
                            <Link 
                                onPress={this.onPress}
                                linkText={'Reset your password'}
                            />
                        </View>

                    </View>

                </View>
            </View>
        );
    }

    onChangeName(text) {
        this.setState({
            name: text
        })
    }

    onChangePassword(text) {
        this.setState({
            password: text
        })
    }

    onSubmit() {
        console.log('pressed');
    }
}

export default Login;