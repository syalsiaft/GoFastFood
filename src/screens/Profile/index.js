import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {Setting2} from 'iconsax-react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, BlogList} from '../../../data';
import {ItemSmall} from '../../components';
import {fontType, colors} from '../../theme';

export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.konten}>
          <View style={styles.kontenbaris}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              style={styles.Image}>
              </Image>
              <View style={styles.kontencoloum}>
                <Text style={styles.teks}>Syalsia Fatiha</Text> 
                <Text style={[styles.teks,{color:'black'}, {fontSize:18}]}>Subscribe</Text>  
              </View>
            
          </View>
        </View>
        <View style={styles.Line}></View>
        <View style={styles.konten2}>
        <View>
            <Text style={styles.title}>For More Value</Text>
            <Text style={[styles.teks, {paddingTop:10}, {color:'black'}, {paddingBottom:10}]}>Rewards</Text>
            <View style={styles.Line2}></View>
            <Text style={[styles.teks, {paddingTop:10}, {color:'black'}, {paddingBottom:10}]}>Subscriptions</Text>
            <View style={[styles.Line2, {height: 1, opacity: 0.2 }]}></View>
            <Text style={[styles.teks, {paddingTop:10}, {color:'black'}]}>Challenges</Text>

            <Text style={[styles.title, {paddingTop:30}]}>My Account</Text>
            <Text style={[styles.teks, {paddingTop:10}, {color:'black'}, {paddingBottom:10}]}>Platinum</Text>
            <View style={[styles.Line2, {height: 1, opacity: 0.2 }]}></View>
            <Text style={[styles.teks, {paddingTop:10}, {color:'black'}, {paddingBottom:10}]}>Favourites</Text>
            <View style={[styles.Line2, {height: 1, opacity: 0.2 },]}></View>
            <Text style={[styles.teks, {paddingTop:10}, {color:'black'}, {paddingBottom:10}]}>Payment Methods</Text>
            <View style={[styles.Line2, {height: 1, opacity: 0.2 },]}></View>
            <Text style={[styles.teks, {paddingTop:10}, {color:'black'}, {paddingBottom:10}]}>Scheduled</Text>
            <View style={[styles.Line2, {height: 1, opacity: 0.2 },]}></View>

            <Text style={[styles.title, {paddingTop:30}]}>General</Text>
            <Text style={[styles.teks, {paddingTop:10}, {color:'black'}, {paddingBottom:10}]}>Help Centre</Text>
            <View style={[styles.Line2, {height: 1, opacity: 0.2 }]}></View>
            <Text style={[styles.teks, {paddingTop:10}, {color:'black'}, {paddingBottom:10}]}>Settings</Text>
            <View style={[styles.Line2, {height: 1, opacity: 0.2 },]}></View>
            <Text style={[styles.teks, {paddingTop:10}, {color:'black'}, {paddingBottom:10}]}>Language</Text>
            <View style={[styles.Line2, {height: 1, opacity: 0.2 },]}></View>
            <Text style={[styles.teks, {paddingTop:10}, {color:'black'}, {paddingBottom:10}]}>Share Feedback</Text>
            <View style={[styles.Line2, {height: 1, opacity: 0.2 },]}></View>

        </View>
        </View>
       
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  kontenbaris: {
    flexDirection: 'row',
    justifyContent: 'left',
  },

  kontencoloum: {
    flexDirection: 'column',
    justifyContent: 'Left',
    alignItems: 'Left',
    paddingHorizontal : 20,
    paddingTop : 10,
    paddingBottom: 20,
  },

  konten: {
    paddingTop: 10,
    margin: 10,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    flexDirection: 'coloumn',
  },

  konten2: {
    paddingTop: 10,
    margin: 10,
    paddingHorizontal: 5,
    paddingBottom:20,
    justifyContent: 'space-between',
    flexDirection: 'coloumn',
  },

  teks: {
    fontSize: 20,
    fontFamily: fontType['Tjw-Medium'],
    justifyContent: 'space-between',
    color: 'blue',
  },
  Line: {
    width: '100%',
    height: 3,
    backgroundColor: 'black',
  },
  Line2: {
    width: '98%',
    height: 1,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 23,
    fontFamily: fontType['Tjw-Bold'],
    color: 'black',
  },
  Image: {
    width: 70,
    height: 70,
    borderRadius: 75,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: 'black',
  },
});
