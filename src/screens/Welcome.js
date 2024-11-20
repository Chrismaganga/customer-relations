import React from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Customer-relations</Text>

      <Text style={styles.heading}>Customers</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CustomerList")}
      >
        <Text style={styles.buttonText}>customers</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Customer</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CustomerDetail")}
      >
        <Text style={styles.buttonText}>Customer</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Regions</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RegionList")}
      >
        <Text style={styles.buttonText}>Regions</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Region</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("regionList")}
      >
        <Text style={styles.buttonText}>Region</Text>
      </TouchableOpacity>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "cyan",
    borderColor: "black",
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
    borderRadius: 10,
    backgroundColor: "lightblue",
    padding: 10,
    borderBlockColor: "black",
    color: "blue",
    shadowColor: "black",
  },
  heading: {
    fontSize: 20,
    marginVertical: 10,
    color: "blue",
    margin: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  
    width: "50%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Welcome;
