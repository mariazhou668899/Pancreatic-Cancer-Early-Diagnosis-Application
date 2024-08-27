import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Image, Platform } from 'react-native';

const PredictScreen = ({ navigation }) => {
  const [inputData, setInputData] = useState({
    age: '',
    sex: '',
    plasma_CA19_9: '',
    creatinine: '',
    LYVE1: '',
    REG1B: '',
    TFF1: '',
    REG1A: '',
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (field, value) => {
    setInputData({ ...inputData, [field]: value });
  };

  const handleFocus = (field) => {
    if (!inputData[field]) {
      setInputData({ ...inputData, [field]: '' });
    }
  };

  const handleBlur = (field, placeholder) => {
    if (!inputData[field]) {
      setInputData({ ...inputData, [field]: placeholder });
    }
  };

  const handlePredict = async () => {
    const formattedData = {
      features: [
        parseFloat(inputData.age || '69'),
        parseInt(inputData.sex || '0'),
        parseFloat(inputData.plasma_CA19_9 || '556'),
        parseFloat(inputData.creatinine || '0.91611'),
        parseFloat(inputData.LYVE1 || '7.494335'),
        parseFloat(inputData.REG1B || '77.32123'),
        parseFloat(inputData.TFF1 || '1423.229437'),
        parseFloat(inputData.REG1A || '1232.933'),
      ],
    };

    const response = await fetch('https://c7e7-50-47-198-95.ngrok-free.app/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });

    const result = await response.json();
    let trans = '';
    if (result.prediction === 1) {
      trans = '\nThe machine learning model predicts a positive diagnosis for pancreatic cancer. Please consult with a healthcare professional for further evaluation and details.';
    } else {
      trans = '\nThe machine learning model predicts a negative diagnosis for pancreatic cancer. Please consult with a healthcare professional for further evaluation and details.';
    }

    setPrediction(trans);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('../assets/background_inner.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.formContainer}>
          <View style={styles.btnContainer}>
            <Text style={styles.textLink} onPress={() => navigation.navigate('BiomarkerPage')}>
              Tap to learn more about biomarkers
            </Text>
          </View>


          {/* Input Fields */}
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="69"
            placeholderTextColor="#888"
            value={inputData.age}
            onFocus={() => handleFocus('age')}
            onBlur={() => handleBlur('age', '69')}
            onChangeText={(value) => handleInputChange('age', value)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Sex (Female: 0, Male: 1)</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            placeholderTextColor="#888"
            value={inputData.sex}
            onFocus={() => handleFocus('sex')}
            onBlur={() => handleBlur('sex', '0')}
            onChangeText={(value) => handleInputChange('sex', value)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Plasma CA19-9 (unit: U/ml)</Text>
          <TextInput
            style={styles.input}
            placeholder="556"
            placeholderTextColor="#888"
            value={inputData.plasma_CA19_9}
            onFocus={() => handleFocus('plasma_CA19_9')}
            onBlur={() => handleBlur('plasma_CA19_9', '556')}
            onChangeText={(value) => handleInputChange('plasma_CA19_9', value)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Creatinine (unit: mg/ml)</Text>
          <TextInput
            style={styles.input}
            placeholder="0.91611"
            placeholderTextColor="#888"
            value={inputData.creatinine}
            onFocus={() => handleFocus('creatinine')}
            onBlur={() => handleBlur('creatinine', '0.91611')}
            onChangeText={(value) => handleInputChange('creatinine', value)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>LYVE1 (unit: ng/ml)</Text>
          <TextInput
            style={styles.input}
            placeholder="7.494335"
            placeholderTextColor="#888"
            value={inputData.LYVE1}
            onFocus={() => handleFocus('LYVE1')}
            onBlur={() => handleBlur('LYVE1', '7.494335')}
            onChangeText={(value) => handleInputChange('LYVE1', value)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>REG1B (unit: ng/ml)</Text>
          <TextInput
            style={styles.input}
            placeholder="77.32123"
            placeholderTextColor="#888"
            value={inputData.REG1B}
            onFocus={() => handleFocus('REG1B')}
            onBlur={() => handleBlur('REG1B', '77.32123')}
            onChangeText={(value) => handleInputChange('REG1B', value)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>REG1A (unit: ng/ml)</Text>
          <TextInput
            style={styles.input}
            placeholder="1232.933"
            placeholderTextColor="#888"
            value={inputData.REG1A}
            onFocus={() => handleFocus('REG1A')}
            onBlur={() => handleBlur('REG1A', '1232.933')}
            onChangeText={(value) => handleInputChange('REG1A', value)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>TFF1 (unit: ng/ml)</Text>
          <TextInput
            style={styles.input}
            placeholder="1423.229437"
            placeholderTextColor="#888"
            value={inputData.TFF1}
            onFocus={() => handleFocus('TFF1')}
            onBlur={() => handleBlur('TFF1', '1423.229437')}
            onChangeText={(value) => handleInputChange('TFF1', value)}
            keyboardType="numeric"
          />

          {/* Predict Button */}
          <Button title="Predict" onPress={handlePredict} />

          {prediction !== null && (
            <Text style={styles.prediction}>Prediction Results: {prediction}</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    zIndex: -1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  formContainer: {
    paddingBottom: 20,
    zIndex: 1,
    maxWidth: Platform.OS === 'web' ? 800 : '100%', // Set max width for web, full width for mobile
    alignSelf: 'center',
    width: '90%', // Ensure it doesn't exceed screen width on mobile
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  prediction: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  textLink: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default PredictScreen;
