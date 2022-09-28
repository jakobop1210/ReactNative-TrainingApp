import { StyleSheet, Text, Pressable, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DeleteButton( {onDelete, programNrDeleted} ) {

    return (
        <Pressable 
            onPress={() => onDelete(programNrDeleted)}
            style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.2
                : 1
            },
            styles.button
          ]}>
            <Text style={styles.buttonText}>Delete</Text>
            <MaterialCommunityIcons name="delete-outline" color="red" size={20} />
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
        top: 5,
        right: 0,
        width: 80,
        zIndex: 1
    },
    buttonText: {
        color: "#EEEEEE",
        fontSize: 20,
    }
});