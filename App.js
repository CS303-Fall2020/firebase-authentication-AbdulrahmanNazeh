import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Navigator from './routes/homeStack'
import AuthNav from './routes/AuthStack'
import ApiKeys from './constants/ApiKeys'
import * as firebase from 'firebase'
export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.FirebaseConfig)
  }
  firebase.auth().onAuthStateChanged(function (user) {
    setIsAuthenticated(!!user)
  })


  return (
    <TouchableWithoutFeedback>
      {(isAuthenticated) ? <AuthNav /> : <Navigator />}
    </TouchableWithoutFeedback>
  );
}


