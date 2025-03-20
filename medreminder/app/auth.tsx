import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const [hasBiometric, setHasBiometric] = useState(false);
const [isAuthencating, setIsAuthencating] = useState(false);
const [error, setError] = useState(null);

const { width } = Dimensions.get("window");

export default function AuthScreen() {
  return (
    <LinearGradient colors={["#4CAF50", "#2E7D32"]} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="medical" size={80} color="white" />
        </View>
        <Text style={styles.title}>MedReminder</Text>
        <Text style={styles.subTitle}>Your Personal Medication Reminder</Text>
        <View style={styles.card}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.instructionText}>
            {hasBiometric
              ? "Use face ID/TouchID or Pin to access you medications"
              : "Enter to your PIN to access your medications "}
          </Text>

          <TouchableOpacity>
            <Ionicons
              name={hasBiometric ? "finger-print-outline" : "keypad-outline"}
              size={24}
              color="white"
            />
            <Text>
              {isAuthencating
                ? "Veryfing..."
                : hasBiometric
                ? "Authenticate..."
                : "Enter Pin"}
            </Text>
          </TouchableOpacity>

          {error && (
            <View>
              <Ionicons name="alert-circle" size={20} color={"#f44336"} />
              <Text>{error} </Text>
            </View>
          )}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer:{
    width:120,
    height:120,
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20

  },
  title:{
    fontSize:20,
    fontWeight: 'bold',
    color:'white',
    marginBottom:10,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: {width:1, height:1},
    textShadowRadius:3
  },
  subTitle:{
    fontSize:18,
    color:'rgba(255,255,255,0.9)',
    marginBottom:40,
    textAlign:'center'

  },
  card:{
    backgroundColor:"white",
    borderRadius:20,
    padding:30,
    width: width-40,
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset:{
      height:2,
      width:0

    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5
  },
  welcomeText:{
    fontSize:20,
    // color: 'white',
    alignItems:"center",
    marginBottom: 20
  },
  instructionText:{

  }

});
