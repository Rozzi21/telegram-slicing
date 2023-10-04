import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Image
        source={require('./assets/telegram.png')} // Ganti dengan lokasi logo Telegram Anda
        style={styles.logo}
      />
      <Text style={styles.title}>Telegram</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.subtitle}>Pesan yang Aman dan Cepat</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0088cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 16,
  },
  content: {
    alignItems: 'center',
    marginTop: 32,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: 24,
  },
  buttonText: {
    fontSize: 18,
    color: '#0088cc',
    fontWeight: 'bold',
  },
});
