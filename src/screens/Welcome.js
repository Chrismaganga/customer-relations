import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from "react-native";

  const Welcome = ({ navigation }) => {
    return (
     <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Customer Relations</Text>

      <View style={styles.section}>
        <Text style={styles.heading}>Customers</Text>
        <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate("CustomerList")}
        >
         <Text style={styles.buttonText}>View Customers</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Customer</Text>
        <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate("CustomerDetail")}
        >
         <Text style={styles.buttonText}>View Customer</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Regions</Text>
        <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate("RegionList")}
        >
         <Text style={styles.buttonText}>View Regions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Region</Text>
        <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate("RegionDetail")}
        >
         <Text style={styles.buttonText}>View Region</Text>
        </TouchableOpacity>
      </View>
     </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
     flexGrow: 1,
     justifyContent: "center",
     alignItems: "center",
     padding: 20,
     backgroundColor: "#f0f8ff",
    },
    title: {
     fontSize: 28,
     fontWeight: "bold",
     marginBottom: 30,
     color: "#333",
    },
    section: {
     marginBottom: 20,
     alignItems: "center",
    },
    heading: {
     fontSize: 22,
     marginBottom: 10,
     color: "#555",
    },
    button: {
     backgroundColor: "#007bff",
     padding: 15,
     borderRadius: 5,
     alignItems: "center",
     width: "80%",
    },
    buttonText: {
     color: "white",
     fontSize: 18,
    },
  });

  export default Welcome;
