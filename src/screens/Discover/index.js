import { StyleSheet, Text, View, ScrollView, FlatList, Animated, TouchableOpacity,} from 'react-native';
import React, {useRef} from 'react';
import {BlogList} from '../../../data';
import {ItemSmall} from '../../components';
import {SearchNormal} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';

const Discover = () => {
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
      {/* <Animated.View
        style={[styles.container, {transform: [{translateY: recentY}]}]}>
        <Text style={styles.placeholder}>Search</Text>
        <FlatListRecent />
      </Animated.View> */}

      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => navigation.navigate('Search')}>
        <Text style={{color: 'black', left: 127, bottom: 8, fontSize: 16,  top:-4,}}>
          Search...
        </Text>
        <SearchNormal
          color={'black'}
          variant="Broken"
          size={25}
          style={{opacity: 0.9, marginHorizontal: '-34%', top:-4,}}
        />
      </TouchableOpacity>

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
  );
};
export default Discover;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
  },
  container: {
    flex: 1,
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
  searchBar: {
    paddingHorizontal: 1,
    justifyContent: 'space-around',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 50,
    marginHorizontal: 5,
    marginTop: 30,
    paddingTop: 20,
    margin: 13,
    padding: 10,
    borderRadius: 30,
  },

  // bar: {
  //   flexDirection: 'row',
  //   padding: 10,
  //   gap: 10,
  //   alignItems: 'center',
  //   backgroundColor: 'grey(0.05)',
  //   borderRadius: 10,
  //   flex: 1,
  // },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Tjw-Medium'],
    color: 'grey(0.5)',
    lineHeight: 18,
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
    fontSize: 14,
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
