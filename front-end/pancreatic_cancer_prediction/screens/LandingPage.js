import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.outerContainer}>
        <Image
          source={require('../assets/background.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Early Pancreatic Cancer Detector</Text>
          <View style={styles.txtContainer}>
            <Text style={styles.description}>
              Our goal is to catch people who may be at risk for pancreatic cancer in
              the early stages mainly using urinary biomarker information.
            </Text>
            <Text style={styles.advisory}>
              Note: This application is for predictive purposes only. Please consult a
              doctor or researcher for further advice and diagnosis.
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LearnMore')}>
              <Text style={styles.buttonAltText}>Learn About iML Research</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Interpretation')}>
              <Text style={styles.buttonAltText}>Learn About Result Interpretation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.predictButton} onPress={() => navigation.navigate('PredictScreen')}>
              <Text style={styles.buttonText}>Try Diagnosis Prediction</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: Platform.OS === 'web' ? 40 : 10,
  },
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff'
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'left',
    width: '100%',
    color: '#fff'
  },
  advisory: {
    fontSize: 16,
    marginBottom: 20,
    color: 'red',
    textAlign: 'left',
    width: '100%', 
    backgroundColor: '#f1f1f1',
    padding: 20,
    borderRadius: 10
  },
  txtContainer: {
    marginVertical: 50,
    width: '90%',
    alignItems: 'center'
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderColor: '#007BFF',
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  predictButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800'
  },
  buttonAltText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default LandingPage;
