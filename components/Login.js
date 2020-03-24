import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput,Button, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase'

export default function Login({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const OnLoginPress = () => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {

            }, (error) => {

                if (email == '' && password == '') {
                    Alert.alert('ERROR', 'invalid credential!', [
                        { text: 'DISSMIS' }
                    ]);
                } else {
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)

                        if (error.message == 'The email address is badly formatted.') {
                            Alert.alert('auth/invalid-email', error.message,
                                [{ text: 'Dismiss' }]);
                        } else if (error.message == 'The password is invalid or the user does not have a password.') {
                            Alert.alert('auth/wrong-password', error.message,
                                [{ text: 'Dismiss' }]);
                        } else if (error.message == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
                            Alert.alert('auth/user-not-found', error.message,
                                [{ text: 'Dismiss' }]);
                        } else {
                            Alert.alert('auth/network-request-failed', error.message, [
                                { text: 'DISMISS' }
                            ])
                        }
                    }, 500)
                }

            })
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()

        }}>
            <View style={styles.container}>
                <View style={styles.form}>
                    {loading ? <ActivityIndicator style={{marginTop: 130}} size="large" /> :
                        <View>
                           


                            <TextInput style={styles.input} placeholder="Your email"
                                value={email} onChangeText={(text) => setEmail(text)} underlineColorAndroid={'transparent'} />
                            <TextInput style={styles.input} placeholder="Your password"
                                value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} underlineColorAndroid={'transparent'} />
                            <TouchableOpacity  onPress={() => OnLoginPress()}>
                            <Button  title='Login' color='coral' />
                            </TouchableOpacity>
                        </View>}
                    <TouchableOpacity  onPress={() => navigation.navigate('ForgetPassword')}>
                        <Text >Forget Password?!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.signup} onPress={() => navigation.navigate('Register')} >
                        <Text>Don't have an account!!</Text>
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
