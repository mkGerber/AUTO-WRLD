import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Experience from './Components/Experience';
import Enjoyments from './Components/Enjoyments'; // Import your next component
import YourRide from './Components/YourRide'; // Import your next component

const CreateAccount = () => {
  const [currentStep, setCurrentStep] = useState('experience'); // Track which component is showing
  const [experience, setExperience] = useState([]); // Store selected experience
  const [enjoyments, setEnjoyments] = useState([]); // Store selected enjoyments
  const translateXAnim = useRef(new Animated.Value(0)).current;

  const animateToNext = () => {
    Animated.timing(translateXAnim, {
      toValue: -500, // Swipe left
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      if (currentStep === 'experience') {
        setCurrentStep('enjoyments'); // Move to next component
      } else if (currentStep === 'enjoyments') {
        // Implement logic for more screens if needed
        setCurrentStep('yourRide'); // Move to next component
      }
      translateXAnim.setValue(500); // Reset position
      Animated.timing(translateXAnim, {
        toValue: 0, // Bring the new screen into view
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const animateToPrevious = () => {
    Animated.timing(translateXAnim, {
      toValue: 500, // Swipe right
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setCurrentStep('experience'); // Move to previous component
      translateXAnim.setValue(-500); // Prepare the previous screen for animation
      Animated.timing(translateXAnim, {
        toValue: 0, // Bring the previous screen into view
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            transform: [{ translateX: translateXAnim }],
          },
        ]}
      >
        {currentStep === 'experience' && (
          <Experience
            onSelectExperience={(selectedOption) => setExperience(selectedOption)}
          />
        )}
        {currentStep === 'enjoyments' && (
          <Enjoyments
            onSelectEnjoyment={(selectedOption) => setEnjoyments(selectedOption)}
          />
        )}
        {currentStep === 'yourRide' && <YourRide />}
        
      </Animated.View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          console.log('Experience:', experience);
          console.log('Enjoyments:', enjoyments);
          animateToNext();
        }}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 15,
  },
  animatedContainer: {
    flex: 1,
    width: '100%',
  },
  nextButton: {
    backgroundColor: '#FFE500',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  activeBackButton: {
    backgroundColor: '#FFE500', // Yellow when active
  },
  disabledBackButton: {
    backgroundColor: '#e0e0e0', // Light grey when disabled
  },
});

export default CreateAccount;
