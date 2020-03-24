import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput,Button, TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import * as firebase from 'firebase'

export default function Register({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const OnSignUp = () => {
        if (password !== passwordConfirm) {
            Alert.alert('Passwords do not match')
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {

            }, (error) => {

                if (email == '' && password == '' && passwordConfirm == '') {
                    Alert.alert('ERROR', 'invalid credential!', [
                        { text: 'DISSMIS' }
                    ]);
                } else {
                    if (error.message == 'The email address is already in use by another account.') {
                        Alert.alert('auth/email-already-in-use', error.message, [
                            { text: 'DISMISS' }
                        ])
                    }else if (error.message == 'The email address is badly formatted.') {
                        Alert.alert('auth/invalid-email', error.message,
                            [{ text: 'Dismiss' }]);
                    } else {
                        Alert.alert('auth/network-request-failed', error.message, [
                            { text: 'DISMISS' }
                        ])
                    }
                }
            })
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
        <View style={styles.container}>
            
              

                <TextInput style={styles.input} placeholder="Your email"
                    value={email} onChangeText={(text) => setEmail(text)} underlineColorAndroid={'transparent'} />
                <TextInput style={styles.input} placeholder="Your password"
                    value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} underlineColorAndroid={'transparent'} />
                <TextInput style={styles.input} placeholder="Password confirm"
                    value={passwordConfirm} onChangeText={(text) => setPasswordConfirm(text)} secureTextEntry={true} underlineColorAndroid={'transparent'} />
                <TouchableOpacity  onPress={() => OnSignUp()}>
                <Button  title='SignUp' color='coral' />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('ForgetPassword')}>
                    <Text >Forget Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text >already have an account</Text>
                </TouchableOpacity>

    
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#eee'
    },
    header:{
        height: 80,
        paddingTop:38,
        backgroundColor:'coral'
    },
    titleText:{
        fontSize:10,
        color:'#333'
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,
    },
    input: {
        
        height:40,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    
    },
    form :{
        
      marginTop :130,
      
    },
    forget:{
        marginLeft:133,
        marginTop:20
    },
    signup:{
        marginLeft:120,
    marginTop:60
    },
    sign:{
        marginTop:130
    },
    forgetpass:{
        
    }
   
});
