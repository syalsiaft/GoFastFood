import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';
import { fontType } from '../theme';

const ItemSmall = ({item}) => {
  return (
    <View style={styles.cardItem}>
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
            gap:30
          }}>
          <View style={{gap: 5, flex:1}}>
            <Text style={styles.cardCategory}>{item.category}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
          <Receipt21
            color={colors.grey(0.6)}
            variant="Linear"
            size={20}
          />
        </View>
        <View style={styles.cardInfo}>
          <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
          <Text style={styles.cardText}>{item.createdAt}</Text>
          <Message
            size={10}
            variant="Linear"
            color={colors.grey(0.6)}
          />
          <Text style={styles.cardText}>{item.totalComments}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemSmall;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType[' Tjw-Medium'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Tjw-ExtraBold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Tjw-Light'],
    color: colors.grey(0.6),
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
});