import { StyleSheet, Text, Pressable, View } from 'react-native';

export default function CreateProgramButton({ createProgram }) {

    return (
        <Pressable 
            onPress={createProgram}
            style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.4
                : 1
            },
            styles.button
          ]}>
            <Text style={styles.buttonText}>Create program</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 50,
        width: 180,
    },
    buttonText: {
        color: "#EEEEEE",
        fontSize: 20,
    }
});