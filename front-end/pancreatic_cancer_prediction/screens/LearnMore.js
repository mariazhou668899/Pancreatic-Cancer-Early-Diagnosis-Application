import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity, Linking, } from 'react-native';


const HorizontalLine = () => <View style={styles.horizontalLine} />;
const openResearch = () => {
  const url = 'https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003489';
  Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
};
const openModel = () => {
  const url = 'https://colab.research.google.com/drive/1NqksRQ8LL807x29C-oi4-EYEFpXaPhwF?usp=sharing';
  Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
};

const LearnMoreScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/background_inner.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.section}>
        <Text style={styles.text}>Our Process</Text>
        <HorizontalLine />
        <Image source={require('../assets/process-diagram.png')} />
         <HorizontalLine />
        <Text style={styles.text}>If you would like to learn more about the research 
        that started this project, visit: </Text>
        <TouchableOpacity onPress={openResearch}>
          <Text style={styles.link}>Case-Control Study</Text>
        </TouchableOpacity>
        <HorizontalLine />
        <Text style={styles.text}>To learn more about our model, visit: </Text>
        <TouchableOpacity onPress={openModel}>
          <Text style={styles.link}>Model Background</Text>
        </TouchableOpacity>
        <HorizontalLine />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 22,
    alignItems: 'center',
  },
  text: {
    padding:20,
    fontSize: 22,
    fontFamily: 'sans-serif',
    textAlign: 'left'
  },
  link: {
    color: '#007BFF',
    fontSize: 22,
    textDecorationLine: 'underline',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#808080', 
    marginVertical: 20, 
    width: '80%',
  },
    backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    zIndex: -1, // Make sure the image is behind the content
  },
});
export default LearnMoreScreen;