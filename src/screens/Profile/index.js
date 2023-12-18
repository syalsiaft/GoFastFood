import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft, Add, SearchNormal1} from 'iconsax-react-native';

const SearchBar = () => {
  const navigation = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SearchNormal1
          color="black"
          variant="Broken"
          size={25}
          style={{opacity: 0.9, marginHorizontal: '-34%'}}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Search"
          placeholderTextColor="#9e9e9e"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          borderWidth={0}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoFocus={true}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color="#9e9e9e" variant="Linear" size={24}  style={{marginLeft:10}}/>
        </TouchableOpacity>
        
      </View>
      {searchPhrase && (
          <TouchableOpacity onPress={() => setSearchPhrase('')}>
            <Add
              size={18}
              color="#000"
              variant="Linear"
              style={{left: 370,top: -45,transform: [{rotate: '45deg'}]}}
            />
          </TouchableOpacity>
        )}
    </View>
  );
};
export default SearchBar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  searchBar: {
    paddingHorizontal: 1,
    justifyContent: 'space-around',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 50,
    marginHorizontal: 10,
    margin: 13,
    padding: 10,
    borderRadius: 30,
  },
  textinput: {
    fontSize: 16,
    color: '#000',
    lineHeight: 18,
    padding: 0,
    flex: 1,
    marginLeft: 15,
  },
});