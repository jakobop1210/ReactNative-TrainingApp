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
            <Text style={styles.buttonText}>Track weight</Text>
            <FontAwesome name="edit" color="#EEEEEE" size={15} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        position: "absolute",
        height: 50,
        width: 120,
        bottom: -7,
        right: 10,
    },
    buttonText: {
        color: "#EEEEEE",
        fontSize: 13,
    }
});