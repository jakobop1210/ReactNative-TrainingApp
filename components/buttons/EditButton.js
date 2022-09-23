import { StyleSheet, Text, Pressable, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function EditButton({ }) {

    return (
        <Pressable style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.2
                : 1
            },
            styles.button
          ]}>
            <Text style={styles.buttonText}>Edit</Text>
            <FontAwesome name="edit" color="#6B6E74" size={25} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        position: "absolute",
        bottom: 10,
        right: 5,
        width: 80,
    },
    buttonText: {
        color: "#6B6E74",
        fontSize: 20,
    }
});
