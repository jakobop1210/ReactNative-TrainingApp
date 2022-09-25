import { StyleSheet, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ModalGoBackButton({ goBack }) {

    return (
        <Pressable 
            onPress={goBack}
            style={({ pressed }) => [
                {
                  opacity: pressed
                    ? 0.5
                    : 1
                },
                styles.button
            ]}>
            <Ionicons name="arrow-back" color="#6B6E74" size={30} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        height: 50,
        width: 60,  
    },
    buttonText: {
        color: "#EEEEEE",
        fontSize: 20,
        fontWeight: "600"
    }
});