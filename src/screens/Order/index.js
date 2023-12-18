import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    Animated,
    TouchableOpacity,
    RefreshControl,
    ActivityIndicator
  } from 'react-native';
  import React, {useRef, useState, useCallback} from 'react';
  import {BlogList} from '../../../data';
  import {SearchNormal, Edit} from 'iconsax-react-native';
  import {fontType, colors} from '../../theme';
  import {useNavigation, useFocusEffect} from '@react-navigation/native';
  import axios from 'axios';
  import FastImage from 'react-native-fast-image';
  const Order = () => {
    const navigation = useNavigation();
    const FilterBlog = BlogList.slice(5);
    const [blogData, setBlogData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 142);
    const recentY = diffClampY.interpolate({
      inputRange: [0, 142],
      outputRange: [0, -142],
      extrapolate: 'clamp',
    });
    const data = [
      {id: 1, label: 'Maincourse'},
      {id: 2, label: 'Drinks'},
      {id: 3, label: 'Dessert'},
      {id: 4, label: 'Side Dish'},
    ];
    const [loading, setLoading] = useState(true);
    const ItemFilter = ({item}) => {
      return (
        <View style={Filter.button}>
          <Text style={Filter.label}>{item.label}</Text>
        </View>
      );
    };
  
    const getDataBlog = async () => {
      try {
        const response = await axios.get(
          'https://657d3702853beeefdb9a651b.mockapi.io/gofastfood/order',
        );
        setBlogData(response.data);
        setLoading(false)
      } catch (error) {
          console.error(error);
      }
    };
  
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        getDataBlog()
        setRefreshing(false);
      }, 1500);
    }, []);
  
    useFocusEffect(
      useCallback(() => {
        getDataBlog();
      }, [])
    );
  
  
    const FlatListFilter = () => {
      return (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ItemFilter item={item} />}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 10}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      );
    };
    return (
      <View style={styles.container}>
        <View style={styles.headerUp}>
          <View>
            <Text style={Filter.text}>Filter</Text>
            <FlatListFilter />
          </View>
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: true},
            )}
            contentContainerStyle={{paddingTop: 142}}>
            <View style={styles.listCard}>
              {/* {recentBlog.map((item, index) => (
              <ItemSmall item={item} key={index} />
            ))} */}
            </View>
          </Animated.ScrollView>
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
            blogData.map((item, index) => <ItemSmall item={item} key={index} />)
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
        onPress={() => navigation.navigate('EditForm', {blogId: item.id})}>
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
    },
    cardItem: {
      backgroundColor: 'white',
      flexDirection: 'row',
      borderRadius: 10,
    },
    cardCategory: {
      color: 'blue',
      fontSize: 10,
      fontFamily: fontType['Pjs-SemiBold'],
    },
    cardTitle: {
      fontSize: 14,
      fontFamily: fontType['Pjs-Bold'],
      color: 'blue',
    },
    cardText: {
      fontSize: 10,
      fontFamily: fontType['Pjs-Medium'],
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
      backgroundColor: 'grey',
    },
    label: {
      fontSize: 12,
      fontFamily: fontType['Tjw-Medium'],
      color: 'grey',
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
    },
  });
  