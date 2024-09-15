import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

const Enjoyments = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(scaleAnim, {
        toValue: selectedOption ? 1.1 : 1,
        duration: 300,
        useNativeDriver: true,
        }).start();
    }, [selectedOption]);

    const handleSelectOption = (option: string) => {
        setSelectedOption(option); // This ensures only one option is selected at a time
    };

    const getScaleStyle = (option: string) => ({
        transform: [{ scale: selectedOption === option ? scaleAnim : 1 }],
    });   

    return (
        <View style={styles.container}>
            <Text style={styles.title}>How Car Are You?</Text>

            <View style={styles.optionContainer}>
                <TouchableOpacity
                style={[
                    styles.optionButton,
                    selectedOption === 'Diehard' && styles.selectedOption,
                    getScaleStyle('Diehard'),
                ]}
                onPress={() => handleSelectOption('Diehard')}
                >
                <Text style={styles.optionText}>DIEHARD</Text>
                </TouchableOpacity>
                <Text style={styles.subText}>Born to be mechanic</Text>
            </View>

            <View style={styles.optionContainer}>
                <TouchableOpacity
                style={[
                    styles.optionButton,
                    selectedOption === 'Advanced' && styles.selectedOption,
                    getScaleStyle('Advanced'),
                ]}
                onPress={() => handleSelectOption('Advanced')}
                >
                <Text style={styles.optionText}>ADVANCED</Text>
                </TouchableOpacity>
                <Text style={styles.subText}>Experienced with cars</Text>
            </View>

            <View style={styles.optionContainer}>
                <TouchableOpacity
                style={[
                    styles.optionButton,
                    selectedOption === 'Intermediate' && styles.selectedOption,
                    getScaleStyle('Intermediate'),
                ]}
                onPress={() => handleSelectOption('Intermediate')}
                >
                <Text style={styles.optionText}>INTERMEDIATE</Text>
                </TouchableOpacity>
                <Text style={styles.subText}>Highly enjoy cars but still learning</Text>
            </View>

            <View style={styles.optionContainer}>
                <TouchableOpacity
                style={[
                    styles.optionButton,
                    selectedOption === 'Beginner' && styles.selectedOption,
                    getScaleStyle('Beginner'),
                ]}
                onPress={() => handleSelectOption('Beginner')}
                >
                <Text style={styles.optionText}>BEGINNER</Text>
                </TouchableOpacity>
                <Text style={styles.subText}>Learning the basics but interested</Text>
            </View>

            <TouchableOpacity
                style={styles.linkButton}
                onPress={() => handleSelectOption('Not sure yet')}
            >
                <Text style={styles.linkText}>Not sure yet</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => console.log('Next pressed')}
            >
                <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
        </View>
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

  export default Enjoyments;