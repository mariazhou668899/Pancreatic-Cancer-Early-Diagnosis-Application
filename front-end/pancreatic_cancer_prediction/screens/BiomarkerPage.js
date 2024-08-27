import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const BiomarkerPage = () => {
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
          <Text style={styles.headerText}>1. What are the biomarkers?</Text>
          
          <Text style={styles.biomarkerTitle}>Plasma CA19-9</Text>
          <Text style={styles.biomarkerDescription}>
            CA19-9 (Carbohydrate Antigen 19-9) is a tumor marker that is often elevated in pancreatic cancer.
          </Text>
          
          <Text style={styles.biomarkerTitle}>REG1B</Text>
          <Text style={styles.biomarkerDescription}>
            REG1B (Regenerating gene protein 1 beta) is a protein that may be associated with pancreatic diseases, including cancer.
          </Text>
          
          <Text style={styles.biomarkerTitle}>REG1A</Text>
          <Text style={styles.biomarkerDescription}>
            REG1A (Regenerating gene protein 1 alpha) is a protein that may be associated with pancreatic diseases, including cancer.
          </Text>
          
          <Text style={styles.biomarkerTitle}>Creatinine</Text>
          <Text style={styles.biomarkerDescription}>
            Creatinine is a waste product produced by muscles from the breakdown of a compound called creatine. It is commonly used to assess kidney function.
          </Text>
          
          <Text style={styles.biomarkerTitle}>LYVE1</Text>
          <Text style={styles.biomarkerDescription}>
            LYVE1 (Lymphatic Vessel Endothelial Hyaluronan Receptor 1) is a protein involved in lymphatic endothelial cells. Its presence in urine has been associated with pancreatic cancer.
          </Text>
          
          <Text style={styles.biomarkerTitle}>TFF1</Text>
          <Text style={styles.biomarkerDescription}>
            TFF1 (Trefoil Factor 1) is a protein involved in mucosal protection and repair. It has been studied as a potential biomarker for various cancers.
          </Text>
          
          <Text style={styles.headerText}>2. How to get them?</Text>
          <Text style={styles.title}>Blood Tests</Text>
          <Text style={styles.biomarkerDescription}>
            Plasma CA19-9 can be measured using blood tests.
          </Text>
          <Text style={styles.title}>Urine Tests</Text>
          <Text style={styles.biomarkerDescription}>
            LYVE1 , REG1B, REG1A, TFF1 and creatinine can be measured using urine tests.
          </Text>
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
    maxWidth: 800, // Set a max width for the form container
    alignSelf: 'center', // Center the form container
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#000',
  },
  biomarkerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  biomarkerDescription: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
});

export default BiomarkerPage;
