import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { BackHandler } from "react-native";
import Colors from "../components/colors";
import { Ionicons } from "@expo/vector-icons";

const Main = () => {
  useEffect(() => {
    let backPressCount = 0;

    const backAction = () => {
      if (backPressCount < 1) {
        backPressCount += 1;
        setTimeout(() => {
          backPressCount = 0;
        }, 2000); // Reset hitungan dalam 2 detik
      } else {
        BackHandler.exitApp(); // Keluar dari aplikasi
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Bersihkan event listener saat komponen unmount
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_profil}>
          <View>
          <Image
            style={styles.header_image}
            source={require("./../assets/profil.jpg")}
          />
          <Text style={styles.header_text}>Telegram</Text>
          </View>
          <TouchableOpacity style={styles.header_button}>
            <View style={{alignSelf: "flex-end"}}>
              <Ionicons name="add-circle" color="white" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.header_button}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.text,
  },

  header: {
    height: 300,
    borderRadius: 10,
    padding: 4,
    backgroundColor: Colors.primary,
  },

  header_profil: {
    flexDirection: "row",
    alignItems: "center",
    height: 20,
    marginTop: 45,
    height: 70,
    padding: 10,
  },

  header_image: {
    width: 40,
    height: 40,
    marginHorizontal: "auto",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 1,
  },

  header_text: {
    paddingLeft: 10,
    marginVertical: "auto",
    fontSize: 18,
    color: Colors.text,
    fontWeight: "bold",
  },
  text: {
    fontSize: 24,
  },
});

export default Main;
