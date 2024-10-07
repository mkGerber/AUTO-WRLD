import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Enjoyments = ({ onSelectEnjoyment }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: selectedOptions.length ? 1.1 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [selectedOptions]);

  const handleSelectOption = (option) => {
    if (selectedOptions.includes(option)) {
      // Remove option if it's already selected
      setSelectedOptions((prevOptions) => prevOptions.filter((item) => item !== option));
    } else {
      // Add option if it's not selected
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
    onSelectEnjoyment(selectedOptions); // Pass the selected options array to the parent
  };

  const getScaleStyle = (option) => ({
    transform: [{ scale: selectedOptions.includes(option) ? scaleAnim : 1 }],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What Do You Enjoy?</Text>

      {['CAR SHOWS', 'BUILD/FIX', 'RACING', 'OFF-ROAD', 'PHOTOGRAPHY'].map((option) => (
        <View key={option} style={styles.optionContainer}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOptions.includes(option) && styles.selectedOption,
              getScaleStyle(option),
            ]}
            onPress={() => handleSelectOption(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
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
    marginBottom: 45,
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
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: '#0000FF',
    textDecorationLine: 'underline',
  },
});

export default Enjoyments;
