import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = '2ee89a92babc5df1e8f9fdccbddda109';

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        })
      }
    );
  }
  _getWeather= (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true,
      })
    })  
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather
            weatherName={name}
            temp={Math.floor(temperature - 273.15)}
          />
          ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>완전 심플한 기상청 :)</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,    // flex: 화면에서 어느 정도의 비율을 사용할지 설정
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 40,

  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 30,
  }
});
