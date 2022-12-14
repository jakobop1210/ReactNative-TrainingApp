import { StyleSheet, Text, Pressable, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function EditButton({ edit }) {

    return (
        <Pressable 
            onPress={edit}
            style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.2
                : 1
            },
            styles.button
          ]}>
            <Text style={styles.buttonText}>Edit</Text>
            <Entypo name="edit" color="#EEEEEE" size={20} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        position: "absolute",
        height: 40,
        top: 10,
        right: 5,
        width: 80,
    },
    buttonText: {
        color: "#EEEEEE",
        fontSize: 20,
    }
});
