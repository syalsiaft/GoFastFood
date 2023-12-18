import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Animated,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {BlogList} from '../../../data';
import {SearchNormal, Edit} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import firestore from '@react-native-firebase/firestore';
const Order = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [OrderData, setOrderData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const data = [
    {id: 1, label: 'Maincourse'},
    {id: 2, label: 'Drinks'},
    {id: 3, label: 'Dessert'},
    {id: 4, label: 'Side Dish'},
  ];
  
  useEffect(() => {
    const subscriber = firestore()
      .collection('order')
      .onSnapshot(querySnapshot => {
        const Orders = [];
        querySnapshot.forEach(documentSnapshot => {
          Orders.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setOrderData(Orders);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      // setOrderData();
      firestore()
        .collection('order')
        .onSnapshot(querySnapshot => {
          const Orders = [];
          querySnapshot.forEach(documentSnapshot => {
            Orders.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setOrderData(Orders);
        });
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerUp}>
        <View>
          <Text style={Filter.text}>Filter</Text>
        </View>
        <TouchableOpacity style={Order.buttonEdit}>
            <Text style={Order.buttonText}>Edit Order</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddOrderForm')}>
        <Edit color="white" variant="Linear" size={20} />
      </TouchableOpacity>
      <View style={{paddingVertical: 10, gap: 10}}>
        {loading ? (
          <ActivityIndicator size={'large'} color={'blue'} />
        ) : (
          OrderData.map((item, index) => <ItemSmall item={item} key={index} />)
        )}
      </View>
    </View>
  );
};
export default Order;

const ItemSmall = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => navigation.navigate('EditForm', {OrderId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap: 30,
          }}>
          <View style={{gap: 5, flex: 1}}>
            <Text style={styles.cardTitle}>{item.pesanan}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
    backgroundColor:'red',
  },
  cardItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  cardCategory: {
    color: 'blue',
    fontSize: 10,
    fontFamily: fontType['Tjw-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Tjw-Bold'],
    color: 'blue',
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Tjw-Medium'],
    color: 'grey',
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerUp: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    paddingTop: 8,
    paddingBottom: 4,
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: 'white',
  },
  kotak: {
    width: 400,
    height: 131,
    paddingHorizontal: 8,
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Tjw-Medium'],
    color: 'grey',
    lineHeight: 18,
  },
  floatingButton: {
    backgroundColor: 'red',
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
const Filter = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'pink',
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Tjw-Medium'],
    color: 'black',
  },
  text: {
    fontSize: 25,
    fontFamily: fontType['Tjw-Bold'],
    color: 'black',
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 999,
    top: 52,
    left: 0,
    right: 0,
    elevation: 1000,

    buttonEdit: {
      paddingHorizontal: 16,
      paddingVertical: 14,
      backgroundColor: 'grey',
      borderRadius: 10,
    },
  },
});