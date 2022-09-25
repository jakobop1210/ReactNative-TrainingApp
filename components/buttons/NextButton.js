import { StyleSheet, Text, Pressable, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function NextButton({ showNextScreen }) {

    return (
        <Pressable 
            onPress={showNextScreen}
            style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.4
                : 1
            },
            styles.button
          ]}>
            <Text style={styles.buttonText}>Next</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 50,
        width: 120,
    },
    buttonText: {
        color: "#EEEEEE",
        fontSize: 20,
    }
});