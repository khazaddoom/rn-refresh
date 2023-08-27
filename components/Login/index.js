import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function Login() {
  return (
    <View style={styles.container}>
        <Text style={styles.hero_text}>Login!</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
        />
        <TouchableOpacity
            style={styles.button}
        >
            <Text style={styles.button_text}>Login</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      height: '60%'
    },
    hero_text: {
        fontWeight: '700',
        fontSize: 32,
        color: "#5e6762"
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: '80%',
      backgroundColor: '#fff',
      color: "gray",
      borderRadius: 5,
      borderColor: "#d1dfdf",
      fontWeight: '500'
    },
    button : {
        borderRadius: 5,
        borderColor: "#d1dfdf",
        width: '80%',
        backgroundColor: "#17c669",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_text: {
        color: "#fff",
        fontWeight: '700'
    }
  });
  