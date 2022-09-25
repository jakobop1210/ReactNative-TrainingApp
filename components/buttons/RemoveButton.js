import { StyleSheet, Text, Pressable, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RemoveButton({ removeInput }) {

    return (
        <Pressable 
            onPress={removeInput}
            style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.4
                : 1
            },
            styles.button
          ]}>
            <Ionicons name="remove" color="#EEEEEE" size={30} />
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