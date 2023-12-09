import React, {useState} from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, } from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const AddOrderForm = () => {
  const navigation = useNavigation();
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
            <TextInput style={form.TextInput}
              placeholder="Alamat"
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <View style={form.PesananBox}>
            <TextInput style={form.TextInput}
              placeholder="Pesanan"
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <View style={form.CatatanBox}>
            <TextInput style={form.TextInput}
              placeholder="Catatan"
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <View style={form.GambarBox}>
            <TextInput style={form.TextInput}
              placeholder="Gambar"
              placeholderTextColor={"#000"}
              multiline
            />
          </View>
          <TouchableOpacity style={form.btnPesan}>
            <Text style={form.textBtn}>Pesan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default AddOrderForm;
//////////////////////////////////////////////////////// CSS ////////////////////////////////////////////////////////
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
      color: "black",
      alignSelf: 'center',
    },
    TextInput:{
        color: "#000",
        fontSize:16,
    }
  });