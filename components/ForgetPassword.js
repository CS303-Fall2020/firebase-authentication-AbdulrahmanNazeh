import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput,Button, TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import * as firebase from "firebase";
export default function ForgetPassword({ navigation }) {
    const [email, setEmail] = useState('')
    const [reset, setReset] = useState(false)
    const OnRetrivePassword = () => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                setReset(true)

            }, (error) => {

                if (email == '') {
                    Alert.alert('ERROR', 'invalid credential!', [
                        { text: 'DISSMIS' }
                    ]);
                } else {
                    if (error.message == 'The email address is badly formatted.') {
                        Alert.alert('auth/invalid-email', error.message,
                            [{ text: 'Dismiss' }]);
                    } else if (error.message == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
                        Alert.alert('auth/user-not-found', error.message,
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
            <View style={styles.form}>
               <Text>Enter your Email</Text>


                <TextInput style={styles.input} placeholder="Your email"
                    value={email} onChangeText={(text) => setEmail(text)} underlineColorAndroid={'transparent'} />
                {reset ? <Text >Email was sent successfully. please follow instructions to reset your password.</Text> : console.log()}
                <TouchableOpacity  onPress={() => OnRetrivePassword()}>
                    <Text >Reset Password</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                    <Text >Back to Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                    <Text >Back to Signup</Text>
                </TouchableOpacity>

            </View>
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