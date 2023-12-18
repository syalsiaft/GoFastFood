import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {ArrowLeft, AddSquare, Add} from 'iconsax-react-native';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import {fontType} from '../../theme';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const AddOrderForm = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [orderData, setOrderData] = useState([]);
  const [image, setImage] = useState(null);

  const handleChange = (key, value) => {
    setOrderData({
      ...orderData,
      [key]: value,
    });
  };

  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1080,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpload = async () => {
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const reference = storage().ref(`blogimages/${filename}`);

    setLoading(true);
    try {
      await reference.putFile(image);
      const url = await reference.getDownloadURL();
      await firestore().collection('order').add({
        alamat: orderData.alamat,
        pesanan: orderData.pesanan,
        image : url,
      });
      setLoading(false);
      console.log('Order added!');
      navigation.navigate('Order');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <ArrowLeft
              color={'black'}
              alignItems="center"
              variant="Broken"
              size={25}
            />
          </TouchableOpacity>
        </View>
        <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>
          Add Your Order Here!
        </Text>
        <View>
          <Text> </Text>
        </View>
      </View>
      <ScrollView>
        <View style={form.container}>
          <View style={form.AlamatBox}>
            <TextInput
              style={form.TextInput}
              placeholder="Alamat"
              onChangeText={text => handleChange('alamat', text)}
              placeholderTextColor={'#000'}
              multiline
            />
          </View>
          <View style={form.PesananBox}>
            <TextInput
              style={form.TextInput}
              placeholder="Pesanan"
              onChangeText={text => handleChange('pesanan', text)}
              placeholderTextColor={'#000'}
              multiline
            />
          </View>
          {/* <View style={[form.GambarBox]}>
            <TextInput
              placeholder="Image"
              value={image}
              onChangeText={text => handleChange('image', text)}
              placeholderTextColor={'grey'}
            />
          </View> */}
        </View>
        <TouchableOpacity>
          <View
            style={[
              ,
              {
                gap: 10,
                paddingVertical: 30,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}></View>
        </TouchableOpacity>
        {image ? (
          <View style={{position: 'relative'}}>
            <FastImage
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: 'blue',
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color={'white'}
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                styles.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color={'pink'} variant="Linear" size={42} />
              <Text
                style={{
                  fontFamily: fontType['Pjs-Regular'],
                  fontSize: 12,
                  color: 'pink',
                }}>
                Upload Order
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
      <View style={styles.bottomBar}>
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={'blue'} />
          </View>
        )}
        <TouchableOpacity style={form.btnPesan} onPress={handleUpload}>
          <Text style={form.textBtn}>Pesan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AddOrderForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
  },
  ButtonBack: {
    backgroundColor: '#F1F1F1',
    borderRadius: 30,
    justifyContent: 'center',
    color: 'black',
  },
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'grey',
  },
});
const form = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  AlamatBox: {
    backgroundColor: '#F9F9E0',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  PesananBox: {
    marginTop: 5,
    backgroundColor: '#F9F9E0',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  CatatanBox: {
    marginTop: 5,
    backgroundColor: '#F9F9E0',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  GambarBox: {
    marginTop: 5,
    backgroundColor: '#F9F9E0',
    height: 500,
    width: '100%',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 4,
  },
  btnPesan: {
    alignSelf: 'center',
    marginTop: 20,
    height: 50,
    width: '100%',
    backgroundColor: 'pink',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textBtn: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },
  TextInput: {
    color: '#000',
    fontSize: 16,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});