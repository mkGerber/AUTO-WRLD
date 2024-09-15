import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

import  Experience  from './Components/Experience';

const ExperienceScreen = () => {

  return (
    <Experience/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80,
    textAlign: 'center',
    marginTop: 50,
  },
  optionContainer: {
    marginBottom: 30, // Creates consistent space between options
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
  nextButton: {
    backgroundColor: '#FFE500',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 30,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ExperienceScreen;
