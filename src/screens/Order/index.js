import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {BlogList} from '../../../data';
import {ItemSmall} from '../../components';
import {SearchNormal, Edit} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';

const Order = () => {
  const navigation = useNavigation();
  const FilterBlog = BlogList.slice(5);
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
  const ItemFilter = ({item}) => {
    return (
      <View style={Filter.button}>
        <Text style={Filter.label}>{item.label}</Text>
      </View>
    );
  };
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
      <ScrollView>
        <View style={styles.kotak}>
          <Text>Gambar Makanan 1</Text>
        </View>
        <View style={styles.kotak}>
          <Text>Gambar Makanan 2</Text>
        </View>
        <View style={styles.kotak}>
          <Text>Gambar Makanan 3</Text>
        </View>
        <View style={styles.kotak}>
          <Text>Gambar Makanan 4</Text>
        </View>
        <View style={styles.kotak}>
          <Text>Gambar Makanan 5</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddOrderForm')}>
        <Edit color="white" variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};
export default Order;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
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
    color: 'grey(0.5)',
    lineHeight: 18,
  },
  floatingButton: {
    backgroundColor: "red",
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: "red",
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
    borderColor: 'grey(0.15)',
    borderWidth: 1,
    backgroundColor: 'grey(0.03)',
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Tjw-Medium'],
    color: 'grey(0.65)',
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
