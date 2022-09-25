import { StyleSheet, Text, Pressable, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AddButton({ addInput }) {

    return (
        <Pressable 
            onPress={addInput}
            style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.4
                : 1
            },
            styles.button
          ]}>
            <Ionicons name="add" color="#EEEEEE" size={30} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 50,
        width: 60,
    },
});