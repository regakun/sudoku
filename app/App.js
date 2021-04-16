import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import store from './store';
import Board from './components/board';
import Home from './components/home';
import Finish from './components/finish';
import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store} style={styles.prov}>
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Board" component={Board} />
        <Stack.Screen name="Finish" component={Finish} />
      </Stack.Navigator>
    </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  prov: {
    alignItems: 'center',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    
  },
  boardContainer: {
    flex: 1,
    // backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    flexWrap: 'wrap',
    width:'97%',
    height:'50%'
  },
  titleContainer: {
    flex: 0,
    // backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    flexWrap: 'wrap',
    width:'97%',
    height:'25%'
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#00f',
    justifyContent: 'center',
  },
  columnContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderColor:'white',
    borderWidth:1,
  },
  input: {
    // flex:1,
    width:33.3,
    backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    borderWidth: 1,
    borderColor: 'red',
    display: 'flex'
  },
  text: {
    color: 'black'
  }
});
