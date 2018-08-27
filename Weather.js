import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient, Font } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "비 징그럽게 온다",
    subtitle: "창문 열고 확인해보세요",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "쪄 죽기 일보 직전",
    subtitle: "어서 실내로 대피하세요",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "천둥 번개 조심",
    subtitle: "집에 버로우하세요",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "구름 많음",
    subtitle: "구름 많네요. 많네 많아",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "눈",
    subtitle: "얼마나 더 내릴지 상상해보세요",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "이슬비",
    subtitle: "캠핑을 떠납시다~",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "옅은 안개",
    subtitle: "안개가 조금 있겠습니다",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "안개",
    subtitle: "안개가 조금 짙겠습니다",
    icon: "weather-fog"
  }
};

function Weather({weatherName, temp}){
  return(
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={150}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}ºC</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  weatherName: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  temp: {
    fontSize: 40,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 45
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    marginBottom: 100,
    backgroundColor: "transparent",
    color: "white",
    fontSize: 24,
  }
});