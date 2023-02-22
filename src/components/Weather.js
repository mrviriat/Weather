import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

const WeatherOprions = {
    Thunderstorm: {
        iconName: 'thunderstorm',
        description: 'беги домой, дурочка'
    },
    Clouds: {
        iconName: 'cloud',
        description: 'нет солнышка :(, только облачка'
    },
    Rain: {
        iconName: 'rainy',
        description: 'не забудь с собой зонт'
    },
    Snow: {
        iconName: 'snow-sharp',
        description: 'самое время кинуть тебе в лицо снежок'
    },
    Dust: {
        iconName: 'alert',
        description: 'береги глаза, много пылинок'
    },
    Drizzle: {
        iconName: 'rainy',
        description: 'посмотри, маленькие дождинки. такие же как и ты'
    },
    Clear: {
        iconName: 'sunny',   
        description: 'ура! отличное время для прогулки'
    },
}

export default function Weather({ Temp, Condition, Humidity, Feels_like, Speed }) {
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.half_of_container}>
                <Ionicons name={WeatherOprions[Condition].iconName} size={100} color="white" />
                <Text style={styles.text}>{Temp}°</Text>
            </View>
            <View style={styles.second_half_of_container}>
                <Text style={styles.text_header}>{Condition}</Text>
                <Text style={styles.text_description}>{WeatherOprions[Condition].description}</Text>
                <Text style={styles.text_description}></Text>
                <Text style={styles.text_description}>feels like: {Feels_like}°</Text>
                <Text style={styles.text_description}>humidity: {Humidity}%</Text>
                <Text style={styles.text_description}>wind speed: {Speed} m/s</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    half_of_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    second_half_of_container: {
        flex: 1,
        marginLeft: 25,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 45,
        color: 'white',
    },
    text_header: {
        fontSize: 45,
        color: 'white',
    },
    text_description: {
        fontSize: 20,
        color: 'white',
    },
});