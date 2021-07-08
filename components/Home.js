import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import * as firebase from 'firebase'

export default function Home({ navigation }) {
    const OnSignOut = () => {
        firebase.auth().signOut()

    }
    var user = firebase.auth().currentUser;
    return (


        <View style={styles.container}>
            <Text style={styles.titleText}>Welcome {user.email}</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => OnSignOut()}>
                <Text style={styles.btntext}>Sign Out</Text>
            </TouchableOpacity>
            
        </View>

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
        color:'#333',
        fontWeight:'bold',
        marginLeft:100

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
    btntext:{
        
        fontWeight: 'bold',
        
    }
    ,
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
        
    },
    button:{
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'coral',
        marginTop: 30,
        borderRadius: 20,
    },
    btn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'coral',
        marginTop: 30,
        borderRadius: 20,
    }
  
})