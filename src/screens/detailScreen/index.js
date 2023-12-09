// Import React and necessary components from 'react-native'
import React, {useRef}  from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Animated } from 'react-native';
import {ArrowCircleLeft2, SearchNormal} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();

// Create the HomeScreen component
const DetailScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 10,
            padding: 10,
          }}
          onPress={() => navigation.goBack()}>
          <ArrowCircleLeft2 size={18} strokeWidth={2.5} color="white" />
        </TouchableOpacity>
      <Text style={styles.text}>Salmon Roe Sushi </Text>
      <Text style={styles.text}>There are a million delicious ways to enjoy salmon sushi roe! Depending on which version we make (salmon roe sushi) or salt roe sushi, I eat the roe with different things. </Text>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Export the HomeScreen component
export default DetailScreen;
