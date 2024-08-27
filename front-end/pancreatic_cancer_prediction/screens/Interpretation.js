import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';

const Interpretation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={true} // Ensure scrollbar is visible
      >
        <Image
          source={require('../assets/background_inner.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>How Are Predictions Influenced?</Text>
          <Image style={styles.image} source={require('../assets/sharp_importance.jpg')} />
          <Text style={styles.paragraph}>
            The chart above describes which parts of provided information have the strongest impact on the results. Plasma_CA19_9 has been shown to have the greatest impact while REG1B, sex, and TFF1 have significantly lower impacts.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('BiomarkerPage')} style={styles.btnContainer}>
            <Text style={styles.textLink}>Tap to learn more about biomarkers</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Case Example</Text>
          <Text style={styles.subTitle}>(Predicted as No Pancreatic Cancer)</Text>
          <Image style={styles.image} source={require('../assets/lime.png')} />
          <Text style={styles.paragraph}>
            Looking at this example, we can map the user's details to the fields used in making a prediction. The y-axis contains conditionals (or rules), for example, whether the user is at or under the age of 50. The x-axis determines how much of an impact the rule has in making a prediction.
          </Text>
          <Text style={styles.paragraph}>* Red denotes a contribution towards the user having cancer</Text>
          <Text style={styles.paragraph}>* Blue denotes a contribution towards the user not having cancer</Text>
          <Text style={styles.paragraph}>* In this example, blue outweighs red which shows that the user is not likely to have pancreatic cancer</Text>
          <Text style={styles.paragraph}>* The length of the bar for each field represents the level of impact that field has on the prediction</Text>
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
    zIndex: -1, // Make sure the image is behind the content
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  formContainer: {
    paddingBottom: 20,
    zIndex: 1, // Bring the form content above the background
    maxWidth: Platform.OS === 'web' ? 800 : '100%', // Set max width for web, full width for mobile
    alignSelf: 'center', // Center the form container
    width: '90%', // Ensure it doesn't exceed screen width on mobile
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: Platform.OS === 'web' ? 400 : 190, // Adjust height for web and mobile
    aspectRatio: 2,
    resizeMode: 'contain',
    marginBottom: 10,
    alignSelf: 'center', 
  },
  btnContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  textLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Interpretation;
