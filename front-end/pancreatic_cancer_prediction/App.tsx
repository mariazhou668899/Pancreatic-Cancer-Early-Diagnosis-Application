import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import LandingPage from './screens/LandingPage';
import PredictScreen from './screens/PredictScreen';
import BiomarkerPage from './screens/BiomarkerPage';
import Interpretation from './screens/Interpretation';
import LearnMore from './screens/LearnMore';

const Stack = createStackNavigator();

const App = () => { 
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="PredictScreen" component={PredictScreen} />
          <Stack.Screen name="BiomarkerPage" component={BiomarkerPage} />
          <Stack.Screen name="Interpretation" component={Interpretation} />
          <Stack.Screen name="LearnMore" component={LearnMore} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure full height
    backgroundColor: 'white', // Optional: set background color
  },
});

export default App;
