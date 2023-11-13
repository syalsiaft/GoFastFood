import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {BlogList, listCategory} from '../../../data';
import {fontType} from '../../theme';
import {FlatList} from 'react-native';

export default function Home() {
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={{backgroundColor: '#FFFFFF', padding: 10}}>
        <Text style={header.categoryTitle}>GoFastFood</Text>
        <Text style={subHeader.categoryTitle}>Enjoy The Food</Text>
      </View>
      <BlogAtas />
      <BlogBawah blogItems={BlogList} />
    </View>
  );
}

const header = StyleSheet.create({
  categoryTitle: {
    fontFamily: fontType['Lcg-Regular'],
    fontSize: 40,
    color: 'black',
  },
});

const subHeader = StyleSheet.create({
  categoryTitle: {
    fontFamily: fontType['Tjw-Bold'],
    fontSize: 20,
    color: 'black',
  },
});

//penerapan state disini
const BlogAtas = () => {
  const [selectedCategory, setSelectedCategory] = useState('Maincourse');

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  return (
    <View style={atas.containercat}>
      <View style={atas.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listCategory.map(categoryData => (
            <TouchableOpacity
              key={categoryData.id}
              onPress={() => handleCategoryChange(categoryData.categoryName)}>
              <View
                style={{
                  ...atas.categoryItem,
                  marginTop: 10,
                  marginLeft: 25,
                  borderColor:
                    selectedCategory === categoryData.categoryName
                      ? 'blue'
                      : 'transparent',
                  borderWidth:
                    selectedCategory === categoryData.categoryName ? 2 : 0,
                }}>
                <Image
                  style={{...atas.image, marginLeft: 2}}
                  source={{
                    uri: categoryData.uri,
                  }}
                />
                <Text
                  style={{
                    ...atas.categoryText,
                    color:
                      selectedCategory === categoryData.categoryName
                        ? 'coral'
                        : 'black',
                    marginLeft: 2,
                  }}>
                  {categoryData.categoryName}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const atas = StyleSheet.create({
  containercat: {
    height: 130,
    weight: 100,
    backgroundColor: '#fff3eb',
  },
  listCategory: {
    backgroundColor: '#FFDFDF',
    paddingTop: 10,
    paddingBottom: 20,
  },
  categoryItem: {},
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  categoryText: {
    fontSize: 15,
    color: 'black',
  },
});

//penerapan props
const BlogBawah = props => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.horizontalUtama}
        showsHorizontalScrollIndicator={false}>
        {props.blogItems.map(item => (
          <View style={styles.categoryUtama} key={item.id}>
            <Image
              style={styles.imageUtama}
              source={{
                uri: item.image,
              }}
            />
            <Text style={styles.textfont}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '53%',
  },
  categoryUtama: {
    backgroundColor: '#FFCDB6',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 20,
    height: '85%',
    width: 250,
    borderRadius: 20,
    padding: 15,
  },
  categoryUtama1: {
    backgroundColor: '#D6D8FF',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 20,
    height: '85%',
    width: 250,
    borderRadius: 20,
    padding: 15,
  },
  categoryUtama2: {
    backgroundColor: '#F9E3E5',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 20,
    height: '85%',
    width: 250,
    borderRadius: 20,
    padding: 15,
  },

  categoryUtama3: {
    backgroundColor: '#ECEE81',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 20,
    height: '85%',
    width: 250,
    borderRadius: 20,
    padding: 15,
  },
  imageUtama: {
    width: 220,
    height: 220,
    borderRadius: 30,
  },
  textfont: {
    fontSize: 24,
    margin: 5,
    color: 'black',
    fontFamily: fontType['Tjw-Medium'],
  },
  horizontalUtama: {},

  listCategory: {
    paddingVertical: 10,
  },
});
