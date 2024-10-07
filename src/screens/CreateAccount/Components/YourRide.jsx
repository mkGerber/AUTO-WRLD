import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Experience = ({ onSelectExperience }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: selectedOption ? 1.1 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [selectedOption]);

  const handleSelectOption = (option) => {
    setSelectedOption(option); // This ensures only one option is selected at a time
    onSelectExperience(option); // Pass the selected option to the parent
  };

  const getScaleStyle = (option) => ({
    transform: [{ scale: selectedOption === option ? scaleAnim : 1 }],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your ride?</Text>

      {['Diehard', 'Advanced', 'Intermediate', 'Beginner'].map(option => (
        <View key={option} style={styles.optionContainer}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOption,
              getScaleStyle(option),
            ]}
            onPress={() => handleSelectOption(option)}
          >
            <Text style={styles.optionText}>{option.toUpperCase()}</Text>
          </TouchableOpacity>
          <Text style={styles.subText}>{`Description of ${option}`}</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => handleSelectOption('Not sure yet')}
      >
        <Text style={styles.linkText}>Not sure yet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80,
    textAlign: 'center',
  },
  optionContainer: {
    marginBottom: 30,
    alignItems: 'center',
    width: '100%',
  },
  optionButton: {
    backgroundColor: '#000',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    width: '80%',
  },
  selectedOption: {
    backgroundColor: '#FFE500', // Yellow when selected
  },
  optionText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subText: {
    color: '#000',
    fontSize: 16,
    marginTop: 5,
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: '#0000FF',
    textDecorationLine: 'underline',
  },
});

export default YourRide;
