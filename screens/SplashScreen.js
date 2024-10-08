⁸// screens/SplashScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Auth'); // Replace 'Auth' with your initial screen
        }, 2000); // 2 seconds

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Logo1.png')} // Make sure you have a logo in the assets folder
                style={styles.logo}
            />
            <Text style={styles.title}>Welcome to FoodDeck</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Customize the background color
    },
    logo: {
        width: 400,
        height: 400,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green', // Customize the text color
    },
});

export default SplashScreen;
