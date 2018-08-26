import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";
import { Ionicons } from "@expo/vector-icons";


export default class App extends React.Component {
  state = {
    isLoaded: false,
  };
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {!isLoaded ? (
          <Weather />
          ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>완전 심플한 기상청</Text>
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
  }
});
