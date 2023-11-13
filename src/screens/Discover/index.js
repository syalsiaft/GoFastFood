import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {BlogList} from '../../../data';
import {ItemSmall} from '../../components'; 
import {SearchNormal} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';

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
      renderItem={({ item }) => <ItemFilter item={item} />} 
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
const Discover = () => {
  const FilterBlog = BlogList.slice(5);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal size={18} color='grey' variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
        </View>
      </View>
      <View>
        <Text style={Filter.text}>Filter</Text>
        <FlatListFilter />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listCard}>
          {FilterBlog.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </ScrollView>
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
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: 'grey(0.05)',
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
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
    fontFamily: fontType['Pjs-Medium'],
    color: 'grey(0.65)',
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: 'black',
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
});