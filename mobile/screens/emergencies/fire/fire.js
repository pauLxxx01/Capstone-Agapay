import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native'; 
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Fire = ({ navigation, route }) => {
  const [reportText, setReportText] = useState('');
  const [capturedPhotos, setCapturedPhotos] = useState([]); 

  useEffect(() => {
    if (route.params?.photoUri) {
      setCapturedPhotos(prevPhotos => [...prevPhotos, route.params.photoUri]); 
    }
  }, [route.params?.photoUri]);

  const handleText = () => {
    const sosText = {
      reportText,
    };
    console.log('Feedback Submitted: ', sosText);
    resetFormData();
  };

  const resetFormData = () => {
    setReportText('');        
  };

  const removePhoto = (index) => {
    setCapturedPhotos(prevPhotos => prevPhotos.filter((_, i) => i !== index));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../../assets/emergencies/maroon/maroonfire.png')} style={styles.image} />
          <Text style={styles.text}>FIRE EMERGENCY</Text>
        </View>

        <View style={styles.firstaid}>
          <Text style={styles.firstaidText}>First Aid</Text>
          <Text style={styles.firstaidPro}>1. Check for safe space to evacuate</Text>
          <Text style={styles.firstaidPro}>2. Cover your nose with a damp piece of fabric to avoid suffocation</Text>
          <Text style={styles.firstaidPro}>3. Stay low</Text>
          <Text style={styles.firstaidPro}>4. DO NOT PANIC!</Text>
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.camcontainer}>
            <TouchableOpacity style={styles.cameraIconButton} onPress={() => navigation.navigate('EmergencyCamera')}>
              <Icon name="camera" size={45} color="#fff" />
            </TouchableOpacity>
          </View>

          {capturedPhotos.length > 0 && (
            <ScrollView horizontal style={styles.imageScrollView}>
              <View style={styles.imageContainer}>
                {capturedPhotos.map((photoUri, index) => (
                  <View key={index} style={styles.photoWrapper}>
                    <Image source={{ uri: photoUri }} style={styles.capturedImage} />
                    <TouchableOpacity style={styles.removeButton} onPress={() => removePhoto(index)}>
                      <Icon name="times-circle" size={24} color="#ff0000" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </ScrollView>
          )}

          <TextInput
            style={styles.input}
            placeholder="Type Here"
            placeholderTextColor="#666"
            multiline={true}
            value={reportText}
            onChangeText={setReportText}
          />

          <View style={styles.notificationButtons}>
            <TouchableOpacity style={styles.notifyButton} onPress ={() => navigation.navigate ('ResponseProgress')}>
              <Text style={styles.notifyButtonText}>Send SOS</Text> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
    marginTop: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
    textAlign: 'center',
  },
  firstaid: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  firstaidText: {
    fontWeight: 'bold',
    fontSize: 22, 
    color: '#000',
    marginBottom: 10,
  },
  firstaidPro: {
    fontSize: 16,
    color: '#000',
    marginBottom: 6,
  },
  actionsContainer: {
    backgroundColor: '#8B0000', 
    width: '112%',
    height: '59%',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  camcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  cameraIconButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageScrollView: {
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoWrapper: {
    position: 'relative',
    margin: 5,
  },
  capturedImage: {
    width: Dimensions.get('window').width * 0.20, 
    height: Dimensions.get('window').width * 0.20,
    borderRadius: 10,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 2,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    textAlignVertical: 'top',
    fontSize: 18,
    height: 100,
  },
  notificationButtons: {
    width: '100%',
    alignItems: 'center',
  },
  notifyButton: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: '40%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15
  },
  notifyButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default Fire;