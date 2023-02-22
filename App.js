import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './src/components/Loading'
import Weather from './src/components/Weather'

export default function App() {
  useEffect(() => {
    getLocation();
    console.log('ура');
  }, []);

  const API_KEY = '95e70a372dd2049039e252d53484721e';
  var Temp;
  var Condition;
  var Humidity;
  var Feels_like;
  var Speed;
  const [loading, setLoading] = useState(true);

  const getWeather = async (latitude, longitude) => {
    const { data: { main: { temp, humidity, feels_like }, weather, wind: { speed } } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    this.Condition = weather[0].main;
    this.Temp = temp;
    this.Humidity = humidity;
    this.Feels_like = feels_like;
    this.Speed = speed;
    // console.log(this.Condition);
    // console.log(this.Temp);
    // console.log(this.Humidity);
    // console.log(this.Feels_like);
    // console.log(this.Speed);
  };

  const getLocation = async () => {
    try {
      var a = new Date();
      const response = await Location.requestForegroundPermissionsAsync();
      // console.log(response);
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      const { data: { main: { temp, humidity, feels_like }, weather, wind: { speed } } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      this.Condition = weather[0].main;
      this.Temp = temp;
      this.Humidity = humidity;
      this.Feels_like = feels_like;
      this.Speed = speed;
      console.log(this.Condition);
      console.log(this.Temp);
      console.log(this.Humidity);
      console.log(this.Feels_like);
      console.log(this.Speed);

      // getWeather(latitude, longitude);
      if (new Date() - a < 5000) { setTimeout(() => { setLoading(false); }, 5000 - (new Date() - a)) }
      else { setLoading(false); console.log(new Date() - a); }
    } catch (error) {
      Alert.alert('Ошибка', "не могу определить геопозицию");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {loading ? <Loading /> : <Weather Temp={Math.round(this.Temp)} Condition={this.Condition} Humidity={this.Humidity} Feels_like={this.Feels_like} Speed={this.Speed} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
