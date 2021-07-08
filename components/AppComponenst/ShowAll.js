import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
export default function ShowAll({navigation}) {
    const [data, setData] = useState([
        { name: "Holo", details: "Good game", key: 1 },
        { name: "Doom", details: "Boor Game", key: 2 },
        { name: "Sekiro", details: "Very Very bad game", key: 3 }
    ])

    const submitHandler = (name,details) => {
        if (name.length > 3) {
          setData((prevTodos) => {
            return [
              { name: name, details: details, key: Math.random() },
              ...prevTodos
            ];
          })
        } else {
          Alert.alert('oppos', 'todo must be over 3 chars long', [
            { text: 'Understood', onPress: () => console.log('alert closed') }
    
          ]);
        }
    
      }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (

                    <View>
                        <Text>{item.name}: {item.details}</Text>
                        
                    </View>

                )}
            />
            <TouchableOpacity  onPress={() => navigation.navigate('AddGame',{submitHandler})}>
                <Text >Add Game</Text>
            </TouchableOpacity>
        </View>
    )
}
