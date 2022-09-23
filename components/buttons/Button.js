import { StyleSheet, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Button({title}) {

    return (
        <Pressable style={styles.newButton}>
            <Text style={styles.buttonText}>{title}</Text>
            <Ionicons name="add" color="#EEEEEE" size={30} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    newButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 150,  
    },
    buttonText: {
        color: "#EEEEEE",
        fontSize: 20,
        fontWeight: "600"
    }
});