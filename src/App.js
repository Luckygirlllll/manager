import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {

    componentWillMount(){
      const config = {
        apiKey: 'AIzaSyDCQXyFF6QSqGqqUp0unw2GtpPC51hYc6U',
        authDomain: 'manager-a62b7.firebaseapp.com',
        databaseURL: 'https://manager-a62b7.firebaseio.com',
        storageBucket: 'manager-a62b7.appspot.com',
        messagingSenderId: '941428923499'
      };
      firebase.initializeApp(config);


    }

    render(){
    return(
    <Provider store={createStore(reducers)}>
        <LoginForm/>
    </Provider>
    );
    }
}


export default App;