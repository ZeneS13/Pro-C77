import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import ExchangeAnimation from '../components/ExchangeAnimation';

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            emailId: '',
            password: ''
        }
    }

    userLogin = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(() => {
            return (
                Alert.alert('Successfuly Logged in')
            );
        }).catch((error) => {
            var errorMessage = error.message;

            return Alert.alert(errorMessage);
        });
    }

    userSignUp = (emailId, password) => {
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then(() => {
            return (
                Alert.alert('You Successfully Signed up')
            );
        }).catch((error) => {
            var errorMessage = error.message;

            return Alert.alert(errorMessage);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <ExchangeAnimation />
                    <Text style={styles.title}>Barter</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TextInput style={styles.input} keyboardType="email-address" onChangeText={text => this.setState({emailId: text})} placeholder="abc@example.com" />
                    <TextInput style={styles.input} secureTextEntry={true} onChangeText={text => this.setState({password: text})} placeholder="Enter Password" />

                    <TouchableOpacity
                        onPress={() => {this.userLogin(this.state.emailId, this.state.password)}}
                        style={[styles.button, {marginBottom: 20, marginTop: 20}]}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {this.userSignUp(this.state.emailId, this.state.password)}}
                        style={[styles.button, {marginBottom: 20, marginTop: 20}]}
                    >
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: 'black',
        fontSize: 20,
        padding: 10,
        margin: 10,
        color: '#CD895A'
    },
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#ff9800',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16
    },
    buttonText: {
        color: '#ffff',
        fontWeight: '200',
        fontSize: 20
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#F2D3A5'
    },
    title: {
        fontSize: 50,
        fontWeight: '300',
        paddingBottom: 30,
        paddingTop: 10,
        color: '#F78D60'
    }
});