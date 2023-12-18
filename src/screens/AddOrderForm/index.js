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
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import axios from 'axios';

const AddOrderForm = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [orderData, setOrderData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleUpload = async () => {
    setLoading(true);
    try {
      await axios
        .post('https://657d3702853beeefdb9a651b.mockapi.io/gofastfood/order', {
          alamat: orderData.alamat,
          pesanan: orderData.pesanan,
          image,
          createdAt: new Date(),
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('Order');
    } catch (e) {
      console.log(e);
    }
  };
  const [image, setImage] = useState(null);
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
              placeholderTextColor={'#000'}
              multiline
            />
          </View>
          <View style={form.PesananBox}>
            <TextInput
              style={form.TextInput}
              placeholder="Pesanan"
              placeholderTextColor={'#000'}
              multiline
            />
          </View>
          <View style={form.CatatanBox}>
            <TextInput
              style={form.TextInput}
              placeholder="Catatan"
              placeholderTextColor={'#000'}
              multiline
            />
          </View>
          <View style={[form.GambarBox]}>
            <TextInput
              placeholder="Image"
              value={image}
              onChangeText={text => setImage(text)}
              placeholderTextColor={'grey'}
            />
          </View>
        </View>
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
