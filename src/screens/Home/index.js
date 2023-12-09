import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {BlogList, listCategory} from '../../../data';
import {fontType} from '../../theme';

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 50);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -290],
    extrapolate: 'clamp',
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[header.container, {transform: [{translateY: recentY}]}]}>
        <View style={{backgroundColor: '#FFFFFF', padding: 10}}>
          <Text style={header.categoryTitle}>GoFastFood</Text>
          <Text style={subHeader.categoryTitle}>Enjoy The Food</Text>
        </View>
        <BlogAtas />
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{}}>
        <BlogBawah blogItems={BlogList} />
      </Animated.ScrollView>
    </View>
  );
}

const header = StyleSheet.create({
  categoryTitle: {
    fontFamily: fontType['Lcg-Regular'],
    fontSize: 40,
    color: 'black',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: 'white',
  },
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 999,
    left: 0,
    right: 0,
    elevation: 1000,
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

  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={[atas.containercat]}>
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
  );
};

const atas = StyleSheet.create({
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
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.ScrollView
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: false,
      })}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      scrollEventThrottle={16}>
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
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: "100%",
  },
  categoryUtama: {

    backgroundColor: '#FFCDB6',
    top: 120,
    marginTop: 50,
    marginLeft: 15,
    marginRight: 20,
    height: '85',
    width: 250,
    justifyContent:"center",
    alignSelf:'center',
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
