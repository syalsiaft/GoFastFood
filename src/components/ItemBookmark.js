import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ReceiptAdd, Book1, Category} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../theme';

import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();

const truncateTextByWords = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + ' ...';
  }
  return text;
}

const ItemBookmark = ({item, onPress, variant}) => {
  return (
      <TouchableOpacity style={styles.cardItem} onPress={()=>{}}>
        <FastImage
          style={styles.cardImage}
          source={{
            uri: item.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
          <View style={styles.cardContent}>
            <View style={styles.cardCategory}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryLabel}>{item.category}</Text>
              </View>
            </View>
            <View>
              <View style={styles.cardIcon}>
                <TouchableOpacity onPress={onPress}>
                  <Receipt21 colors= 'white' variant={variant} size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </FastImage>
        <View style={{gap: 20, paddingHorizontal: 15, paddingVertical: 10}}>
          <View style={{gap: 10}}>
            <Text
              style={styles.blogTitle}>
              {item.title}
            </Text>
            <Text
              style={styles.blogContent}>
              {truncateTextByWords(item.content, 10)}
            </Text>
          </View>
          <View style={styles.cardInfo}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap:5}}>
              <Clock
                size={12}
                variant="Linear"
                color= 'grey(0.6)'
              />
              <Text style={styles.cardText}>{item.createdAt}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap:5}}>
              <Message
                size={12}
                variant="Linear"
                color= 'grey(0.6)'
              />
              <Text style={styles.cardText}>{item.totalComments}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
  );
};

export default ItemBookmark;

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: 'black(0.03)',
    borderRadius: 15,
  },
  cardImage: {
    width: '100%',
    height: 145,
    borderRadius: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: fontType['Tjw-Bold'],
    fontSize: 14,
    color: 'white',
  },
  cardText: {
    fontSize: 12,
    fontFamily: fontType['Tjw-Medium'],
    color: 'grey(0.6)',
  },
  cardIcon: {
    backgroundColor: 'white(0.33)',
    padding: 5,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 5,
  },
  cardCategory: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  categoryBadge: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  categoryLabel: {
    fontSize: 10,
    fontFamily: fontType['Tjw-ExtraBold'],
    color: 'blue',
  },
  blogTitle:{
    fontSize: 16,
    fontFamily: fontType['Tjw-Bold'],
    color: 'black',
  },
  blogContent:{
    fontSize: 12,
    lineHeight: 20,
    fontFamily: fontType['Tjw-Medium'],
    color: 'grey',
  }
});