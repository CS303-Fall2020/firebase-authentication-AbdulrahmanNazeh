import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Button } from 'react-native';

export default function AddGame({navigation}) {
const [name, setName] = useState('')
const [details, setDetails] = useState('')
    const h = navigation.getParam('submitHandler');
    return (
        <View>
            <TextInput value={name} onChangeText={(text) => setName(text)} placeholder="Enter game Name"/>
            <TextInput value={details} onChangeText={(text) => setDetails(text)} placeholder="Enter game Details"/>
            <TouchableOpacity onPress={() => {
                h(name,details)
                navigation.navigate('ShowAll')
            }}>
                <Text>Press</Text>
            </TouchableOpacity>
        </View>
    )
}
